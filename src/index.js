import {checkIndex} from "./appLogic";
import "./style.css";
// import image1 from "./img/1.jpeg";


const numberOfImages = document.getElementById('imgContainer').childElementCount;
const imageWidth = 480;
let currentIndex = 0;
let scrollInterval = setInterval(scrollPicture, 5000, 1);

const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");

document.getElementById('imgContainer').style.right = '0px';

function selectedCircle(index){
    document.querySelectorAll('.circleSelector').forEach((e) => {
        e.classList.remove('circleSelectorActive');
        e.textContent = ' ○ ';
    });
    document.getElementById(`circle ${index}`).classList.add('circleSelectorActive');
    document.querySelector('.circleSelectorActive').textContent = ' ● ';
}

function selectPicture(index){
    selectedCircle(index);
    document.getElementById('imgContainer').style.right = `${index * imageWidth}px`;
    clearInterval(scrollInterval);
    scrollInterval = setInterval(scrollPicture, 5000, 1);
}

function createCircle(index){
    // init circles
    const circleElement = document.createElement('p');
    circleElement.setAttribute('id', `circle ${index}`);
    circleElement.setAttribute('class', 'circleSelector');
    circleElement.textContent = ' ○ ';
    document.getElementById('circleContainer').appendChild(circleElement);

    circleElement.addEventListener('click', () => {
        selectPicture(index);
        currentIndex = index;
    })

    circleElement.addEventListener('mouseover', () =>{
        circleElement.textContent = ' ● ';
    })

    circleElement.addEventListener('mouseout', () =>{
        if (currentIndex !== index){
            circleElement.textContent = ' ○ ';
        }
    })

}

function scrollPicture(direction){
    currentIndex += direction;
    currentIndex = checkIndex(currentIndex, numberOfImages);
    selectPicture(currentIndex);
}

function setupBtn(nameBtn, direction){    
    nameBtn.addEventListener('click', () => {
        scrollPicture(direction);
    })
}

// init
for (let i = 0; i< numberOfImages; i++){
    createCircle(i);
}
selectPicture(currentIndex);
setupBtn(rightBtn, 1);
setupBtn(leftBtn, -1);