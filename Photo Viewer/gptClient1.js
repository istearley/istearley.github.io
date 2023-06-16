// Load the Google API client library
gapi.load('client', startApp);

async function startApp() {
  await gapi.client.init({
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    scope: 'https://www.googleapis.com/auth/drive'
  });

  // Perform API operations here
  // Example: Read file data
  const response = await gapi.client.drive.files.get({
    fileId: 'YOUR_FILE_ID' // Replace with the actual file ID
  });

  console.log(response.result);
}
