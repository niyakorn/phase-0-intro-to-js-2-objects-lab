// Write your solution in this file!
const employee = {
    name: "any",
    streetAddress: "any"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newValue = { ...employee};
    newValue[key] = value;
    return newValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newValue = { ...employee};
    delete newValue[key];
    return newValue;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}