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

function setupBtn(nameBtn, direction){    
    nameBtn.addEventListener('click', () => {
        // surely not a best practice to do this right?
        if (direction === '+'){
            currentIndex += 1;
        }else{
            currentIndex -= 1;
        }

        currentIndex = checkIndex(currentIndex);
        selectPicture(currentIndex);
    })
}



// init
for (let i = 0; i< numberOfImages; i++){
    createCircle(i);
}
selectPicture(currentIndex);
setupBtn(rightBtn, '+');
setupBtn(leftBtn, '-');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hdWkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBudW1iZXJPZkltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDb250YWluZXInKS5jaGlsZEVsZW1lbnRDb3VudDtcbmNvbnN0IGltYWdlV2lkdGggPSA0ODA7XG5sZXQgY3VycmVudEluZGV4ID0gMDtcblxuY29uc3QgcmlnaHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0QnRuXCIpO1xuY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdEJ0blwiKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0NvbnRhaW5lcicpLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG5cbmZ1bmN0aW9uIHNlbGVjdGVkQ2lyY2xlKGluZGV4KXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlU2VsZWN0b3InKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnY2lyY2xlU2VsZWN0b3JBY3RpdmUnKTtcbiAgICAgICAgZS50ZXh0Q29udGVudCA9ICcg4peLICc7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNpcmNsZSAke2luZGV4fWApLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZVNlbGVjdG9yQWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZVNlbGVjdG9yQWN0aXZlJykudGV4dENvbnRlbnQgPSAnIOKXjyAnO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQaWN0dXJlKGluZGV4KXtcbiAgICBzZWxlY3RlZENpcmNsZShpbmRleCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0NvbnRhaW5lcicpLnN0eWxlLnJpZ2h0ID0gYCR7aW5kZXggKiBpbWFnZVdpZHRofXB4YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lyY2xlKGluZGV4KXtcbiAgICAvLyBpbml0IGNpcmNsZXNcbiAgICBjb25zdCBjaXJjbGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpcmNsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGBjaXJjbGUgJHtpbmRleH1gKTtcbiAgICBjaXJjbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2lyY2xlU2VsZWN0b3InKTtcbiAgICBjaXJjbGVFbGVtZW50LnRleHRDb250ZW50ID0gJyDil4sgJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2lyY2xlRWxlbWVudCk7XG5cbiAgICBjaXJjbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWxlY3RQaWN0dXJlKGluZGV4KTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgfSlcblxuICAgIGNpcmNsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT57XG4gICAgICAgIGNpcmNsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnIOKXjyAnO1xuICAgIH0pXG5cbiAgICBjaXJjbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT57XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IGluZGV4KXtcbiAgICAgICAgICAgIGNpcmNsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnIOKXiyAnO1xuICAgICAgICB9XG4gICAgfSlcblxufVxuXG4vLyBjaGVja3MgdG8gc2VlIGlmIGRpc3RhbmNlIGlzIG91dCBvZiBib3VuZHMsIHRoZW4gdGFrZXMgdXMgdG8gMXN0IG9yIGxhc3QgcGhvdG9cbmZ1bmN0aW9uIGNoZWNrSW5kZXgoaW5kZXgpe1xuXG4gICAgaWYgKGluZGV4ID49IG51bWJlck9mSW1hZ2VzKXtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfWlmIChpbmRleCA8IDApe1xuICAgICAgICByZXR1cm4gbnVtYmVyT2ZJbWFnZXMgLSAxO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0dXBCdG4obmFtZUJ0biwgZGlyZWN0aW9uKXsgICAgXG4gICAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gc3VyZWx5IG5vdCBhIGJlc3QgcHJhY3RpY2UgdG8gZG8gdGhpcyByaWdodD9cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJysnKXtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudEluZGV4ID0gY2hlY2tJbmRleChjdXJyZW50SW5kZXgpO1xuICAgICAgICBzZWxlY3RQaWN0dXJlKGN1cnJlbnRJbmRleCk7XG4gICAgfSlcbn1cblxuXG5cbi8vIGluaXRcbmZvciAobGV0IGkgPSAwOyBpPCBudW1iZXJPZkltYWdlczsgaSsrKXtcbiAgICBjcmVhdGVDaXJjbGUoaSk7XG59XG5zZWxlY3RQaWN0dXJlKGN1cnJlbnRJbmRleCk7XG5zZXR1cEJ0bihyaWdodEJ0biwgJysnKTtcbnNldHVwQnRuKGxlZnRCdG4sICctJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=