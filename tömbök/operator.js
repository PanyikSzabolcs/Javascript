// Operátorok


// (number, number) -> number
console.log(2 + 3);

/*
    Operátorok csoportosíthatóak:
        - operandusok száma szerint:
            1: unary
            2: binary
            3: ternary
        - operátor lexikális elhelyezledése
            előtte: prefix
            közötte: infix
            utána: postfix
        - hajt-e végre mellékhatást? (side effect)
            igen
            nem
*/


// 1.  CSALÁD   
/*
    Aritmetikai
    (number, number) -> number
*/

// +, -, *, /, %
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(7 % 3);

/*
    Összehasonlító
    (any, any) -> boolean
*/

// == (equality)
console.log(2 == 1); //ha a szám helyén string van pl: console.log(2 == '1'); akkor "true" lesz a bolean értéke, a nyelv gyengesége miatt.

// !=
console.log(2 != 2);

// === (identity)
console.log(1 === true);
console.log(1 !== true);
console.log('János' === 'József');

// >, <, >=, <=
console.log(3 > 5);

/*
    Logikai operátorok
    (boolean, boolean) -> boolean
    (boolean) -> boolean
*/

// Logikai ÉS
console.log(true && true);

// Logikai VAGY
console.log(true || false);

// negálás
console.log(!true);

console.log(2 === 2 && 1 > 5);
console.log(2 === 2 && (1 > 5 || true));

console.log((2 + 3) * 5);

// String operátor

// konkaktenálás
console.log('Szia' + 'Daniel');

// conditional (kapcsoló)

//(bool, any, any) -> any

console.log(true ? 'első' : 'második');


// 2. CSALÁD
// Assigned operator
// (var, any) -> any

var valtozo;
console.log(valtozo);

console.log(valtozo = 'szia');
console.log(valtozo);

valtozo = 3;

console.log(valtozo);

// increment, decrement

valtozo++;
valtozo--;

console.log(valtozo);

// +=, -=

var szam = 5;

// szam = szam + 10;
szam += 10;
console.log(szam);