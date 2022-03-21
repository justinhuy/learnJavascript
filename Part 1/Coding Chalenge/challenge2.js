let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;


if (markHigherBMI) {
    console.log(`Mark's BMI ${Math.round(markBMI *100) / 100} is higher than John's!`);
} else {
    console.log(`John's BMI ${Math.round(johnBMI *100) / 100} is higher than Mark's!`)
}


