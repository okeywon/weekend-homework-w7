# Project Name

[Project Instructions]
    [x] Create an employee salary table that calculates monthly company cost based on annual salaries.
    [x] Inputs should be: first name, last name, ID number, job title, annual salary.
    [x] Create Submit button that collect the information and stores it to calculate the monthly cost. It should append in a table format to the DOM.
    [x] If the monthly total exceeds 20000, background color should turn red (for the montly cost only).

    STRETCH:
    [x] Delete button that removes an employee from the DOM (it doesn't need to delete the salary from the DOM).
    [ ] Once the employee is removed, the total monthly cost should reflect their salary removal. *Use .text()/.data() as a getter*

## Description

Created a website with a table that displays an employee list, then adds up the total annual salaries and displays the monthly budget for their salaries.

Had to create two click listeners to take in the user input. One listener then appended the tale on the DOM to list the new employee. The second listener then displayed the monthly salary.

User input fields also clear after the submit button is pressed to make it easier to add several employees.

Users can also delete an employee previously added.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
