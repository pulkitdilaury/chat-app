//mdn date
//momentjs.com documentation
// var date=new Date();
// var months['jan','feb']
// console.log(date.getMonth());

var moment =require('moment');




// date.add(10,'years').subtract(9,'months');
// console.log(date.format('MMM Do YYYY'))
var someTimestamp= moment().valueOf();
console.log(someTimestamp)
var createdAt=1234;
var date=moment(createdAt);
console.log(date.format('h:mm a'))