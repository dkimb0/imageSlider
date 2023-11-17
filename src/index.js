
const numberOfImages = document.getElementById('imgContainer').childElementCount;
const imageWidth = 480;
let currentIndex = 0;

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

// checks to see if distance is out of bounds, then takes us to 1st or last photo
function checkIndex(index){

    if (index >= numberOfImages){
        return 0;
    }if (index < 0){
        return numberOfImages - 1;
    }

    return index;
}

function setupBtn(nameBtn, direction){    
    nameBtn.addEventListener('click', () => {
        // surely not a best practice to do this right?
        currentIndex += direction;

        currentIndex = checkIndex(currentIndex);
        selectPicture(currentIndex);
    })
}



// init
for (let i = 0; i< numberOfImages; i++){
    createCircle(i);
}
selectPicture(currentIndex);
setupBtn(rightBtn, 1);
setupBtn(leftBtn, -1);
