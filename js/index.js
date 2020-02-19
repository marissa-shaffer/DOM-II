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
const introImg = document.querySelector('.intro img');
const goImg = document.querySelector('.img-content img');


introImg.addEventListener('drag',(event) => {
    event.currentTarget.style.width = '400px';
})
introImg.addEventListener('dragend',(event) => {
    event.currentTarget.style.width = '800px';
})
introHeader.addEventListener('dragover',(event) => {
    event.preventDefault();
});
introHeader.addEventListener('drop',(event) => {
    body.style.backgroundColor = 'purple';
});

// load
goImg.addEventListener('load', (event) => {
    goImg.style.width = '20px';
    body.style.backgroundColor = 'red';
})
// focus
anchors.forEach(e => e.addEventListener('focus',(event) => {
    event.currentTarget.style.color = 'black';
}));

// resize
window.addEventListener('resize', i => {
    body.style.backgroundColor = 'lightgrey';
})

// scroll

// select

// dblclick