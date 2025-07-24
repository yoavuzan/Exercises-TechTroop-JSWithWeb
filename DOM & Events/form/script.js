function addP(msg) {
  const form = document.getElementById("form");

  // Remove any existing <p> elements inside the form
  const existingMessages = form.querySelectorAll("p");
  existingMessages.forEach((p) => p.remove());

  const p = document.createElement("p");
  p.innerHTML = msg;
  form.appendChild(p);
}

function checkName(name) {
  return name.length > 2;
}

function checkPhone(phone) {
  return phone.length === 10;
}
function checkSalary(salary) {
  const num = parseInt(salary, 10);
  return num >= 10000 && num <= 16000;
}
function checkDate(date) {
  return date != "";
}

function checkAllInput() {
  const name = document.getElementById("name").value;
  if (!checkName(name)) {
    addP("The name is incorrect");
    return;
  }

  const salary = document.getElementById("salary").value;
  if (!checkSalary(salary)) {
    addP("The Salary is incorrect");
    return;
  }

  const phone = document.getElementById("phone").value;
  if (!checkPhone(phone)) {
    addP("The phone is incorrect");
    return;
  }

  const date = document.getElementById("date").value;
  console.log(date, typeof date);
  if (!checkDate(date)) {
    addP("your date is null !");
    return;
  }
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = checkAllInput;
