const fs = require('fs');
const { execSync } = require('child_process');

const workDir = 'c:\\Users\\alan_\\Desktop\\Work\\LandPage Kaleb';
const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

process.chdir(workDir);

try {
  console.log('Removing cleanup script...');
  fs.unlinkSync('cleanup.js');
  
  console.log('Adding changes...');
  execSync(`"${gitPath}" add .`, { stdio: 'inherit', shell: true });
  
  console.log('Committing final cleanup...');
  execSync(`"${gitPath}" commit -m "Final cleanup"`, { stdio: 'inherit', shell: true });
  
  console.log('Pushing...');
  execSync(`"${gitPath}" push origin main`, { stdio: 'inherit', shell: true });
  
  console.log('All done!');
} catch (error) {
  if (error.message.includes('nothing to commit')) {
    console.log('Nothing to commit - repository is clean!');
  } else {
    console.error('Error:', error.message);
  }
}
