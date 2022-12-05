// Write your solution in this file!
const employee = {
    name: 'Bobby B',
    stretAddress: "The Red Keep"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]: value} }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}