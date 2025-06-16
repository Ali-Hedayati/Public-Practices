<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Batch Report Download</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>

<body>
    <h1>Batch Report Download</h1>

    <button id="startDownload">Start Download</button>
    <p id="status"></p>

    <script>
        // Pass the user list as a JSON-encoded variable

        const users = [{
                "full_name": "شرکت سرمایه گذاری سپهر اعتماد آفرین",
                "national_code": "14005453886"
            },
            {
                "full_name": "بنا ماندگار نصر پارس",
                "national_code": "14006568357"
            },
            {
                "full_name": "شرکت توسعه ارتباطات هوشمند تبیان",
                "national_code": "14008334607"
            },
            {
                "full_name": "راهبردهای شبکه خلاق پارس",
                "national_code": "14005872516"
            },
           
        ];



        const apiUrl = "{{ route('download.report.batch') }}"; // Backend API endpoint
        const batchSize = 5; // Number of users per batch
        const delay = 5000; // Delay in milliseconds (5 seconds)

        document.getElementById('startDownload').addEventListener('click', async () => {
            let batchIndex = 0;

            document.getElementById('status').innerText = "Starting batch processing...";

            while (batchIndex * batchSize < users.length) {
                const batch = users.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize);
                document.getElementById('status').innerText = `Processing batch ${batchIndex + 1}...`;

                try {
                    await axios.post(apiUrl, {
                        batch
                    });
                    console.log(`Batch ${batchIndex + 1} processed successfully.`);
                } catch (error) {
                    console.error(`Batch ${batchIndex + 1} failed.`, error);
                }

                batchIndex++;
                if (batchIndex * batchSize < users.length) {
                    document.getElementById('status').innerText = `Waiting for ${delay / 1000} seconds before the next batch...`;
                    await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
                }
            }

            document.getElementById('status').innerText = "All batches processed successfully!";
        });
    </script>
</body>

</html>