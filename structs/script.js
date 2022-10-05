// if / else statement 

var age = prompt("Add meg az életkorod");
if(age < 20) {
    alert("Fiatalabb, mint 20");
} else if(age > 10 && age < 30) {
    alert("Idősebb, mint 20 és fiatalabb mint 30");
} else {
    alert("Idősebb, mint 20");
}

////////////////////////////////////////////////////////////////////////////////////////////////

// switch

switch(age) {
    case 18:
        console.log("A felhasználó 18 éves");
        break;
    case 19:
        console.log("A felhasználó 19 éves");
        break;
    default:
        console.log("A felhasználó életkora ismeretlen");
}

switch(true) {
    case age < 20:
        alert("Fiatalabb, mint 20");
        break;
    case age < 20 && age < 30:
        alert("Idősebb mint 20 és fiatalabb mint 30");
        break;
    default:
        alert("Idősebb mint 30");
}