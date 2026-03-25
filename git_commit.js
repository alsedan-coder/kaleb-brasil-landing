const { execSync } = require('child_process');
const path = require('path');

const workDir = path.join('c:', 'Users', 'alan_', 'Desktop', 'Work', 'LandPage Kaleb');
const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

process.chdir(workDir);

try {
  console.log('Adding files...');
  execSync(`"${gitPath}" add .`, { stdio: 'inherit', shell: true });
  
  console.log('Committing...');
  execSync(`"${gitPath}" commit -m "Improve philosophy section, add testimonials, restore contact form"`, { stdio: 'inherit', shell: true });
  
  console.log('Pushing...');
  execSync(`"${gitPath}" push origin main`, { stdio: 'inherit', shell: true });
  
  console.log('Git operations completed successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
