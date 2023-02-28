const allMail = [
  "simonedimuro@gmail.com",
  "mioniksi@gmail.com",
  "gigifinizio@gmail.com",
];
const mail = prompt("Inserisci la tua mail");
let access = false;

console.log(allMail);
console.log(mail);

for (let i = 0; i < allMail.length; i++) {
  if (mail == allMail[i]) {
    access = true;
  }
}

if (access == true) {
  console.log("Puoi accedere");
} else {
  console.log("Non puoi accedere");
}
