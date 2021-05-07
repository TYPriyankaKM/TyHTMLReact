// ex 1: Embedding the JSX
// const elements = <h2>Hello Im a JSX!!</h2>;
// ReactDOM.render(elements, document.getElementById('root'));

// // ex 2: without JSX
// const element = React.createElement('h2', null, 'Hello Im a JSX');
// ReactDOM.render(element, document.getElementById('root'));

// // ex 3: Embedding as the Expression in JSX
// const technology = 'React JSX';
// const myTechnology = <h1>Hello Im trained on  {technology}</h1>;
// ReactDOM.render(myTechnology, document.getElementById('root'));


// ex 4: embed the result in Javascript function using jsx
// function formatName(user) {
//     console.log("user data", user);
//     return user.fname + ' ' + user.lname + ' ' + user.id
// }

// const user = {
//     fname: 'charlie',
//     lname: 'Smith',
//     id: 3434
// }

// const employee = <h1>Hello, {formatName(user)} </h1>;
// console.log("employee data is:", employee);
// ReactDOM.render(employee, document.getElementById('root'));



// ex 5: JSX Element creation (without JSX)
// const jsxElement = React.createElement(
//     'h1',  // type
//     { className: 'sample', id: 'test' }, //props with class name and id
//     'Its my JSX Element') //props with children
// console.log("objects", jsxElement);
// ReactDOM.render(jsxElement, document.getElementById('root'));



// ex 6: without JSX
const myjsx = React.createElement('div', { id: 'test' },
    React.createElement('h2', null, 'hello world'));
ReactDOM.render(myjsx, document.getElementById('root'));










