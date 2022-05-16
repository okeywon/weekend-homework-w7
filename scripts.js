console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log("Good morning, Dave!");

    $('.submitButton').on('click', addEmployeeToTable);

    $('#theWholeTable').on('click', '.deleteButton', deleteRowButton);
}

// empty array that will be appended by user input fields
let companyEmployees = [];

// Function that takes in the values of the user inputs,
// adds them to an object, pushes the data to the blank array above,
// displays the user input to the DOM, clears the user inputs,
// finally tells the salary function to run.
function addEmployeeToTable() {
   
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let employeeIDInput = $('#idInput').val();
    let employeeTitleInput = $('#titleInput').val();
    let annualSalaryInput = $('#salaryInput').val();
    console.log('Im here', annualSalaryInput);
   
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        employeeID: employeeIDInput,
        employeeTitle: employeeTitleInput,
        annualSalary: annualSalaryInput
    }
    
    companyEmployees.push(newEmployeeObject);


    $('#bodyOfTable').append(`
        <tr>
            <td>${firstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${employeeIDInput}</td>
            <td>${employeeTitleInput}</td>
            <td>${annualSalaryInput}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`);

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    console.log(companyEmployees);

    totalSalaryEquals();
}

// function that will append the monthly salar to the DOM.
// total variable will be added to with function below.
// empties the DOM before appending to it.
// a for of loop that takes in each individual salary from the object array above.
// then adds that input data as a number/integer to the total variable.
// the total is then displayed on the DOM as a monthly salary (/12).
// if the monthly salary is >= 20000, the background-color changes to red.
function totalSalaryEquals(){
    let total = 0;
    $('.rightAlignedH2').empty();
    for (let salary of companyEmployees){
        total += Number(salary.annualSalary);
    }
    let monthlyTotal = (total/12).toFixed(2);
    $('.rightAlignedH2').append(`Total Monthly: $${monthlyTotal}`);

    if((monthlyTotal) >= 20000){
        $('.rightAlignedH2').css('background-color', 'red');
    }
}

// this function deletes a table row from the DOM.
function deleteRowButton(){
    $(this).parents('tr').remove();
}