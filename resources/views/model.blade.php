<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
    <title>My first three.js app</title>
    <style>
        body { margin: 0; padding: 0; overflow: hidden}

        .button-container {
            position: fixed;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
        }

        .button {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    </style>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <div class="button-container">
        <button class="button" value="ground">Ground Floor</button>
        <button class="button" value="1">Floor 1</button>
        <button class="button" value="2">Floor 2</button>
        <button class="button" value="3">Floor 3</button>
    </div>
</head>
<body>
</body>
</html>
