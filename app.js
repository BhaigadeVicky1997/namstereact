let create = React.createElement('div', {
    id:"parent",
}, 

React.createElement('div',
{id:'child'},[React.createElement('h1',{id:'heading'},'I am H1 tag!'),React.createElement('h1',{id:'heading'},'I am H2 tag!')]
));

console.log(create);
let root = ReactDOM.createRoot(document.getElementById('change'));
root.render(create);