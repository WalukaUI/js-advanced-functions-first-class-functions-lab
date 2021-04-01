// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers=(dri)=>{
    let  newDriArray=[];
    newDriArray.push(dri[0]);
    newDriArray.push(dri[1]);
    return newDriArray;
}


const returnLastTwoDrivers=(dri)=>{
    let  newDriArray=[];
    newDriArray.push(dri[2]);
    newDriArray.push(dri[3]);
    return newDriArray;
}
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
 

const  createFareMultiplier=(integer)=>{
    return (function (value){
         return integer*value
    })
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

const selectDifferentDrivers=(driArry,lastOrfirst2dri)=>{
return lastOrfirst2dri(driArry);
}