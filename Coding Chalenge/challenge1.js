let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;
console.log(`Mark BMI:" ${markBMI} 
John BMI: ${johnBMI}
Mark BMI is higher than John BMI ${markHigherBMI}`);



