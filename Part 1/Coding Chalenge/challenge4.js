
let bill = 275;
let tip = (50 < bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the toal value ${bill + tip}`);