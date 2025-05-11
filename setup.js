/**
 * Setup script for Eye-Friendly Dark Theme extension
 * This script initializes the project and prepares it for development
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}Setting up Eye-Friendly Dark Theme extension...${colors.reset}\n`);

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error(`${colors.red}Error: package.json not found. Make sure you're in the correct directory.${colors.reset}`);
  process.exit(1);
}

try {
  // Install dependencies
  console.log(`${colors.yellow}Installing dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Dependencies installed successfully.${colors.reset}\n`);

  // Check if .github/workflows directory exists
  const workflowsDir = path.join('.github', 'workflows');
  if (!fs.existsSync(workflowsDir)) {
    console.log(`${colors.yellow}Creating GitHub workflows directory...${colors.reset}`);
    fs.mkdirSync(workflowsDir, { recursive: true });
    console.log(`${colors.green}GitHub workflows directory created.${colors.reset}\n`);
  }

  // Check if deploy.yml exists
  const deployYmlPath = path.join(workflowsDir, 'deploy.yml');
  if (!fs.existsSync(deployYmlPath)) {
    console.log(`${colors.yellow}GitHub Actions workflow file not found. Please create it manually.${colors.reset}`);
    console.log(`${colors.yellow}See the README.md for instructions on setting up automated deployment.${colors.reset}\n`);
  } else {
    console.log(`${colors.green}GitHub Actions workflow file found.${colors.reset}\n`);
  }

  // Remind about PAT
  console.log(`${colors.yellow}Remember to set up your Personal Access Token (PAT) for VS Code Marketplace.${colors.reset}`);
  console.log(`${colors.yellow}See the README.md for detailed instructions.${colors.reset}\n`);

  // Final instructions
  console.log(`${colors.green}Setup completed successfully!${colors.reset}`);
  console.log(`${colors.blue}Next steps:${colors.reset}`);
  console.log(`1. Update the publisher ID in package.json with your VS Code Marketplace publisher ID`);
  console.log(`2. Update the repository URL in package.json with your GitHub repository URL`);
  console.log(`3. Create a Personal Access Token (PAT) for the VS Code Marketplace`);
  console.log(`4. Add the PAT as a GitHub secret named VSCE_PAT`);
  console.log(`5. Test the extension locally with 'npm run package'`);
  console.log(`6. When ready to publish, use the version scripts: 'npm run version:patch && npm run deploy'`);

} catch (error) {
  console.error(`${colors.red}Error during setup:${colors.reset}`, error.message);
  process.exit(1);
}