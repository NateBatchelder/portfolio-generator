// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const profileData = require('./profile.js')(profileDataArgs);
const generatePage = () => 'Name: Jane, Github; janehub';

const generatePage = (userName, githubName) =>
  `Name: ${userName}, Github: ${githubName}`;



console.log(generatePage('Jane', 'janehub'));