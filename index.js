// step 4 creating the react elements using JSX

// with JSX
// const element = <h2>Welcome to React JS Sessions</h2>;
// ReactDOM.render(element, document.getElementById('root'));


// without JSX
const items = React.createElement('h2', null, 'Welcome to React JS Sessions');
console.log("Items:", items)
ReactDOM.render(items, document.getElementById('root'));


