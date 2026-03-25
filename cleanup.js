const fs = require('fs');
const { execSync } = require('child_process');

const workDir = 'c:\\Users\\alan_\\Desktop\\Work\\LandPage Kaleb';
const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

process.chdir(workDir);

try {
  console.log('Removing temporary files...');
  fs.unlinkSync('git_commit.js');
  fs.unlinkSync('git_commit.py');
  
  console.log('Adding changes...');
  execSync(`"${gitPath}" add .`, { stdio: 'inherit', shell: true });
  
  console.log('Committing cleanup...');
  execSync(`"${gitPath}" commit -m "Remove temporary git scripts"`, { stdio: 'inherit', shell: true });
  
  console.log('Pushing...');
  execSync(`"${gitPath}" push origin main`, { stdio: 'inherit', shell: true });
  
  console.log('Cleanup complete!');
} catch (error) {
  console.error('Error:', error.message);
}
