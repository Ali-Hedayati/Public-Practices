<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Reports</title>
</head>

<body>
    <h1>Download Participation Reports</h1>
    <form action="{{ route('download.reports') }}" method="POST">
        @csrf
        <button type="submit">Download Reports</button>
    </form>

</body>

</html>