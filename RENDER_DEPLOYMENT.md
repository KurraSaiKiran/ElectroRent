# Deploying ElectroRent to Render

This guide provides step-by-step instructions to deploy the ElectroRent application on Render.

## Prerequisites

1. A GitHub account with your ElectroRent project pushed to a repository
2. A Render account (you can sign up at [render.com](https://render.com))

## Deployment Steps

### Option 1: Using the Render Dashboard (Manual)

1. **Sign in to Render**: Go to [dashboard.render.com](https://dashboard.render.com) and sign in to your account.

2. **Create a New Static Site**:
   - Click on the "New" button in the top-right corner.
   - Select "Static Site" from the dropdown menu.

3. **Connect Your Repository**:
   - Connect your GitHub account if you haven't already.
   - Search for and select your ElectroRent repository.

4. **Configure Your Site**:
   - **Name**: Choose a name for your deployment (e.g., "electrorent").
   - **Branch**: Choose the branch you want to deploy (typically "main" or "master").
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**: Add any necessary environment variables (e.g., Firebase configuration).

5. **Create Static Site**:
   - Click the "Create Static Site" button to start the deployment process.

6. **View Your Deployed Site**:
   - Once the build and deployment are complete, Render will provide a URL to access your deployed application.

### Option 2: Using render.yaml (Automated)

1. **Use Blueprint Deployment**:
   - Ensure that the `render.yaml` file is present in your repository.
   - Go to [dashboard.render.com/blueprints](https://dashboard.render.com/blueprints).
   - Click on "New Blueprint Instance".
   - Connect to the GitHub repository containing your ElectroRent project.
   - Render will automatically detect the `render.yaml` file and configure the deployment accordingly.

2. **Review and Deploy**:
   - Review the configuration settings.
   - Click "Apply" to start the deployment process.

## Post-Deployment Tasks

1. **Set Up a Custom Domain** (Optional):
   - In your Render dashboard, select your deployed site.
   - Go to the "Settings" tab and find the "Custom Domain" section.
   - Follow the instructions to add and verify your domain.

2. **Configure Environment Variables** (If Needed):
   - If your application needs additional environment variables that were not included in the initial setup, you can add them in the "Environment" tab of your service settings.

## Troubleshooting

If you encounter issues during the deployment:

1. **Check Build Logs**:
   - In the Render dashboard, select your service.
   - Go to the "Logs" tab to view the build and deployment logs.
   - Look for error messages that might indicate what went wrong.

2. **Common Issues**:
   - **Build Failures**: Ensure all dependencies are properly listed in your package.json.
   - **Runtime Errors**: Check that any environment variables needed by your application are properly set in Render.
   - **Routing Issues**: Ensure the `routes` section in your render.yaml is correctly configured for a single-page application.

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Render Static Site Documentation](https://render.com/docs/static-sites)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html) 