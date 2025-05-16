# ElectroRent - Render Deployment Guide

This guide provides detailed steps to deploy the ElectroRent application on Render.

## Prerequisites

1. Your ElectroRent repository is pushed to GitHub (which you've already done)
2. A Render account (Sign up at [render.com](https://render.com) if you don't have one)

## Step 1: Sign in to Render

Go to [dashboard.render.com](https://dashboard.render.com) and sign in with your account.

## Step 2: Create a New Web Service

1. Click the "New +" button in the dashboard
2. Select "Static Site"

## Step 3: Connect Your Repository

1. Connect your GitHub account if prompted
2. Search for and select your "ElectroRent" repository

## Step 4: Configure Your Static Site

Configure your static site with the following settings:

- **Name**: `electrorent` (or your preferred name)
- **Branch**: `master` (or your main branch)
- **Build Command**: `npm install && npm run build:prod`
- **Publish Directory**: `dist`

## Step 5: Environment Variables

Add the following environment variables for your Firebase configuration:

```
VITE_FIREBASE_API_KEY=AIzaSyBbrqaNd5S_y_ZkDyu_UySJ_c4Qu98R7eo
VITE_FIREBASE_AUTH_DOMAIN=remotedesk-f9177.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=remotedesk-f9177
VITE_FIREBASE_STORAGE_BUCKET=remotedesk-f9177.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=27008976843
VITE_FIREBASE_APP_ID=1:27008976843:web:a26cbe6569457f2828584e
VITE_FIREBASE_MEASUREMENT_ID=G-XMBGNHBTLL
```

## Step 6: Advanced Settings

Under advanced settings, add:

1. **Auto-Deploy**: Ensure "Auto-Deploy" is enabled (should be by default)
2. **Add Redirect/Rewrite Rule**:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: `Rewrite`

This is necessary for React Router to handle client-side routing.

## Step 7: Create Static Site

Click the "Create Static Site" button.

## Step 8: Monitor Deployment

Render will now start building and deploying your application. This process typically takes a few minutes. You can monitor the progress in the "Events" tab.

## Step 9: Access Your Deployed Site

Once the deployment is complete, Render will provide you with a URL (typically in the format `https://electrorent.onrender.com`). Click this URL to view your deployed application.

## Additional Configuration

### Custom Domain (Optional)

To use a custom domain:

1. Go to the "Settings" tab of your service
2. Scroll to "Custom Domain"
3. Click "Add Custom Domain"
4. Follow the instructions to verify ownership and configure DNS settings

### Continuous Deployment

Your site is automatically set up for continuous deployment. Any changes pushed to your configured branch will trigger a new build and deployment.

## Troubleshooting

If you encounter issues:

1. **Build Failures**:
   - Check the build logs in the "Events" tab
   - Ensure all dependencies are correctly listed in package.json
   - If you encounter TypeScript errors, the `build:prod` script will bypass TypeScript checking
   - For serious TypeScript issues, fix them in your codebase for better long-term maintenance

2. **Routing Issues**:
   - Make sure you've added the `/* → /index.html` rewrite rule
   - Check that React Router is properly configured in your application

3. **Firebase Authentication Issues**:
   - Verify that all Firebase environment variables are correctly set
   - Check Firebase console to ensure authentication methods are enabled

## Further Assistance

If you need additional help:
- Render Documentation: [render.com/docs](https://render.com/docs)
- Render Support: [render.com/support](https://render.com/support) 