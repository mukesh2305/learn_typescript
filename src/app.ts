// example 1 : ------------------------------------------------------------
// let num1: number = '1';
// let num1 = 1;
// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }

// console.log(calculate(num1, 2));


// example 2 : ------------------------------------------------------------
// // function getTotal(numbers: number[]) {
// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, curr) => {
//         return acc + curr;
//     }, 0)
// }


// console.log(getTotal([3, 2, 1]));
// // ec2 , s3, lambada ,  rds , dynamo db

// example 3 : ----------------------------------------------------------------
// const user = {
//     firstName: "mukesh",
//     lastName: "Purohit",
//     role: "software Engineere"
// }

// console.log(user)


// example 4 : ----------------------------------------------------------------
// number
// string
// arr[] // string[] or number[]
// boolean

// ++++++++++ Type alias ++++++++
// type User = {
//     name: string;
//     age: number;
//     // address: string;
//     address?: string; // now address is became optional, we can use or can not use in the user it is depends on us
// }

/* here if we does not use address inside this than this does not generate any warning or
Error bceause address is optional in the above Type define */
// const user: User = {
//     name: "mukesh",
//     age: 12,
// }

// const user: User = {
//     name: "mukesh",
//     age: 12,
//     address: "mumbai"
// }


// function login(userData: User): User { // we can also mention return type of return values or object or array
//     return userData;
// }

// console.log(login(user));


// example 5 ----------------------------------------------------------------
// we can also declare custome type like this
// type ID = number | string; // this is union -- meaning that type of id is number or string from anything is possible

// const userId: ID = 134;
// const userId: ID = '134';


// example 6 ----------------------------------------------------------------
// +++++++++++++++ Interfaces ++++++++++++++++

// interface Transaction {
//     payAccountNumber: number;
//     payyAccountNumber: number;
// }

// interface BackAccount {
//     accountNumber: number;
//     accountHolder: string;
//     blance: number;
//     isActive: boolean;
//     transaction: Transaction[]; // this is the Array of Transaction , we are using one interface inside the another interface
// }


// const transaction1: Transaction = {
//     payAccountNumber: 12345,
//     payyAccountNumber: 12345
// }

// const transaction2: Transaction = {
//     payAccountNumber: 12345345,
//     payyAccountNumber: 12345123
// }
// const bankAccount: BackAccount = {
//     accountNumber: 11,
//     accountHolder: "mukesh",
//     blance: 4000,
//     isActive: true,
//     transaction: [transaction1, transaction2]
//     // transaction: [{
//     //     payAccountNumber: 12345,
//     //     payyAccountNumber: 12345
//     // }]
// }

// console.log("bankAccount :: --", bankAccount)


// example 7 ----------------------------------------------------------------

// ++++++++++++++++ Extends interfaces +++++++++++++++++++++++++

// interface Book {
//     name: string;
//     price: number;
// }


// // EBook is extending name and price from the Book interface
// interface EBook extends Book {
//     // name : string;
//     // price : number;
//     fileSize: number;
//     format: string;
// }


// // AudioBook is extending name , price , fileSize and format from the EBook
// interface AudioBook extends EBook {
//     // name : string;
//     // price : number;
//     // fileSize: number;
//     // format: string;
//     duration: number
// }

// const book: AudioBook = {
//     name: "Shiva",
//     price: 123,
//     fileSize: 5,
//     format: "MP4",
//     duration: 3
// }

// console.log("book :: ----", book);

// example 8 ----------------------------------------------------------------
// +++++++++++++++++++++++++ merge interfaces +++++++++++++++++++++++++++

// here both interface have same name so both the interfaces are merged and become single interface
// interface Book {
//     name: string;
//     price: number;
// }

// interface Book {
//     size: number
// }

// const book: Book = {
//     name: "Shiva",
//     price: 2000,
//     size: 12
// }

// console.log("-- book --- : ", book);

// example 9 ----------------------------------------------------------------
// +++++++++++ Unions ++++++++++++++++++


// type ID = number | string;

// function printId(id: ID) {
//     if (typeof id === 'string') console.log(id.toUpperCase());
//     else console.log(id);
// }

// printId('mukesh');

// example 9 ----------------------------------------------------------------

// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3);
// }

// // console.log(getFirstThree([1, 2, 3, 4, 5]));
// console.log(getFirstThree('mukesh'));


// example 10 ----------------------------------------------------------------
// +++++++++++++++ Gnerics  (if we use generic than we can reuse the code)++++++++++


// function logAnything<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }
//logAnything([3, 4]);
// logAnything(['hello']);

// interface HasAge {
//     age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => b.age - a.age)[0]; // return oldest person
//     // T extends HasAge --- because of this b.age does not generate Error because ..
//     // we are using Generic T if suppose we does not have age property than it will generate Error
//     // T extends HasAge -- this syntax is Assuring that don't very we always have age property in this so it will not generate Error
// }

// const people: HasAge[] = [
//     { age: 30 },
//     { age: 40 },
//     { age: 10 }
// ]

// console.log("oldest person ------ ", getOldest(people).age);


// interface Player {
//     name: string,
//     age: number
// }

// const players: Player[] = [
//     { name: "pla1", age: 20 },
//     { name: "pla2", age: 30 },
//     { name: "pla3", age: 40 },
// ]

// Assertion
// const person = getOldest(players) as Player; // we are forcefly doing this
// getOldest as Type HasAge but we are passing Player type array of Object because both are contains age value in the Type so it will not giving an Error


// now we have generalize getOldest function using Generics now it will work
// const person = getOldest(players);
// console.log(person.age, person.name); // now it will so both values name and age

// use Generic insted of Assertion
// const person1 = getOldest(people);
// console.log(person1.age)



// interface IPost { // I(IPost) is one type of convention that represent that it is a interface
//     title: string;
//     id: number;
//     description: string;
// }
// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }



// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }
// (async function () {
//     // const post = await fetchPostData('/posts');
//     // const user = await fetchPostData('/users');
//     const user = await fetchData<IPost[]>('/posts');
//     console.log(user[0].id)
// })();


// example 11 ----------------------------------------------------------------
// structural Typing / Duck Typing
// interface ICredential {
//     username: string;
//     password: string;
//     isAdmin?: boolean;
// }

// function login(credentials: ICredential): boolean {
//     console.log(credentials);
//     return true;
// }


// const user = {
//     username: 'coderGyan',
//     password: 'secret',
//     isAdmin: true,
// }

// login(user); // this is called strutural Typing // here we does not define type of user still it is not giving any Error becuse of structual Typing


//00000000000000000000000000
interface IAuth {
    username: string;
    password: string;
    login(username: string, password: string): boolean;
}

const user: IAuth = {
    username: "mukesh",
    password: "12345",
    login(username: string, password: string): boolean {
        console.log(" username : ", username);
        console.log(" password : ", password);
        return true;
    }
}
console.log(user);