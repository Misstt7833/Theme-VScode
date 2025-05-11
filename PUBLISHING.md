# Publishing to VS Code Marketplace

This document provides step-by-step instructions for publishing your Eye-Friendly Dark Theme extension to the Visual Studio Code Marketplace.

## Prerequisites

1. A GitHub account (you already have this set up with your repository)
2. A Microsoft account to access the Azure DevOps platform
3. A Visual Studio Code Marketplace publisher account

## Step 1: Create a Publisher Account

1. Go to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage)
2. Sign in with your Microsoft account
3. If you don't have a publisher yet, you'll be prompted to create one
4. Fill in the required details:
   - Publisher ID (this should match the "publisher" field in your package.json, currently set to "Misstt7833")
   - Display Name (the name shown in the marketplace)
   - Description (optional)

## Step 2: Create a Personal Access Token (PAT)

1. Go to [Azure DevOps](https://dev.azure.com/)
2. Click on your profile icon in the top right corner
3. Select "Personal access tokens"
4. Click "New Token"
5. Name your token (e.g., "VS Code Marketplace")
6. Set the organization to "All accessible organizations"
7. Set the expiration date (1 year is recommended)
8. Select the "Marketplace" scope and check "Manage"
9. Click "Create" and copy the generated token (you won't be able to see it again)

## Step 3: Add the PAT as a GitHub Secret

1. Go to your GitHub repository: https://github.com/Misstt7833/Theme-VScode
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Name the secret `VSCE_PAT`
5. Paste your Personal Access Token as the value
6. Click "Add secret"

## Step 4: Publish Your Extension

### Method 1: Using GitHub Actions (Recommended)

The repository is already set up with GitHub Actions for automated publishing. To trigger a new release:

```bash
# For a patch version update (e.g., 0.0.1 -> 0.0.2)
npm run version:patch && npm run deploy

# For a minor version update (e.g., 0.0.1 -> 0.1.0)
npm run version:minor && npm run deploy

# For a major version update (e.g., 0.0.1 -> 1.0.0)
npm run version:major && npm run deploy
```

This will:
1. Update the version in package.json
2. Create a git tag
3. Push the changes and tag to GitHub
4. Trigger the GitHub Actions workflow
5. Build and publish the extension to the VS Code Marketplace

### Method 2: Manual Publishing

If you prefer to publish manually:

1. Install vsce globally (if not already installed):
   ```bash
   npm install -g @vscode/vsce
   ```

2. Login to the publisher:
   ```bash
   vsce login Misstt7833
   ```
   (You'll be prompted to enter your Personal Access Token)

3. Package the extension:
   ```bash
   vsce package
   ```

4. Publish the extension:
   ```bash
   vsce publish
   ```

## Troubleshooting

### Common Issues

1. **"Failed to publish. No Personal Access Token found."**
   - Make sure you've added the VSCE_PAT secret to your GitHub repository

2. **"Publisher 'Misstt7833' not found."**
   - Ensure you've created a publisher with the exact same ID on the VS Code Marketplace

3. **"Access token lacks permission to manage marketplace."**
   - Verify that your PAT has the "Marketplace (Manage)" scope

4. **"Extension with same identity and version already exists."**
   - Update the version in package.json before publishing

### Getting Help

If you encounter any issues not covered here, please:
1. Check the [vsce documentation](https://github.com/microsoft/vscode-vsce)
2. Look for similar issues in the [VS Code Extension Development forum](https://github.com/microsoft/vscode-discussions/discussions/categories/extension-development)
3. Open an issue in your GitHub repository