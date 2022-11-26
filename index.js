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

//is first january sunday or not 2014-2050

for(let i = 2014; i <=2050; i++){
    const d = new Date(i, 0, 1);
    const day = d.getDay();
    if(day === 0){
        console.log(`1st january of ${i} is Sunday`)
    }
        
}
const o = new Date();
const mil = o.getMilliseconds();
console.log(mil);
