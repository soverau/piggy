// Declarar const usuario

const userName = document.getElementById("name");

// Crear una clase para hacer 2 pruebas comparativas de presupuesto.
class Budget {
  constructor(
    income,
    extraIncome,
    rent,
    groceries,
    health,
    transport,
    gas,
    electric,
    mobile,
    internet,
    extraExpenses,
    outings,
    entertainment,
    vacations
  ) {
    this.income = income;
    this.extraIncome = extraIncome;
    this.rent = rent;
    this.groceries = groceries;
    this.health = health;
    this.transport = transport;
    this.gas = gas;
    this.electric = electric;
    this.mobile = mobile;
    this.internet = internet;
    this.extraExpenses = extraExpenses;
    this.outings = outings;
    this.entertainment = entertainment;
    this.vacations = vacations;
  }
}

// Guardar los datos de ID del usuario en localStorage
const identify = function (userName) {
  localStorage.setItem("Username", userName);
};

// Datos del formulario
let loginForm = document.getElementById("formtest");
// Escuchar al boton del formulario de ID
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Sacar los datos del ID del formulario

  let userName = document.getElementById("name");
  // Si no ingresó nombre, le da error con alerta

  if (userName.value == "") {
    alert("Ensure you input a value in the name field!");
  } else {
    // Si ingresó su nombre, ya no ve ese formulario, sino un mensaje de bienvenida y un nuevo formulario para ingresar datos.
    localStorage.setItem("userName", userName.value);
    const welcomeMessage = `<h2>Hi, ${userName.value}. Let's set up a budget for you.</h2>`;
    const welcome = document.querySelector("welcome");
    document.getElementById("welcome").innerHTML = welcomeMessage;
    // Ocultar formulario ID
    document.getElementById("divID").style.display = "none";
    // Mostrar formulario presupuesto
    document.getElementById("divIncome").style.display = "block";
  }
  // Devolución nombre del usuario para poder guardarlo en localStorage
  userName.value = "";
  return userName.value;
});

// Declarar const ingresos

let incomeForm = document.getElementById("formIncome");

// Escuchar botón formulario ingresos

incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Si no ingresa algo, dar la alerta
  if (
    income.value == "" ||
    extraIncome.value == "" ||
    rent.value == "" ||
    groceries.value == "" ||
    health.value == "" ||
    transport.value == "" ||
    gas.value == "" ||
    electric.value == "" ||
    mobile.value == "" ||
    internet.value == "" ||
    extraExpenses.value == "" ||
    outings.value == "" ||
    entertainment.value == "" ||
    vacations.value == ""
  ) {
    alert("Ensure you fill out all the fields!");
  } else {
    // chequear y guardar datos de entrada al formulario y crear un objeto a partir de la clase Budget

    const budget1 = new Budget(
      income.value,
      extraIncome.value,
      rent.value,
      groceries.value,
      health.value,
      transport.value,
      gas.value,
      electric.value,
      mobile.value,
      internet.value,
      extraExpenses.value,
      outings.value,
      entertainment.value,
      vacations.value
    );
    // Si los ingresó, mandar a la consola para chequear
    console.log(budget1);
    // Calcular ingreso total y guardar en local storage

    let totalIncome = parseInt(income.value) + parseInt(extraIncome.value);
    localStorage.setItem("Total Income", totalIncome);

    const inJSON = JSON.stringify(budget1);
    console.log("inJSON", inJSON);
    console.log(typeof budget1);
    console.log(typeof inJSON);
    localStorage.setItem("budget1JSON", inJSON);

    // for (const key in budget1) {
    //   if (budget1.hasOwnProperty(key)) {
    //     console.log(`${key}: ${budget1[key]}`);
    //   }
    // }

    // Devolver ingreso total al usuario

    const returnMessage = `<h2>${localStorage.userName}, your total income is ${totalIncome} .</h2>`;
    const answer = document.querySelector("answer");
    document.getElementById("answer").innerHTML = returnMessage;
    // const divIncome = document.querySelector("divIncomeMessage");
    // const returnIncomeMessage = `${userName.value}, your total income is ${totalIncome}.`;
    // document.getElementById("divIncomeMessage").innerHTML = returnIncomeMessage;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("chartContainer").style.display = "block";

    wageBracket2(totalIncome);

    function wageBracket2(totalIncome, reply) {
      console.log("Your total income was " + totalIncome + ".");

      switch (true) {
        case totalIncome > 45000:
          reply = "Holy heckaroo! Let's plan your retirement.";
          document.getElementById("divIncomeMessage").innerHTML =
            "Holy heckaroo! Let's plan your retirement.";
          break;
        case totalIncome > 5001:
          reply =
            "You're not a rich little fiend, but you're not going hungry.";
          document.getElementById("divIncomeMessage").innerHTML =
            "You're not a rich little fiend, but you're not going hungry.";
          break;
        case totalIncome >= 1500:
          reply = "You're getting by, but watch your spending.";
          document.getElementById("divIncomeMessage").innerHTML =
            "You're getting by, but watch your spending.";
          break;
        case totalIncome < 1500:
          reply = "You live in poverty. A budget will not fix this.";
          document.getElementById("divIncomeMessage").innerHTML =
            "You live in poverty. A budget will not fix this.";
          break;
      }
      console.log(reply);

      // function needs() {
      //   let totalNeeds =
      //     rent.value +
      //     groceries.value +
      //     health.value +
      //     transport.value +
      //     gas.value +
      //     electric.value +
      //     mobile.value +
      //     internet.value +
      //     extraExpenses.value;
      //   let percentNeeds = (totalNeeds / totalIncome) * 100;
      //   let goodPractice = percentNeeds <= 50;
      //   let badPractice = percentNeeds > 50;

      //   function needsSpending(totalNeeds, percentNeeds) {
      //     console.log(
      //       "You spend " +
      //         totalNeeds +
      //         " on necessities. That is " +
      //         percentNeeds +
      //         " percent of your income."
      //     );
      //   }
      //   switch (true) {
      //     case goodPractice:
      //       needsSpending();
      //       console.log(
      //         "Great. You should't spend more than 50% of your income on necessities."
      //       );
      //       break;
      //     case badPractice:
      //       needsSpending();
      //       console.log(
      //         "Terrible. You should't spend more than 50% of your income on necessities."
      //       );
      //       break;
      //   }

      //   return percentNeeds;
      // }

      // needs();

      const ctx = document.getElementById("myChart");

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "Rent",
            "Groceries",
            "Health",
            "Transport",
            "Gas",
            "Electric",
            "Mobile",
            "Internet",
            "Extras",
            "Outings",
            "Entertainment",
            "Vacations",
          ],
          datasets: [
            {
              label: "Budget Items",
              data: [
                budget1.rent,
                budget1.groceries,
                budget1.health,
                budget1.transport,
                budget1.gas,
                budget1.electric,
                budget1.mobile,
                budget1.internet,
                budget1.extraExpenses,
                budget1.outings,
                budget1.entertainment,
                budget1.vacations,
              ],
              backgroundColor: [
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235, 0.8)",
                "rgb(54, 162, 235, 0.7)",
                "rgb(54, 162, 235, 0.6)",
                "rgb(54, 162, 235, 0.5)",
                "rgb(54, 162, 235, 0.4)",
                "rgb(54, 162, 235, 0.3)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132, 0.6)",
                "rgb(255, 205, 86)",
                "rgb(255, 205, 86, 0.6)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
});

function convert() {
  // Sample JSON data
  // let jsonData = [
  //   {
  //     name: "Saurabh",
  //     age: "20",
  //     city: "Prayagraj",
  //   },
  //   {
  //     name: "Vipin",
  //     age: 23,
  //     city: "Lucknow",
  //   },
  //   {
  //     name: "Saksham",
  //     age: 21,
  //     city: "Noida",
  //   },
  // ];

  let budget1Chart = JSON.parse(localStorage.getItem("budget1JSON"));
  console.log("budget1Chart", budget1Chart);

  // Get the container element where the table will be inserted
  let budgetSubmit = document.getElementById("budgetSubmit");

  // Create the table element
  let table = document.createElement("table");

  // Get the keys (column names) of the first object in the JSON data
  let cols = Object.keys(budget1Chart[0]);

  // Create the header element
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  // Loop through the column names and create header cells
  cols.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item; // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
  });
  thead.appendChild(tr); // Append the header row to the header
  table.append(tr); // Append the header to the table

  // Loop through the JSON data and create table rows
  budget1Chart.forEach((item) => {
    let tr = document.createElement("tr");

    // Get the values of the current object in the JSON data
    let vals = Object.values(item);

    // Loop through the values and create table cells
    vals.forEach((elem) => {
      let td = document.createElement("td");
      td.innerText = elem; // Set the value as the text of the table cell
      tr.appendChild(td); // Append the table cell to the table row
    });
    table.appendChild(tr); // Append the table row to the table
  });
  budgetSubmit.appendChild(table); // Append the table to the container element
}

// mainIncome = parseInt(income);

// console.log("Main Income is " + mainIncome);

// let extraIncome = prompt("How much was your extra income this month?");
// let totalIncome;

// if (extraIncome === "") {
//   let totalIncome = mainIncome;
//   console.log("Total Income is " + totalIncome);
//   wageBracket1(totalIncome);
// } else {
//   extraIncome = parseInt(extraIncome);
//   console.log("Extra Income is " + extraIncome);
//   let totalIncome = mainIncome + extraIncome;
//   wageBracket2(totalIncome);
//   wageBracket1(totalIncome);
// }

//   // let lowEarner = totalIncome <= 1500;
//   // let normalEarner = totalIncome <= 5000;
//   // let highEarner = totalIncome > 5001 && totalIncome < 44999;
//   // let megaEarner = totalIncome > 45000;

//   // if (lowEarner){
//   //     console.log("You live in poverty.");
//   // } else if (normalEarner){
//   //     console.log("You're getting by, but watch your spending.");
//   // } else if (highEarner){
//   //     console.log("You're not a rich little fiend, but you're not going hungry.");
//   // } else {
//   //     console.log("Also...Holy heckaroo! Let's plan your retirement.");
//   // }
// }

// function wants() {
//   let totalWants = outings + holidays + entertainment;
//   let percentWants = (totalWants / income) * 100;
//   let goodPractice = percentWants <= 30;
//   let badPractice = percentWants > 30;

//   function wantsSpending(totalWants, percentWants) {
//     console.log(
//       "You spend " +
//         totalWants +
//         " on stuff that's superfluous. That is " +
//         percentWants +
//         " percent of your income. Your detailed spending is: Outings - " +
//         outings +
//         ", Vacations - " +
//         holidays +
//         ", Entertainment - " +
//         entertainment
//     );
//   }
//   switch (true) {
//     case goodPractice:
//       wantsSpending();
//       console.log(
//         "Great. You should't spend more than 30% of your income on wants."
//       );
//       break;
//     case badPractice:
//       wantsSpending();
//       console.log(
//         "Terrible. You should't spend more than 50% of your income on wants."
//       );
//       break;
//   }

//   return percentWants;
// }

// let outings = parseInt(
//   prompt("How much do you spend on going out in a month?")
// );
// let holidays = parseInt(
//   prompt("How much do you save up for vacations per month?")
// );
// let entertainment = parseInt(
//   prompt("How much do you spend on entertaining monthly?")
// );

// wants();

// function debtsSavings() {
//   let totalDebts = debts + savings;
//   let percentDebts = (totalDebts / income) * 100;
//   let goodPractice = percentDebts <= 20;
//   let badPractice = percentDebts > 20;

//   function debtsSpending(totalDebts, percentDebts) {
//     console.log(
//       "You carry " +
//         totalDebts +
//         " on necessities. That is " +
//         percentDebts +
//         " percent of your income."
//     );
//   }
//   switch (true) {
//     case goodPractice:
//       debtsSpending();
//       console.log(
//         "Great. Your debts and savings are less than 20% of your income. You should try to save more money."
//       );
//       break;
//     case badPractice:
//       debtsSpending();
//       console.log(
//         "You should't carry more than 20% of your income in debt. If this is debt, you need to lower it and save more. We will generate an alternative scenario."
//       );
//       const debtSavingsScenario1 = new debtSavingsScenario(
//         prompt("Insert an alternative amount of debt"),
//         prompt("Insert a different amount you could save.")
//       );
//       debtSavingsScenario1.showDebtScenario();
//       break;
//   }

//   return percentDebts;
//   return debtSavingsScenario1;
// }

// let debts = parseInt(
//   prompt(
//     "What are your debt payments monthly, including credit cards, loans etc.?"
//   )
// );
// let savings = parseInt(prompt("How much money do you save per month?"));

// debtsSavings();

// function debtSavingsScenario(debt, savings) {
//   this.debt = debt;
//   this.savings = savings;
//   this.showDebtScenario = function () {
//     console.log(
//       "This is a scenario where you owe: " +
//         this.debt +
//         " and save: " +
//         this.savings
//     );
//   };
// }

// const debtSavingsScenario2 = new debtSavingsScenario(1000, 2000);
// debtSavingsScenario2.showDebtScenario();

// totalIncome = 25000;

// class FullScenariosArray {
//   constructor(needs, wants, savings, debts) {
//     this.needs = parseInt(needs);
//     this.wants = parseInt(wants);
//     this.savings = parseInt(savings);
//     this.debts = parseInt(debts);
//   }
//   sumSingleScenario() {
//     let budget = this.needs + this.wants + this.debts;
//     let percentNeeds = parseInt((this.needs / totalIncome) * 100);
//     let percentWants = parseInt((this.wants / totalIncome) * 100);
//     let percentSavings = parseInt((this.savings / totalIncome) * 100);
//     let percentDebts = parseInt((this.debts / totalIncome) * 100);
//     let percentSpending = parseInt((budget / totalIncome) * 100);

//     console.log(
//       "In this scenario, your needs are " +
//         percentNeeds +
//         " percent of your income. Your wants are " +
//         percentWants +
//         " percent of your income. Your savings are " +
//         percentSavings +
//         " percent of your income. Your debts are " +
//         percentDebts +
//         " percent of your income. Your are spending " +
//         percentSpending +
//         " percent of your income."
//     );
//   }
// }

// const fullScenariosArrays = [];
// fullScenariosArrays.push(
//   new FullScenariosArray("10000", "25000", "8000", "500")
// );
// fullScenariosArrays.push(
//   new FullScenariosArray("15000", "10000", "0", "20000")
// );
// fullScenariosArrays.push(new FullScenariosArray("5000", "2000", "2000", "0"));

// for (const fullScenariosArray of fullScenariosArrays)
//   fullScenariosArray.sumSingleScenario();

// console.log(fullScenariosArrays);
// console.log(
//   "You have presented " + fullScenariosArrays.length + " budget alternatives."
// );

// const badDebt = fullScenariosArrays.filter(
//   (amt) => amt.debts > totalIncome / 5
// );
// console.log(badDebt);
