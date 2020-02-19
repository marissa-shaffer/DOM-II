// Your code goes here

// mouseover
const anchors = Array.from(document.querySelectorAll('.nav a'));
anchors.forEach(e => e.addEventListener('mouseover',(event) => {
    event.currentTarget.style.color = '#AC33FF';
}));

// keydown
const body = document.querySelector('body');
document.addEventListener('keydown', (event) => {
    body.style.backgroundColor = '#AC33FF'
});

// wheel
const introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('wheel', (event)=> {
    event.preventDefault();
    event.currentTarget.style.fontSize = '10rem';
});

// drag / drop

// load

// focus

// resize

// scroll

// select

// dblclick