// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = []; // create an empty array to be filled.

  while(true) { // while the user is still adding employees
    // create a blank employee
    const employee = {
      firstName: "none",
      lastName: "none",
      salary: 0
    };

    // fill out employee values
    employee.firstName = prompt("Enter First Name: ");
    employee.lastName = prompt("Enter Last Name: ");
    employee.salary = prompt("Enter Salary: ");
    
    // add employee to the array
    employees.push(employee);

    // break out of while loop if the user is done
    if (!confirm("Add another employee?")) {
      break;
    }
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let averageSalary = 0;
  for (const employee of employeesArray) {
    averageSalary += Number(employee.salary);
  }
  console.log(averageSalary);
  averageSalary = averageSalary / employeesArray.length;
  console.log("Average Salary: " + averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log("Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
