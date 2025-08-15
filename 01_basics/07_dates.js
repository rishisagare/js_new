// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate= new Date(2025, 7, 14 )
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday:"long"
})
