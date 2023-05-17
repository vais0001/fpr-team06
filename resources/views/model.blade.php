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
        <div class="button" value="1">Floor 1</div>
        <div class="button" value="2">Floor 2</div>
        <div class="button" value="3">Floor 3</div>
    </div>
</head>
<body>
</body>
</html>
