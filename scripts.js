console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log("Good morning, Dave!");

    $('.submitButton').on('click', addEmployeeToTable);

    $('#theWholeTable').on('click', '.deleteButton', deleteRowButton);
}

let companyEmployees = [];

function addEmployeeToTable() {
   
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let employeeIDInput = $('#idInput').val();
    let employeeTitleInput = $('#titleInput').val();
    let annualSalaryInput = $('#salaryInput').val();
    console.log('Im here', annualSalaryInput);
   
    let newEmployeeObject = {
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

function totalSalaryEquals(){
    let total = 0;
    $('.rightAlignedH2').empty();
    for (let salary of companyEmployees){
        total += Number(salary.annualSalary);
    }
    $('.rightAlignedH2').append(`Total Monthly: ${total / 12}`);

    if((total/12) >= 20000){
        $('.rightAlignedH2').css('background-color', 'red');
    }
}

function deleteRowButton(){
    $(this).parents('tr').remove();
}