
let nextPag = document.getElementById('next');
let prevPag = document.getElementById('prev');
let carrossel = document.querySelector('.carrossel');
let listItem = document.querySelector('.carrossel .list');
let miniCard = document.querySelector('.carrossel .mini-card');

prevPag = function(){
    return showSlider('prev')
}

nextPag = function(){
    return showSlider('next')
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;

let runAutoRun = setTimeout(()=>{
    // nextPag.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carrossel .list .item')
    let itemThumbnail = document.querySelectorAll('.carrossel .mini-card .item')
    
    if(type == 'next') {
        console.log(type)
        listItem.appendChild(itemSlider[0]);
        miniCard.appendChild(itemThumbnail[0]);
        carrossel.classList.add('next');

    } else {
        let positionLAstItem = itemSlider.length -1;
        listItem.prepend(itemSlider[positionLAstItem]);
        miniCard.prepend(itemThumbnail[positionLAstItem]);
        carrossel.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carrossel.classList.remove('next');
        carrossel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    
}