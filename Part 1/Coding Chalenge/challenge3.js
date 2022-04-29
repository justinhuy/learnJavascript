let dolphinsTeam = (96 + 108 + 89) / 3;
let koalasTeam = (88 + 91 + 110) / 3;

if (dolphinsTeam > koalasTeam) {
    console.log(`The winner is Dolphin team with ${Math.round(dolphinsTeam)} scored`);
} else if (koalasTeam > dolphinsTeam) {
    console.log(`The winner is Dolphin team with ${Math.round(koalasTeam)} scored`); 
} else {
    console.log("Draw"); 
}



