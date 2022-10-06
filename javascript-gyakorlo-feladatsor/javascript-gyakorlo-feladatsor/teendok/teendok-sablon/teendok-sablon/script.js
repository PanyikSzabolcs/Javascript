let state = {
  teendok: [],
  isPending: false,
};

// 1. Kattintás eseményre köss be funkcionalitást

// 2. A esemény bekövetkezésekor állítsd a state isPending értékét true-ra

// 3. Küldj AJAX kérést a beépített "fetch" függvény segítségével

// 4. A válaszként kapott adatokat szűrd meg a "filter" függvénnyel

// 5. A megszűrt adatokat írd be a state teendok kulcsa alá

// 6. Ezután állítsd vissza az isPending-et false-ra

/* 7. Készíts egy renderelő függvényt, ami
  - Ha az isPending true, akkor egy "Betöltés folyamatban" feliratot ír ki
  - Ha az isPending false, akkor pedig kirajzolja az összes teendőt, 
    ami a state-ben van
*/

// 8. Hívd meg a renderelő függvényt a 2. és az 4. pont után is
