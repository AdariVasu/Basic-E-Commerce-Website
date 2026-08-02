# ZENTRO FULL-STACK REST API BACKEND SERVER (POWERSHELL .NET HTTP LISTENER)
Param([int]$Port = 8080)

$appDir = "C:\Users\ADARI VASU\.gemini\antigravity\scratch\ecommerce-app"
Set-Location $appDir

# Load 1300+ Products Dataset into Memory
$jsonPath = Join-Path $appDir "products_data.json"
if (Test-Path $jsonPath) {
    $rawJson = Get-Content -Path $jsonPath -Raw
    $globalDataset = ($rawJson | ConvertFrom-Json).products
    Write-Host "Loaded $($globalDataset.Count) products into Backend Memory DB!" -ForegroundColor Green
} else {
    Write-Host "products_data.json not found." -ForegroundColor Red
    $globalDataset = @()
}

# Backend State Stores
$usersDB = [System.Collections.Generic.List[PSObject]]::new()
$usersDB.Add([PSCustomObject]@{ id="rahul"; name="Rahul Sharma"; phone="9876543210"; email="rahul@example.com"; password="rahul123"; pincode="560001"; coins=250 })

$ordersDB = [System.Collections.Generic.List[PSObject]]::new()
$ordersDB.Add([PSCustomObject]@{ orderId="ZEN-998811"; total=1499; date="01 Aug 2026"; items=@("Aashirvaad Atta 10kg", "Fortune Oil 5L"); status="In Transit" })

# Mime Types for Static Assets
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

$started = $false
try {
    $listener.Start()
    $started = $true
    Write-Host "Zentro Full-Stack Backend REST API Server is LIVE on $prefix" -ForegroundColor Cyan
} catch {
    Write-Host "Port $Port busy, stopping stale listener..." -ForegroundColor Yellow
}

if (-not $started) {
    $Port = 8085
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Host "Zentro Backend Server running on $prefix" -ForegroundColor Cyan
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    # CORS Headers
    $response.Headers.Add("Access-Control-Allow-Origin", "*")
    $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")

    if ($request.HttpMethod -eq "OPTIONS") {
        $response.StatusCode = 200
        $response.Close()
        continue
    }

    $rawUrl = $request.Url.AbsolutePath
    $queryParams = [System.Web.HttpUtility]::ParseQueryString($request.Url.Query)

    # =========================================================================
    # BACKEND REST API ENDPOINTS (/api/...)
    # =========================================================================

    if ($rawUrl.StartsWith("/api/")) {
        $response.ContentType = "application/json; charset=utf-8"
        $jsonResult = ""

        try {
            # 1. GET /api/products
            if ($rawUrl -eq "/api/products" -and $request.HttpMethod -eq "GET") {
                $cat = $queryParams["category"]
                $q = $queryParams["q"]
                $sort = $queryParams["sort"]
                
                $page = 1
                if ($queryParams["page"]) { $page = [int]$queryParams["page"] }

                $limit = 24
                if ($queryParams["limit"]) { $limit = [int]$queryParams["limit"] }

                $filtered = $globalDataset

                if ($cat -and $cat -ne "all") {
                    $catLower = $cat.Trim().ToLower()
                    $filtered = $filtered | Where-Object { $_.category -and ($_.category.ToString().ToLower() -eq $catLower) }
                }

                if ($q -and $q.Trim() -ne "") {
                    $queryStr = $q.Trim().ToLower()
                    $filtered = $filtered | Where-Object { 
                        ($_.name -and $_.name.ToString().ToLower().Contains($queryStr)) -or 
                        ($_.description -and $_.description.ToString().ToLower().Contains($queryStr)) -or 
                        ($_.category -and $_.category.ToString().ToLower().Contains($queryStr))
                    }
                }

                if ($sort -eq "price-low") { $filtered = $filtered | Sort-Object price }
                elseif ($sort -eq "price-high") { $filtered = $filtered | Sort-Object price -Descending }
                elseif ($sort -eq "rating") { $filtered = $filtered | Sort-Object rating -Descending }
                elseif ($sort -eq "name") { $filtered = $filtered | Sort-Object name }

                $totalList = @($filtered)
                $total = $totalList.Count
                $skip = ($page - 1) * $limit
                $pageProducts = $totalList | Select-Object -Skip $skip -First $limit

                $apiObj = @{
                    status = "success"
                    total = $total
                    page = $page
                    totalPages = [math]::Ceiling($total / $limit)
                    products = $pageProducts
                }
                $jsonResult = $apiObj | ConvertTo-Json -Depth 5
            }
            # 2. POST /api/auth/login
            elseif ($rawUrl -eq "/api/auth/login" -and $request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $bodyJson = $reader.ReadToEnd() | ConvertFrom-Json
                $reader.Close()

                $loginId = $bodyJson.loginId
                $pass = $bodyJson.password

                $foundUser = $usersDB | Where-Object { 
                    ($_.id -eq $loginId -or $_.phone -eq $loginId -or $_.email -eq $loginId) -and $_.password -eq $pass
                } | Select-Object -First 1

                if ($foundUser) {
                    $jsonResult = (@{ status="success"; message="Login successful"; user=$foundUser } | ConvertTo-Json)
                } else {
                    $response.StatusCode = 401
                    $jsonResult = (@{ status="error"; message="Invalid User ID, Mobile Number or Password" } | ConvertTo-Json)
                }
            }
            # 3. POST /api/auth/register
            elseif ($rawUrl -eq "/api/auth/register" -and $request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $bodyJson = $reader.ReadToEnd() | ConvertFrom-Json
                $reader.Close()

                $existing = $usersDB | Where-Object { $_.id -eq $bodyJson.userId -or $_.phone -eq $bodyJson.phone } | Select-Object -First 1
                if ($existing) {
                    $response.StatusCode = 400
                    $jsonResult = (@{ status="error"; message="User ID or Mobile Number already registered!" } | ConvertTo-Json)
                } else {
                    $newUser = [PSCustomObject]@{
                        id = $bodyJson.userId
                        name = $bodyJson.name
                        phone = $bodyJson.phone
                        email = $bodyJson.email
                        password = $bodyJson.password
                        pincode = "560001"
                        coins = 100
                    }
                    $usersDB.Add($newUser)
                    $jsonResult = (@{ status="success"; message="Registration successful! Welcome to Zentro."; user=$newUser } | ConvertTo-Json)
                }
            }
            # 4. POST /api/pincode
            elseif ($rawUrl -eq "/api/pincode" -and $request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $bodyJson = $reader.ReadToEnd() | ConvertFrom-Json
                $reader.Close()

                $pin = $bodyJson.pincode
                if ($pin -match '^\d{6}$') {
                    $city = "Bengaluru"
                    if ($pin.StartsWith("11")) { $city = "New Delhi" }
                    elseif ($pin.StartsWith("40")) { $city = "Mumbai" }
                    elseif ($pin.StartsWith("60")) { $city = "Chennai" }
                    elseif ($pin.StartsWith("70")) { $city = "Kolkata" }

                    $jsonResult = (@{ status="success"; pincode=$pin; city=$city; delivery="Express Tomorrow by 5 PM"; serviceable=$true } | ConvertTo-Json)
                } else {
                    $response.StatusCode = 400
                    $jsonResult = (@{ status="error"; message="Please enter a valid 6-digit Indian Pincode" } | ConvertTo-Json)
                }
            }
            # 5. POST /api/checkout
            elseif ($rawUrl -eq "/api/checkout" -and $request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $bodyJson = $reader.ReadToEnd() | ConvertFrom-Json
                $reader.Close()

                $newOrderId = "ZEN-" + (Get-Random -Minimum 100000 -Maximum 999999)
                $newOrder = [PSCustomObject]@{
                    orderId = $newOrderId
                    total = $bodyJson.total
                    date = (Get-Date).ToString("dd MMM yyyy")
                    items = $bodyJson.items
                    status = "Confirmed - In Transit"
                }
                $ordersDB.Add($newOrder)
                $jsonResult = (@{ status="success"; message="Order placed successfully!"; orderId=$newOrderId; order=$newOrder } | ConvertTo-Json)
            }
            # 6. GET /api/orders
            elseif ($rawUrl -eq "/api/orders" -and $request.HttpMethod -eq "GET") {
                $jsonResult = (@{ status="success"; orders=$ordersDB } | ConvertTo-Json -Depth 4)
            }
            else {
                $response.StatusCode = 404
                $jsonResult = (@{ status="error"; message="Endpoint not found" } | ConvertTo-Json)
            }
        } catch {
            $response.StatusCode = 500
            $jsonResult = (@{ status="error"; message=$_.Exception.Message } | ConvertTo-Json)
        }

        $buffer = [System.Text.Encoding]::UTF8.GetBytes($jsonResult)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        $response.Close()
        continue
    }

    # =========================================================================
    # STATIC FILE SERVER FOR FRONTEND (index.html, style.css, script.js)
    # =========================================================================

    $localPath = Join-Path $appDir ($rawUrl.TrimStart('/') -replace '/', '\')
    if ((Test-Path $localPath) -and -not (Get-Item $localPath).PSIsContainer) {
        $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
        if ($mimeTypes.ContainsKey($ext)) { $response.ContentType = $mimeTypes[$ext] }
        
        $bytes = [System.IO.File]::ReadAllBytes($localPath)
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $indexPath = Join-Path $appDir "index.html"
        if (Test-Path $indexPath) {
            $response.ContentType = "text/html; charset=utf-8"
            $bytes = [System.IO.File]::ReadAllBytes($indexPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
    }
    $response.Close()
}
