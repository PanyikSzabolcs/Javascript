// null
console.log(null)

// Array (tömb)

// Array <_>
// array of ?

//Array<string>

console.log(['elso', 'masodik', 'harmadik']);

// Array<number>
console.log([2, 12, 3]);

// szűrés
// sorba rendezés
// új elem hozzáadása 
// aggregálás

console.log([2, 12, 3][1]);

console.log([true, 2, "string.."]);

// több dimenziós tömg:

// Array<Array<number>>
console.log([[2, 3], [32, 10], [34, 10]]);

// Object (objektum)

// kulcs- érték párok sorozata

console.log(
    {
        FirstName: "József",
        LastName: "Kovács",
        age: 30
    }.LastName
);

console.log(
    {
        FirstName: "József",
        LastName: "Kovács",
        age: 30
    }['LastName']
);

console.log(
    {
        FirstName: "József",
        LastName: "Kovács",
        age: 30,
        phoneNumbers: ['06304374569', '06703245679'],
        address: {
            street: "Király u.",
            city: "Budapest"
        }
    }.phoneNumbers[0]
);

console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: '250000',
            provider: {
                country: 'HU',
                name: 'Vodafone'
            }
        },
        {
            brand: 'Huawei',
            name: 'P30 pro',
            price: '210000',
            provider: {
                country: 'DE',
                name: 'T-Mobile'
            }
        },
        {
            brand: 'Oneplus',
            name: '10pro',
            price: '370000',
            provider: {
                country: 'HU',
                name: 'Yettel'
            }
        }
    ]
)

// 1. Az első telefon nevét
// 2. A második telefon árát
// 3. A harmadik telefonok szolgáltójának országát