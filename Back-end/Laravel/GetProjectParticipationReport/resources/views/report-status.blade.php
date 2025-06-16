<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report Status</title>
</head>
<body>
    <h1>Report Download Status</h1>
    <ul>
        @foreach ($savedFiles as $file)
            <li><a href="{{ asset('storage/reports/' . basename($file)) }}" target="_blank">{{ basename($file) }}</a></li>
        @endforeach
    </ul>
</body>
</html>
