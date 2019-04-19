var addlist = document.querySelector('.main');


for (let i = 2; i<10; i++){
let el = document.createElement('ul');
addlist.appendChild(el);

let el2 = document.createElement('li');
el2.setAttribute('class','titleNum');
el2.textContent = i.toString();
el.appendChild(el2);

for (let x = 1;x <10; x++){
let elNum = document.createElement('li');
let elresult = `${i} x ${x} =${i * x}`
elNum.textContent = elresult;
el.appendChild(elNum);
}
}