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

This extension uses GitHub Actions for automated deployment to the Visual Studio Code Marketplace.

For detailed instructions on how to publish this extension to the VS Code Marketplace, please see the [PUBLISHING.md](PUBLISHING.md) file. It includes step-by-step guidance for:

1. Creating a publisher account on the VS Code Marketplace
2. Generating a Personal Access Token (PAT)
3. Adding the PAT as a GitHub secret
4. Publishing the extension using GitHub Actions or manually
5. Troubleshooting common issues

The GitHub Actions workflow is configured to:
- Build and package the extension on every push to the master branch
- Publish to the VS Code Marketplace only when a version tag is pushed

To release a new version:

```bash
# For a patch version update (e.g., 0.0.1 -> 0.0.2)
npm run version:patch && npm run deploy
```

This will trigger the workflow to publish your extension to the marketplace and create a GitHub release with the .vsix file attached.

## License

MIT
