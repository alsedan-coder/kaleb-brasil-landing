const { execSync } = require('child_process');

const workDir = 'c:\\Users\\alan_\\Desktop\\Work\\LandPage Kaleb';
const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

process.chdir(workDir);

try {
  console.log('Adding files...');
  execSync(`"${gitPath}" add .`, { stdio: 'inherit', shell: true });

  console.log('Committing...');
  execSync(`"${gitPath}" commit -m "Fix differentials alignment, improve philosophy section design, replace contact section with complete form"`, { stdio: 'inherit', shell: true });

  console.log('Pushing...');
  execSync(`"${gitPath}" push origin main`, { stdio: 'inherit', shell: true });

  console.log('Changes committed successfully!');
} catch (error) {
  console.error('Error:', error.message);
}
