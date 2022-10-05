phones [
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

// 1. Az első telefon nevét
// 2. A második telefon árát
// 3. A harmadik telefonok szolgáltójának országát

console.log(phones[0].name);
console.log(phones[1].price);
console.log(phones[2].provider.country);