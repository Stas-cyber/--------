let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');

let figcaption = document.querySelector('figcaption');

figcaption.style.display = 'none';

img1.addEventListener('mouseover', () => {
    figcaption.style.display = 'block';
})

img1.addEventListener('mouseout', () => {
    figcaption.style.display = 'none';
})
let count = 0;
img2.addEventListener('click', () => {
    
    if (count % 2 == 0) {
        img2.setAttribute('style', 'border: 10px solid red;');
    } else {
        img2.setAttribute('style', 'border: none;'); 
    }
    count++;
});

img3.addEventListener('mouseover', () => {
    img3.src = 'img/logo node.png';
})

img3.addEventListener('mouseout', () => {
    img3.src = 'img/logo js.png';
})