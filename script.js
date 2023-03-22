let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let tree = document.getElementById('tree');
let plant = document.getElementById('plant');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
window.addEventListener('scroll',()=>{

    let value = window.scrollY;

    text.style.marginTop = value*2 + 'px';
    leaf.style.top = value*-.5 + 'px';
    leaf.style.left = value*.5 + 'px';
    tree.style.marginTop = value/10 + 'px';
    plant.style.marginTop = value/20 + 'px';
    hill1.style.marginTop = value/10 + 'px';
    hill2.style.marginTop = value/5 + 'px';
    hill3.style.marginTop = value/4 + 'px';
    hill4.style.marginTop = value/3 + 'px';
});