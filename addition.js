function addition(){
    let x=document.getElementById('n1').value;
    let y=document.getElementById('n2').value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
let z=x+y;

document.getElementById('demo').innerHTML=z;
document.getElementById('dem').innerHTML= "typeof x is:"+typeof x;
document.getElementById('d').innerHTML= "typeof y is:"+typeof y;
}
function mul(){
    let x=document.getElementById('n1').value;
    let y=document.getElementById('n2').value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
let z=x*y;

document.getElementById('m').innerHTML=z;
}
function div(){
    let x=document.getElementById('n1').value;
    let y=document.getElementById('n2').value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
let z=x/y;

document.getElementById('di').innerHTML=z;
}
