/*
    Input:
        Hány jegyet szeretne?
        Milyen típusú jegy legyen? (student | adult)

        A diák jegy ára: 300ft
        Felnőtt jegy ára: 350ft
        Tíznél több jegy vásárlása esetén jár 10% kedvezmény
*/
//////////////////////////////////////////////////////////////////////////////////////////
var mennyiseg = prompt("Hány jegyet szeretnél vásárolni?");
var tipus = prompt("Add meg a jegyed típusát!");

var tipusok = {
    diak: 300,
    felnott: 350,
    nyugdijas: 280,
    gyerek: 280
};

var ar = tipusok[tipus];

if(ar === undefined) {
    alert('Érvénytelen típus');
} else {
    var kedvezmeny = mennyiseg > 10 ? 0.9 : 1;
    var teljes = mennyiseg * ar * kedvezmeny;
    alert(teljes);
}
//////////////////////////////////////////////////////////////////////////////////////////