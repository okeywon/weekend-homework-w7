console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log("Good morning, Dave!");
    
    $('.submitButton').on('click', addEmployeeToTable);
}

function addEmployeeToTable() {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let employeeID = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let annualSalary = $('#salaryInput').val();
    console.log(annualSalary);
    $('#bodyOfTable').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
            <td><button>Delete</button></td>
        </tr>`);

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    totalSalaryEquals();
}

let totalSalary = 0;

function totalSalaryEquals(){
    let annualSalaryTwo = $('#salaryInput').val();
        totalSalary += annualSalaryTwo;
        $('#totalSpan').empty();
        $('#totalSpan').append(`${totalSalary}`);
}