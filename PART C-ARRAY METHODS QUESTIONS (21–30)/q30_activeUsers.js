const users = [
    {name:"A", active:true},
    {name:"B", active:false}
];

console.log(users.filter(u => u.active).map(u => u.name));
