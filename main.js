/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIndex: () => (/* binding */ checkIndex)
/* harmony export */ });
// checks to see if distance is out of bounds, then takes us to 1st or last photo
function checkIndex(index, numberOfImages){

    if (index >= numberOfImages){
        return 0;
    }if (index < 0){
        return numberOfImages - 1;
    }

    return index;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");


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
    currentIndex = (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.checkIndex)(currentIndex, numberOfImages);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CO0FBQ2hGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxREFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmF1aS8uL3NyYy9hcHBMb2dpYy5qcyIsIndlYnBhY2s6Ly9keW5hdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYXVpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hdWkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2hlY2tzIHRvIHNlZSBpZiBkaXN0YW5jZSBpcyBvdXQgb2YgYm91bmRzLCB0aGVuIHRha2VzIHVzIHRvIDFzdCBvciBsYXN0IHBob3RvXG5mdW5jdGlvbiBjaGVja0luZGV4KGluZGV4LCBudW1iZXJPZkltYWdlcyl7XG5cbiAgICBpZiAoaW5kZXggPj0gbnVtYmVyT2ZJbWFnZXMpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9aWYgKGluZGV4IDwgMCl7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkltYWdlcyAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgeyBjaGVja0luZGV4IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NoZWNrSW5kZXh9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbmNvbnN0IG51bWJlck9mSW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0NvbnRhaW5lcicpLmNoaWxkRWxlbWVudENvdW50O1xuY29uc3QgaW1hZ2VXaWR0aCA9IDQ4MDtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xubGV0IHNjcm9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoc2Nyb2xsUGljdHVyZSwgNTAwMCwgMSk7XG5cbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodEJ0blwiKTtcbmNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRCdG5cIik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDb250YWluZXInKS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXG5mdW5jdGlvbiBzZWxlY3RlZENpcmNsZShpbmRleCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZVNlbGVjdG9yJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2NpcmNsZVNlbGVjdG9yQWN0aXZlJyk7XG4gICAgICAgIGUudGV4dENvbnRlbnQgPSAnIOKXiyAnO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaXJjbGUgJHtpbmRleH1gKS5jbGFzc0xpc3QuYWRkKCdjaXJjbGVTZWxlY3RvckFjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGVTZWxlY3RvckFjdGl2ZScpLnRleHRDb250ZW50ID0gJyDil48gJztcbn1cblxuZnVuY3Rpb24gc2VsZWN0UGljdHVyZShpbmRleCl7XG4gICAgc2VsZWN0ZWRDaXJjbGUoaW5kZXgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDb250YWluZXInKS5zdHlsZS5yaWdodCA9IGAke2luZGV4ICogaW1hZ2VXaWR0aH1weGA7XG4gICAgY2xlYXJJbnRlcnZhbChzY3JvbGxJbnRlcnZhbCk7XG4gICAgc2Nyb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzY3JvbGxQaWN0dXJlLCA1MDAwLCAxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lyY2xlKGluZGV4KXtcbiAgICAvLyBpbml0IGNpcmNsZXNcbiAgICBjb25zdCBjaXJjbGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpcmNsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGBjaXJjbGUgJHtpbmRleH1gKTtcbiAgICBjaXJjbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2lyY2xlU2VsZWN0b3InKTtcbiAgICBjaXJjbGVFbGVtZW50LnRleHRDb250ZW50ID0gJyDil4sgJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2lyY2xlRWxlbWVudCk7XG5cbiAgICBjaXJjbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWxlY3RQaWN0dXJlKGluZGV4KTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgfSlcblxuICAgIGNpcmNsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT57XG4gICAgICAgIGNpcmNsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnIOKXjyAnO1xuICAgIH0pXG5cbiAgICBjaXJjbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT57XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IGluZGV4KXtcbiAgICAgICAgICAgIGNpcmNsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnIOKXiyAnO1xuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBzY3JvbGxQaWN0dXJlKGRpcmVjdGlvbil7XG4gICAgY3VycmVudEluZGV4ICs9IGRpcmVjdGlvbjtcbiAgICBjdXJyZW50SW5kZXggPSBjaGVja0luZGV4KGN1cnJlbnRJbmRleCwgbnVtYmVyT2ZJbWFnZXMpO1xuICAgIHNlbGVjdFBpY3R1cmUoY3VycmVudEluZGV4KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBCdG4obmFtZUJ0biwgZGlyZWN0aW9uKXsgICAgXG4gICAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsUGljdHVyZShkaXJlY3Rpb24pO1xuICAgIH0pXG59XG5cbi8vIGluaXRcbmZvciAobGV0IGkgPSAwOyBpPCBudW1iZXJPZkltYWdlczsgaSsrKXtcbiAgICBjcmVhdGVDaXJjbGUoaSk7XG59XG5zZWxlY3RQaWN0dXJlKGN1cnJlbnRJbmRleCk7XG5zZXR1cEJ0bihyaWdodEJ0biwgMSk7XG5zZXR1cEJ0bihsZWZ0QnRuLCAtMSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9