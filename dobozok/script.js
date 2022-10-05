/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/

/*
    - element JS reprezentációja:
    - esemény kiválasztása
    - funkcionalitás leírása: function () {...}
*/

var isBlurred = false;

document.getElementById('element-one').onclick = function () {

    isBlurred = !isBlurred;
    
    if (isBlurred) {
      document.getElementById('element-one').classList.add('blur');
    } else {
      document.getElementById('element-one').classList.remove('blur');
    }

};

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

var isHovered = false;

document.getElementById('element-two').onmouseover = function () {
  isHovered = true;
  renderSecond();
};

document.getElementById('element-two').onmouseleave = function () {
  isHovered  = false;
  renderSecond();
};

function renderSecond() {
  if (isHovered)
    document.getElementById('element-two').style.backgroundColor = 'red';
  else
    document.getElementById('element-two').style.backgroundColor = '';
};

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

var content = 3;

document.getElementById('element-three').ondblclick = function() {
  content = Math.round(Math.random() * 20)+1
  renderThird();
};

function renderThird() {
  var element = 
  `<span class="text">
      ${content}
  </span>`;
  document.getElementById('element-three').innerHTML = element;
};

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById('element-four').onclick = function() {
  document.getElementById('element-four').style.visibility = 'hidden';
  setTimeout(function() {
    document.getElementById('element-four').style.visibility = 'visible';
    }, 1000);
};

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/

document.getElementById('element-five').onclick = function() {
  var boxes = document.querySelectorAll('.shape');
  
  for (var box of boxes) {
    box.style.borderRadius = '50%';
  }
};

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

document.getElementById('box-6').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('element-six').firstElementChild.innerHTML
  = event.target.elements.boxNumber.value
};

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

document.getElementById("box7-input").onkeypress = function(event) {
  document.getElementById("element-seven").firstElementChild.innerHTML =
    event.key;
};
/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

document.getElementById("element-eight").onmousemove = function(event) {
  document.getElementById("element-eight").firstElementChild.innerHTML = `X: ${event.screenX}, Y: ${event.screenY}`;
};


/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45

var state = 9;
*/

document.getElementById("box-9").onsubmit = function(event) {
  event.preventDefault();
  var operand = Number(event.target.elements.operand.value);
  var operator = event.target.elements.operator.value;

  console.log(operand);
  console.log(operator);

  switch (operator) {
    case "mult":
      state = state * operand;
      break;
    case "div":
      state = state / operand;
      break;
    case "add":
      state = state + operand;
      break;
    case "sub":
      state = state - operand;
      break;
  }

  document.getElementById("element-nine").firstElementChild.innerHTML = state;
};