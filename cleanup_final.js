const { execSync } = require('child_process');

const workDir = 'c:\\Users\\alan_\\Desktop\\Work\\LandPage Kaleb';
const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

process.chdir(workDir);

try {
  execSync(`"${gitPath}" add .`, { stdio: 'inherit', shell: true });
  execSync(`"${gitPath}" commit -m "Remove temporary commit script"`, { stdio: 'inherit', shell: true });
  execSync(`"${gitPath}" push origin main`, { stdio: 'inherit', shell: true });
  console.log('Final cleanup done!');
} catch (error) {
  console.error('Error:', error.message);
}
