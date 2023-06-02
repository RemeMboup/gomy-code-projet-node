//creation de fichier welcome.txt
const fs = require('fs');

const content =  "Hello Node";

fs.writeFile('welcome.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // fichier écrit avec succès
});
// comment lire les donnees d un fichier

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});