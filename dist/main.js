/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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

function scrollPicture(direction){
    currentIndex += direction;
    currentIndex = checkIndex(currentIndex);
    selectPicture(currentIndex);
    clearInterval(scrollInterval);
    scrollInterval = setInterval(scrollPicture, 5000, 1);
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

let scrollInterval = setInterval(scrollPicture, 5000, 1);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYXVpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbnVtYmVyT2ZJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nQ29udGFpbmVyJykuY2hpbGRFbGVtZW50Q291bnQ7XG5jb25zdCBpbWFnZVdpZHRoID0gNDgwO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEJ0blwiKTtcbmNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRCdG5cIik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDb250YWluZXInKS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXG5mdW5jdGlvbiBzZWxlY3RlZENpcmNsZShpbmRleCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZVNlbGVjdG9yJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2NpcmNsZVNlbGVjdG9yQWN0aXZlJyk7XG4gICAgICAgIGUudGV4dENvbnRlbnQgPSAnIOKXiyAnO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaXJjbGUgJHtpbmRleH1gKS5jbGFzc0xpc3QuYWRkKCdjaXJjbGVTZWxlY3RvckFjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGVTZWxlY3RvckFjdGl2ZScpLnRleHRDb250ZW50ID0gJyDil48gJztcbn1cblxuZnVuY3Rpb24gc2VsZWN0UGljdHVyZShpbmRleCl7XG4gICAgc2VsZWN0ZWRDaXJjbGUoaW5kZXgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDb250YWluZXInKS5zdHlsZS5yaWdodCA9IGAke2luZGV4ICogaW1hZ2VXaWR0aH1weGA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNpcmNsZShpbmRleCl7XG4gICAgLy8gaW5pdCBjaXJjbGVzXG4gICAgY29uc3QgY2lyY2xlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXJjbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgY2lyY2xlICR7aW5kZXh9YCk7XG4gICAgY2lyY2xlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NpcmNsZVNlbGVjdG9yJyk7XG4gICAgY2lyY2xlRWxlbWVudC50ZXh0Q29udGVudCA9ICcg4peLICc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpcmNsZUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNpcmNsZUVsZW1lbnQpO1xuXG4gICAgY2lyY2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VsZWN0UGljdHVyZShpbmRleCk7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgIH0pXG5cbiAgICBjaXJjbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+e1xuICAgICAgICBjaXJjbGVFbGVtZW50LnRleHRDb250ZW50ID0gJyDil48gJztcbiAgICB9KVxuXG4gICAgY2lyY2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+e1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ICE9PSBpbmRleCl7XG4gICAgICAgICAgICBjaXJjbGVFbGVtZW50LnRleHRDb250ZW50ID0gJyDil4sgJztcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuLy8gY2hlY2tzIHRvIHNlZSBpZiBkaXN0YW5jZSBpcyBvdXQgb2YgYm91bmRzLCB0aGVuIHRha2VzIHVzIHRvIDFzdCBvciBsYXN0IHBob3RvXG5mdW5jdGlvbiBjaGVja0luZGV4KGluZGV4KXtcblxuICAgIGlmIChpbmRleCA+PSBudW1iZXJPZkltYWdlcyl7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1pZiAoaW5kZXggPCAwKXtcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSW1hZ2VzIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFBpY3R1cmUoZGlyZWN0aW9uKXtcbiAgICBjdXJyZW50SW5kZXggKz0gZGlyZWN0aW9uO1xuICAgIGN1cnJlbnRJbmRleCA9IGNoZWNrSW5kZXgoY3VycmVudEluZGV4KTtcbiAgICBzZWxlY3RQaWN0dXJlKGN1cnJlbnRJbmRleCk7XG4gICAgY2xlYXJJbnRlcnZhbChzY3JvbGxJbnRlcnZhbCk7XG4gICAgc2Nyb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzY3JvbGxQaWN0dXJlLCA1MDAwLCAxKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBCdG4obmFtZUJ0biwgZGlyZWN0aW9uKXsgICAgXG4gICAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsUGljdHVyZShkaXJlY3Rpb24pO1xuICAgIH0pXG59XG5cblxuXG4vLyBpbml0XG5mb3IgKGxldCBpID0gMDsgaTwgbnVtYmVyT2ZJbWFnZXM7IGkrKyl7XG4gICAgY3JlYXRlQ2lyY2xlKGkpO1xufVxuc2VsZWN0UGljdHVyZShjdXJyZW50SW5kZXgpO1xuc2V0dXBCdG4ocmlnaHRCdG4sIDEpO1xuc2V0dXBCdG4obGVmdEJ0biwgLTEpO1xuXG5sZXQgc2Nyb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzY3JvbGxQaWN0dXJlLCA1MDAwLCAxKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==