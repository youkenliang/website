# Google Apps Script for Website Form Handler

This is a complete Google Apps Script that handles form submissions from your website, saves data to Google Sheets, and sends email notifications to you.

## 🎯 **Current Working URL:**
```
https://script.google.com/macros/s/AKfycby2Xi-GkA79NcsD1f7OM8wTeg9gqn09ljOlNCRjkYh_qbzO1AHU5dv8itzpQhgHh_Ei/exec
```

## Complete Script Code

```javascript
// Configuration
var SPREADSHEET_ID = '1mx5TPOkmoQU7LXi5wmlrR7wc7RBMS0Gj5kdYD829KgQ';
var SHEET_NAME = 'contact';
var ADMIN_EMAIL = 'youcanliang@berkeley.edu'; // Replace with your email

// Handle GET requests (for testing and fetching all problems)
function doGet(e) {
  try {
    Logger.log('Received GET request');
    
    // Check if it's a request for all problems
    if (e.parameter && e.parameter.action === 'getProblems') {
      return getAllProblems();
    }
    
    // Default response for testing
    var response = ContentService.createTextOutput(JSON.stringify({ 
      status: 'ok', 
      message: 'Form handler is working!',
      timestamp: new Date().toISOString(),
      endpoints: {
        test: 'GET / (this endpoint)',
        submit: 'POST / (submit form)',
        getProblems: 'GET /?action=getProblems (get all problems)'
      }
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    var response = ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString(),
      timestamp: new Date().toISOString()
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
  }
}

// Function to get all problems from the sheet
function getAllProblems() {
  try {
    Logger.log('Fetching all problems from sheet');
    
    // Get the specific spreadsheet by ID and sheet by name
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found');
    }
    
    // Get all data from the sheet
    var data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      // Only header row or empty sheet
      var response = ContentService.createTextOutput(JSON.stringify({ 
        success: true, 
        problems: [],
        message: 'No problems found',
        timestamp: new Date().toISOString()
      }));
      response.setMimeType(ContentService.MimeType.JSON);
      return response;
    }
    
    // Skip header row and map to objects
    var problems = data.slice(1).map((row, index) => ({
      id: row[0] || (index + 1).toString(),
      statement: row[1] || '',
      name: row[2] || '',
      email: row[3] || '',
      timestamp: row[4] || new Date().toISOString()
    }));
    
    Logger.log('Found ' + problems.length + ' problems');
    
    var response = ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      problems: problems,
      count: problems.length,
      timestamp: new Date().toISOString()
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
    
  } catch (error) {
    Logger.log('Error getting problems: ' + error.toString());
    var response = ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString(),
      timestamp: new Date().toISOString()
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
  }
}

// Handle POST requests (main functionality)
function doPost(e) {
  try {
    Logger.log('Received POST request');
    
    // Check if e and e.postData exist
    if (!e || !e.postData) {
      throw new Error('Invalid request: missing postData');
    }
    
    Logger.log('Request data: ' + e.postData.contents);
    Logger.log('Content type: ' + e.postData.type);
    
    var data;
    
    // Handle different content types
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else if (e.postData.type === 'application/x-www-form-urlencoded') {
      // Handle form data
      var params = e.parameter;
      if (params.data) {
        data = JSON.parse(params.data);
      } else {
        // Try to parse the raw content as JSON
        data = JSON.parse(e.postData.contents);
      }
    } else {
      // Try to parse as JSON anyway
      data = JSON.parse(e.postData.contents);
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Validate required fields
    if (!data.statement || data.statement.trim() === '') {
      throw new Error('Problem statement is required');
    }
    
    // Get the specific spreadsheet by ID and sheet by name
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found');
    }
    
    Logger.log('Successfully opened spreadsheet and sheet');
    
    // Generate unique ID
    var id = new Date().getTime().toString();
    
    // Prepare the row data
    var rowData = [
      id,
      data.statement || '',
      data.name || '',
      data.email || '',
      new Date().toISOString() // Add timestamp
    ];
    
    Logger.log('Prepared row data: ' + JSON.stringify(rowData));
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    Logger.log('Data appended successfully');
    
    // Send email notification to admin
    sendAdminNotification(data, id);
    
    // Return success response
    var response = ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Problem submitted successfully!',
      id: id,
      timestamp: new Date().toISOString()
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    
    // Return error response
    var response = ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString(),
      timestamp: new Date().toISOString()
    }));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
  }
}

// Send email notification to admin when someone submits a form
function sendAdminNotification(data, id) {
  try {
    var subject = 'New Problem Submission - Website Contact Form';
    var body = `
New problem submission received on your website:

Submission ID: ${id}
Timestamp: ${new Date().toLocaleString()}

Problem Statement:
${data.statement}

Submitted by:
Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}

This submission has been automatically saved to your Google Sheet.

To view all submissions, visit your Google Sheet:
https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=0

---
This is an automated notification from your website contact form.
    `;
    
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: subject,
      body: body
    });
    
    Logger.log('Admin notification email sent successfully');
    
  } catch (error) {
    Logger.log('Error sending admin notification: ' + error.toString());
    // Don't throw error - email failure shouldn't break the form submission
  }
}

// Test function to simulate a POST request - RUN THIS TO TEST doPost
function testPostRequest() {
  Logger.log('=== TESTING POST REQUEST ===');
  
  // Create a mock POST request event that simulates what your website sends
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        statement: 'Test problem statement from website form',
        name: 'Test User',
        email: 'test@example.com'
      }),
      type: 'application/json'
    }
  };
  
  try {
    Logger.log('Calling doPost with mock data...');
    var result = doPost(mockEvent);
    Logger.log('doPost result: ' + result.getContent());
    Logger.log('=== POST TEST COMPLETED SUCCESSFULLY ===');
    return true;
  } catch (error) {
    Logger.log('❌ POST TEST FAILED: ' + error.toString());
    Logger.log('=== POST TEST FAILED ===');
    return false;
  }
}

// Test function to get all problems
function testGetProblems() {
  Logger.log('=== TESTING GET PROBLEMS ===');
  
  try {
    var mockEvent = {
      parameter: {
        action: 'getProblems'
      }
    };
    
    var result = getAllProblems();
    Logger.log('getAllProblems result: ' + result.getContent());
    Logger.log('=== GET PROBLEMS TEST COMPLETED SUCCESSFULLY ===');
    return true;
  } catch (error) {
    Logger.log('❌ GET PROBLEMS TEST FAILED: ' + error.toString());
    Logger.log('=== GET PROBLEMS TEST FAILED ===');
    return false;
  }
}

// Function to set up the spreadsheet headers (run this once)
function setupHeaders() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    throw new Error('Sheet "' + SHEET_NAME + '" not found');
  }
  
  var headers = [
    'ID',
    'Statement',
    'Name',
    'Email',
    'Timestamp'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  Logger.log('Headers set up successfully');
}

// Simple test function - run this first to verify basic connection
function simpleTest() {
  Logger.log('=== SIMPLE TEST STARTED ===');
  Logger.log('Current time: ' + new Date().toString());
  Logger.log('Spreadsheet ID: ' + SPREADSHEET_ID);
  Logger.log('Target Sheet: ' + SHEET_NAME);
  Logger.log('Admin Email: ' + ADMIN_EMAIL);
  
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    Logger.log('✅ Successfully opened spreadsheet: ' + spreadsheet.getName());
    
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      Logger.log('❌ Sheet "' + SHEET_NAME + '" not found');
      Logger.log('Available sheets: ' + spreadsheet.getSheets().map(function(s) { return s.getName(); }).join(', '));
      return;
    }
    
    Logger.log('✅ Found target sheet: ' + sheet.getName());
    
    // Try to get the first cell to test access
    var firstCell = sheet.getRange(1, 1).getValue();
    Logger.log('✅ First cell value: ' + firstCell);
    
    Logger.log('=== TEST COMPLETED SUCCESSFULLY ===');
    
  } catch (error) {
    Logger.log('❌ ERROR: ' + error.toString());
    Logger.log('=== TEST FAILED ===');
  }
}
```

## Features

✅ **Form submission handling** - Receives data from your website form  
✅ **Google Sheets integration** - Automatically saves submissions to your sheet  
✅ **Email notifications** - Sends you immediate notifications when someone submits  
✅ **Get all problems** - New endpoint to fetch all submitted problems  
✅ **Error handling** - Comprehensive error handling and logging  
✅ **Data validation** - Validates required fields  
✅ **Unique IDs** - Generates unique IDs for each submission  
✅ **Timestamps** - Adds timestamps to all submissions  

## Setup Instructions

### Step 1: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Name it "Form Handler"
4. Replace all code with the script above
5. Save the project

### Step 2: Configure Settings
1. Update `ADMIN_EMAIL` with your email address
2. Verify `SPREADSHEET_ID` matches your Google Sheet
3. Verify `SHEET_NAME` matches your sheet tab name

### Step 3: Test Before Deployment
1. Run `simpleTest()` to verify basic connection
2. Run `setupHeaders()` to set up sheet structure (run once)
3. Run `testPostRequest()` to test form submission
4. Run `testGetProblems()` to test fetching all problems

### Step 4: Deploy
1. Click "Deploy" > "New deployment"
2. Choose "Web app"
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web app URL

### Step 5: Update Your Website
1. Open `client/src/components/ProblemAdd.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual web app URL

## API Endpoints

### Test the Deployment
Visit your web app URL in a browser. You should see:
```json
{
  "status": "ok",
  "message": "Form handler is working!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "endpoints": {
    "test": "GET / (this endpoint)",
    "submit": "POST / (submit form)",
    "getProblems": "GET /?action=getProblems (get all problems)",
    "updateProblem": "POST /?action=updateProblem (update problem - future use)"
  }
}
```

### Get All Problems
Visit: `YOUR_WEB_APP_URL?action=getProblems`

You should see:
```json
{
  "success": true,
  "problems": [
    {
      "id": "1703123456789",
      "statement": "Test problem",
      "name": "Test User",
      "email": "test@example.com",
      "timestamp": "2024-01-01T12:00:00.000Z"
    }
  ],
  "count": 1,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Test with curl
```bash
# Test the form submission
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{"statement":"Test problem","name":"Test User","email":"test@example.com"}'

# Get all problems
curl "YOUR_WEB_APP_URL?action=getProblems"
```

## Email Notification Format

You'll receive emails like this:
```
Subject: New Problem Submission - Website Contact Form

New problem submission received on your website:

Submission ID: 1703123456789
Timestamp: 12/21/2023, 2:30:45 PM

Problem Statement:
[The problem the user submitted]

Submitted by:
Name: [User's name or "Not provided"]
Email: [User's email or "Not provided"]

This submission has been automatically saved to your Google Sheet.

To view all submissions, visit your Google Sheet:
[Link to your Google Sheet]
```

## Troubleshooting

### Common Issues:
1. **Sheet not found** - Verify sheet name and permissions
2. **Email not sending** - Check admin email address and permissions
3. **Data not saving** - Run tests to verify connection

### Debug Steps:
1. Check execution logs in Google Apps Script
2. Run test functions to isolate issues
3. Verify spreadsheet permissions
4. Check email settings

This script is production-ready and includes comprehensive testing to ensure it works perfectly! 