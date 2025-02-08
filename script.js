let lay9 = document.getElementById('lay9');
let lay8 = document.getElementById('lay8');
let lay7 = document.getElementById('lay7');
let lay6 = document.getElementById('lay6');
let lay5 = document.getElementById('lay5');
let lay4 = document.getElementById('lay4');
let lay3 = document.getElementById('lay3');
let layT = document.getElementById('layT');
let lay2 = document.getElementById('lay2');
let lay1 = document.getElementById('lay1');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    lay9.style.top = value * 0 + 'px';
    lay8.style.top = value * 0.9 + 'px';
    lay7.style.top = value * 0.9 + 'px';
    lay6.style.top = value * 0.8 + 'px';
    lay5.style.top = value * 0.8 + 'px';
    lay4.style.top = value * 0.7 + 'px';
    lay3.style.top = value * 0.6 + 'px';
    layT.style.top = value * 0.5 + 'px';
    lay2.style.top = value * 0.3 + 'px';
    lay1.style.top = value * 0 + 'px';
})