<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReportController extends Controller
{
    public function downloadReports(Request $request)
    {
        $apiKey = '6c850770-3500-4c68-be9d-c7b382a96a98';
        $projectId = 'af660e38-8f44-4502-accf-be3df1a01ad1';

        // Simulating the JSON data input
        $users = json_decode(' ', true);

        $saveDirectory = storage_path('app/public/reports');

        // Ensure the directory exists
        if (!is_dir($saveDirectory)) {
            mkdir($saveDirectory, 0777, true);
        }

        $savedFiles = [];

        foreach ($users as $user) {
            $fullName = $user['full_name'];
            $nationalID = $user['national_code'];

            Log::info("------------------------------------------------------------------");
            Log::info("Starting process for: {$fullName} (National ID: {$nationalID})");

            try {
                $response = Http::post('https://cfapi.ifb.ir/projects/GetProjectParticipationReport', [
                    'ApiKey' => $apiKey,
                    'projectID' => $projectId,
                    'nationalID' => $nationalID,
                ]);

                // Handle rate-limiting (HTTP 429)
                if ($response->status() === 429) {
                    Log::warning("Rate limit reached for: {$fullName} (National ID: {$nationalID}). Pausing for 60 seconds...");
                    // sleep(60); // Wait for 1 minute before retrying
                    continue; // Skip this user and move to the next iteration
                }

                if ($response->successful()) {
                    $sanitizedFullName = preg_replace('/[^\w\s\-]/u', '', $fullName);
                    $fileName = "{$sanitizedFullName}.pdf";
                    $filePath = $saveDirectory . '/' . $fileName;

                    file_put_contents($filePath, $response->body());
                    $savedFiles[] = $filePath;

                    Log::info("Successfully downloaded report for: {$fullName} (National ID: {$nationalID})");
                } else {
                    Log::error("Failed to download report for: {$fullName} (National ID: {$nationalID}). Response: " . $response->body());
                }
            } catch (\Exception $e) {
                Log::error("Error occurred for {$fullName} (National ID: {$nationalID}). Error: " . $e->getMessage());
            }

            Log::info("Finished processing for: {$fullName} (National ID: {$nationalID}). Waiting for 6 seconds...");
            sleep(6);
        }


        return response()->json([
            'message' => 'Reports downloaded successfully!',
            'savedFiles' => $savedFiles,
        ]);
    }

    public function downloadReportBatch(Request $request)
    {
        $batch = $request->input('batch'); // Get the batch of users from the request
        $apiKey = '6c850770-3500-4c68-be9d-c7b382a96a98';
        $projectId = '01969d11-16b2-4eb0-9c38-8824cbb96e36';
        $saveDirectory = storage_path('app/public/reports');

        // Ensure the directory exists
        if (!is_dir($saveDirectory)) {
            mkdir($saveDirectory, 0777, true);
        }

        foreach ($batch as $user) {



            $fullName = $user['full_name'];
            $nationalID = $user['national_code'];


            Log::info("///////////////////////////////////////////////////////////////////");
            Log::info("Starting process for: {$fullName} (National ID: {$nationalID})");


            try {
                $response = Http::post('https://cfapi.ifb.ir/projects/GetProjectParticipationReport', [
                    'ApiKey' => $apiKey,
                    'projectID' => $projectId,
                    'nationalID' => $nationalID,
                ]);

                if ($response->successful()) {
                    $sanitizedFullName = preg_replace('/[^\w\s\-]/u', '', $fullName);
                    $fileName = "{$sanitizedFullName}.pdf";
                    $filePath = $saveDirectory . '/' . $fileName;

                    file_put_contents($filePath, $response->body());
                    Log::info("Successfully downloaded report for: {$fullName} (National ID: {$nationalID})");
                } else {
                    Log::error("Failed to download report for: {$fullName} (National ID: {$nationalID}). Response: " . $response->body());
                }
            } catch (\Exception $e) {
                Log::error("Error occurred for {$fullName} (National ID: {$nationalID}). Error: " . $e->getMessage());
            }

            Log::info("Finished processing for: {$fullName} (National ID: {$nationalID}). Waiting for 6 seconds...");
        }

        return response()->json(['message' => 'Batch processed successfully']);
    }
}
