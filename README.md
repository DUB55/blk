# Blooket Bot

A Blooket Bot with a proxy server to handle CORS issues when deployed on Vercel or other hosting platforms.

## CORS Issue Fix

The application was experiencing CORS (Cross-Origin Resource Sharing) errors when deployed on Vercel because the client-side JavaScript was making direct requests to `blooketbot.glitch.me`. This is now fixed by:

1. Adding a proxy server (server.js) that forwards requests to the original API
2. Updating the client-side code to use relative URLs that point to our proxy endpoints

## How to Run Locally

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment on Vercel

When deploying to Vercel:

1. Make sure to set the build command to `npm install` and the start command to `npm start`
2. Vercel will automatically detect the Node.js application and deploy it correctly

## Features

- Proxy server to handle CORS issues
- Support for WebSocket connections
- Static file serving for the HTML, CSS, and JavaScript files

## Files

- `server.js`: The proxy server implementation
- `blk.html`: The main HTML file for the Blooket Bot
- `script.js`: The client-side JavaScript code
- `package.json`: Dependencies and project configuration

## Troubleshooting

If you encounter any issues:

1. Check the browser console for errors
2. Verify that the server is running correctly
3. Ensure all dependencies are installed

## Note

This application uses a proxy server to forward requests to `blooketbot.glitch.me`. The original API and its functionality are maintained by the original creators.