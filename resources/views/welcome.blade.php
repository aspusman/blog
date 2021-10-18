<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Blog site</title>

    </head>
    <body>
        <div id="app">
            
            <app></app>
             <router-view name="nav"></router-view>
        <router-view></router-view>

        </div>




        <script src="{{mix('js/app.js')}}"></script>
    </body>
</html>
