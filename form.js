const nomeA = document.getElementById("nome");
const cognomeA = document.getElementById("cognome");
const dataA = document.getElementById("data");
const tabella = document.getElementById("table");

const Person = function (name, surname, birthday) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
};

button.onclick = function () {
  const user = new Person(nomeA.value, cognomeA.value, dataA.value);
  tabella.innerHTML = `<table>
  <tr><td>${user.name}</td></tr>
  <tr><td>${user.surname}</td></tr>
  <tr><td>${user.birthday}</td></tr>
   </table>`;
};
