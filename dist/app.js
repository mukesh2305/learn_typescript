"use strict";
// example 1 : ------------------------------------------------------------
// let num1: number = '1';
// let num1 = 1;
// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }
const user = {
    username: "mukesh",
    password: "12345",
    login(username, password) {
        console.log(" username : ", username);
        console.log(" password : ", password);
        return true;
    }
};
console.log(user);
