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
window.addEventListener('scroll', i => {
    body.style.backgroundColor = 'lightyellow';
})

// cut
const headText = document.querySelector('.intro p')
headText.addEventListener('cut', (event)=>{
    event.currentTarget.style.color = 'blue';
});

// dblclick
introHeader.addEventListener('dblclick',e=>{
    event.currentTarget.style.fontSize = '8rem';
})
// Nest two similar events somewhere in the site and prevent the event propagation properly
const textBox = document.querySelector('.text-content');
const innerP = document.querySelector('.text-content p');
textBox.addEventListener('click',e => {
    e.currentTarget.style.backgroundColor = 'pink';
})
innerP.addEventListener('click',e=>{
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = 'orange';
})

// Stop the navigation items from refreshing the page
anchors.forEach(e => e.addEventListener('click', (event) => {
    event.preventDefault();
}));