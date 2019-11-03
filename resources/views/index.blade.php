<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>Vowelify App</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Pacifico&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{mix ('/css/app.css')}}" rel="stylesheet" />
</head>

<body>
    <div id="root"></div>

    <!-- js -->
    <script src="{{mix ('/js/app.js')}}"></script>
</body>

</html>