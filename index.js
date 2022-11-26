const side1 = 5;
const side2 = 6;
const side3 = 7;

const s = (side1 + side2 + side3)/2;

const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

const p = document.getElementById('demo');
p.innerHTML = area.toFixed(2);

//leap year or not
const demo2 = document.getElementById('demo2');
const year = Number(prompt("Enter the year: "));
if(year % 4 == 0 && year % 100 != 0){
    demo2.innerHTML = (`${year} is leap year`);
}
else if(year % 400 == 0){
    demo2.innerHTML = (`${year} is leap year`);
}
else{
    demo2.innerHTML = (`${year} is not leap year`);
}

