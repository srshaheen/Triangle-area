const side1 = 5;
const side2 = 6;
const side3 = 7;

const s = (side1 + side2 + side3)/2;

const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

const p = document.getElementById('demo');
p.innerHTML = area.toFixed(2);

