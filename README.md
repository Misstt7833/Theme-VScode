# Eye-Friendly Dark Theme for VS Code

A carefully designed dark theme for Visual Studio Code that minimizes eye strain during long coding sessions. This theme is specifically created for developers who spend extended hours (up to 14 hours per day) looking at code.

## Features

- **Reduced Contrast**: Balanced contrast levels that maintain readability while reducing eye fatigue
- **Warm Color Palette**: Reduced blue light emission with warm-tinted colors
- **Non-vibrant Syntax Highlighting**: Soft, muted colors that don't strain your eyes
- **Consistent Color Harmony**: Carefully selected colors that work well together
- **Dark Background**: Not pure black, but a soft dark gray that's easier on the eyes

## Why This Theme Helps Reduce Eye Strain

1. **Avoids Pure Black**: Uses dark gray backgrounds instead of pure black to reduce the harsh contrast
2. **Warm Color Temperature**: Reduces blue light which can disrupt sleep patterns and cause eye fatigue
3. **Moderate Brightness Levels**: All colors are carefully balanced to avoid being too bright or too dim
4. **Consistent Contrast Ratio**: Maintains readability while being gentle on the eyes

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Eye-Friendly Dark Theme"
4. Click Install
5. Select the theme by going to File > Preferences > Color Theme (or Ctrl+K Ctrl+T) and selecting "Eye-Friendly Dark"

## Additional Tips for Reducing Eye Strain

- **Follow the 20-20-20 rule**: Every 20 minutes, look at something 20 feet away for 20 seconds
- **Adjust your screen brightness**: Match it to your surrounding environment
- **Position your monitor properly**: The top of the screen should be at or slightly below eye level
- **Use proper lighting**: Avoid glare and strong light sources behind your screen
- **Consider using a blue light filter**: Either through software or special glasses
- **Increase font size**: Use a comfortable font size that doesn't require squinting

## Feedback and Contributions

If you have suggestions for improving this theme, please open an issue or submit a pull request on the [GitHub repository](https://github.com/Misstt7833/Theme-VScode.git).

## Deployment

This extension uses GitHub Actions for automated deployment to the Visual Studio Code Marketplace. Here's how to set it up:

### Setting Up Your Repository

1. Create a GitHub repository for your extension
2. Push your code to the repository
3. Run the setup script to initialize the project:
   ```bash
   npm run setup
   ```
4. Follow the instructions provided by the setup script
5. Make sure your `package.json` has the correct publisher ID and repository URL

### Creating a Personal Access Token (PAT)

1. Go to [Azure DevOps](https://dev.azure.com/)
2. Click on your profile icon in the top right corner
3. Select "Personal access tokens"
4. Click "New Token"
5. Name your token (e.g., "VS Code Marketplace")
6. Set the organization to "All accessible organizations"
7. Set the expiration date (1 year is recommended)
8. Select the "Marketplace" scope and check "Manage"
9. Click "Create" and copy the generated token

### Configuring GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Name the secret `VSCE_PAT`
5. Paste your Personal Access Token as the value
6. Click "Add secret"

### Triggering Deployment

The GitHub Actions workflow is configured to:
- Build and package the extension on every push to the main branch
- Publish to the VS Code Marketplace only when a version tag is pushed

To release a new version:

#### Method 1: Using npm scripts (recommended)
```bash
# For a patch version update (e.g., 1.0.0 -> 1.0.1)
npm run version:patch && npm run deploy

# For a minor version update (e.g., 1.0.0 -> 1.1.0)
npm run version:minor && npm run deploy

# For a major version update (e.g., 1.0.0 -> 2.0.0)
npm run version:major && npm run deploy
```

#### Method 2: Manual process
1. Update the version in `package.json`
2. Commit and push your changes
3. Create and push a new tag with the format `v*` (e.g., `v1.0.0`)
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

This will trigger the workflow to publish your extension to the marketplace and create a GitHub release with the .vsix file attached.

## License

MIT
