/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import charPhoto from './assets/golbez.png'\n// import backgroundPhoto from './assets/background.png'\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.width = 1000;\n  canvas.heigth = 600;\n  var keys = [];\n  var player = {\n    x: 200,\n    y: 200,\n    width: 32,\n    height: 48,\n    fx: 0,\n    fy: 2,\n    speed: 5,\n    moving: false\n  };\n  var playerChar = document.getElementById('player');\n\n  function drawPlayer(imgfile, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(imgfile, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawPlayer(playerChar, player.width * player.fx, player.height * player.fy, player.width, player.height, player.x, player.y, player.width, player.height);\n    moveChar();\n    requestAnimationFrame(animate);\n  }\n\n  window.addEventListener('keydown', function (e) {\n    keys[e.keyCode] = true;\n  });\n  window.addEventListener('keyup', function (e) {\n    delete keys[e.keyCode];\n  });\n\n  function moveChar() {\n    if (keys[38]) {\n      player.y -= player.speed;\n      player.fy = 3;\n    } else if (keys[37]) {\n      player.x -= player.speed;\n      player.fy = 1;\n    } else if (keys[40]) {\n      player.y += player.speed;\n      player.fy = 0;\n    } else if (keys[39]) {\n      player.x += player.speed;\n      player.fy = 2;\n    }\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGluZ3Nob3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWd0aCIsImtleXMiLCJwbGF5ZXIiLCJ4IiwieSIsImhlaWdodCIsImZ4IiwiZnkiLCJzcGVlZCIsIm1vdmluZyIsInBsYXllckNoYXIiLCJkcmF3UGxheWVyIiwiaW1nZmlsZSIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwibW92ZUNoYXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJlIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxNQUFNQyxNQUFNLEdBQUc7QUFDWEMsSUFBQUEsQ0FBQyxFQUFFLEdBRFE7QUFFWEMsSUFBQUEsQ0FBQyxFQUFFLEdBRlE7QUFHWEwsSUFBQUEsS0FBSyxFQUFFLEVBSEk7QUFJWE0sSUFBQUEsTUFBTSxFQUFFLEVBSkc7QUFLWEMsSUFBQUEsRUFBRSxFQUFFLENBTE87QUFNWEMsSUFBQUEsRUFBRSxFQUFFLENBTk87QUFPWEMsSUFBQUEsS0FBSyxFQUFFLENBUEk7QUFRWEMsSUFBQUEsTUFBTSxFQUFFO0FBUkcsR0FBZjtBQVdBLE1BQU1DLFVBQVUsR0FBR2pCLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUFuQjs7QUFHQSxXQUFTZSxVQUFULENBQW9CQyxPQUFwQixFQUE2QkMsRUFBN0IsRUFBaUNDLEVBQWpDLEVBQXFDQyxFQUFyQyxFQUF5Q0MsRUFBekMsRUFBNkNDLEVBQTdDLEVBQWlEQyxFQUFqRCxFQUFxREMsRUFBckQsRUFBeURDLEVBQXpELEVBQTREO0FBQ3hEdkIsSUFBQUEsR0FBRyxDQUFDd0IsU0FBSixDQUFjVCxPQUFkLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0JDLEVBQS9CLEVBQW1DQyxFQUFuQyxFQUF1Q0MsRUFBdkMsRUFBMkNDLEVBQTNDLEVBQStDQyxFQUEvQyxFQUFtREMsRUFBbkQ7QUFDSDs7QUFFRCxXQUFTRSxPQUFULEdBQWtCO0FBQ2R6QixJQUFBQSxHQUFHLENBQUMwQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjVCLE1BQU0sQ0FBQ0ksS0FBM0IsRUFBa0NKLE1BQU0sQ0FBQ1UsTUFBekM7QUFDQU0sSUFBQUEsVUFBVSxDQUFDRCxVQUFELEVBQWFSLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlRyxNQUFNLENBQUNJLEVBQW5DLEVBQXVDSixNQUFNLENBQUNHLE1BQVAsR0FBZ0JILE1BQU0sQ0FBQ0ssRUFBOUQsRUFBa0VMLE1BQU0sQ0FBQ0gsS0FBekUsRUFBZ0ZHLE1BQU0sQ0FBQ0csTUFBdkYsRUFDVkgsTUFBTSxDQUFDQyxDQURHLEVBQ0FELE1BQU0sQ0FBQ0UsQ0FEUCxFQUNVRixNQUFNLENBQUNILEtBRGpCLEVBQ3dCRyxNQUFNLENBQUNHLE1BRC9CLENBQVY7QUFFQW1CLElBQUFBLFFBQVE7QUFDUkMsSUFBQUEscUJBQXFCLENBQUNILE9BQUQsQ0FBckI7QUFDSDs7QUFHREksRUFBQUEsTUFBTSxDQUFDaEMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBU2lDLENBQVQsRUFBVztBQUMxQzFCLElBQUFBLElBQUksQ0FBQzBCLENBQUMsQ0FBQ0MsT0FBSCxDQUFKLEdBQWtCLElBQWxCO0FBQ0gsR0FGRDtBQUlBRixFQUFBQSxNQUFNLENBQUNoQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTaUMsQ0FBVCxFQUFXO0FBQ3hDLFdBQU8xQixJQUFJLENBQUMwQixDQUFDLENBQUNDLE9BQUgsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsV0FBU0osUUFBVCxHQUFtQjtBQUNmLFFBQUl2QixJQUFJLENBQUMsRUFBRCxDQUFSLEVBQWE7QUFDVEMsTUFBQUEsTUFBTSxDQUFDRSxDQUFQLElBQVlGLE1BQU0sQ0FBQ00sS0FBbkI7QUFDQU4sTUFBQUEsTUFBTSxDQUFDSyxFQUFQLEdBQVksQ0FBWjtBQUNILEtBSEQsTUFHTyxJQUFJTixJQUFJLENBQUMsRUFBRCxDQUFSLEVBQWM7QUFDakJDLE1BQUFBLE1BQU0sQ0FBQ0MsQ0FBUCxJQUFZRCxNQUFNLENBQUNNLEtBQW5CO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ0ssRUFBUCxHQUFZLENBQVo7QUFDSCxLQUhNLE1BR0EsSUFBSU4sSUFBSSxDQUFDLEVBQUQsQ0FBUixFQUFjO0FBQ2pCQyxNQUFBQSxNQUFNLENBQUNFLENBQVAsSUFBWUYsTUFBTSxDQUFDTSxLQUFuQjtBQUNBTixNQUFBQSxNQUFNLENBQUNLLEVBQVAsR0FBWSxDQUFaO0FBQ0gsS0FITSxNQUdBLElBQUlOLElBQUksQ0FBQyxFQUFELENBQVIsRUFBYztBQUNqQkMsTUFBQUEsTUFBTSxDQUFDQyxDQUFQLElBQVlELE1BQU0sQ0FBQ00sS0FBbkI7QUFDQU4sTUFBQUEsTUFBTSxDQUFDSyxFQUFQLEdBQVksQ0FBWjtBQUNIO0FBQ0o7O0FBRURlLEVBQUFBLE9BQU87QUFDVixDQTdERCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjaGFyUGhvdG8gZnJvbSAnLi9hc3NldHMvZ29sYmV6LnBuZydcbi8vIGltcG9ydCBiYWNrZ3JvdW5kUGhvdG8gZnJvbSAnLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ3RoID0gNjAwO1xuXG4gICAgY29uc3Qga2V5cyA9IFtdO1xuXG4gICAgY29uc3QgcGxheWVyID0ge1xuICAgICAgICB4OiAyMDAsXG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgICBmeDogMCxcbiAgICAgICAgZnk6IDIsXG4gICAgICAgIHNwZWVkOiA1LFxuICAgICAgICBtb3Zpbmc6IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyQ2hhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKVxuIFxuXG4gICAgZnVuY3Rpb24gZHJhd1BsYXllcihpbWdmaWxlLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpe1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZ2ZpbGUsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgZHJhd1BsYXllcihwbGF5ZXJDaGFyLCBwbGF5ZXIud2lkdGggKiBwbGF5ZXIuZngsIHBsYXllci5oZWlnaHQgKiBwbGF5ZXIuZnksIHBsYXllci53aWR0aCwgcGxheWVyLmhlaWdodCwgXG4gICAgICAgIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0KTtcbiAgICAgICAgbW92ZUNoYXIoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7XG4gICAgfSlcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZGVsZXRlIGtleXNbZS5rZXlDb2RlXTtcbiAgICB9KVxuICBcbiAgICBmdW5jdGlvbiBtb3ZlQ2hhcigpe1xuICAgICAgICBpZiAoa2V5c1szOF0pe1xuICAgICAgICAgICAgcGxheWVyLnkgLT0gcGxheWVyLnNwZWVkXG4gICAgICAgICAgICBwbGF5ZXIuZnkgPSAzXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1szN10gKXtcbiAgICAgICAgICAgIHBsYXllci54IC09IHBsYXllci5zcGVlZFxuICAgICAgICAgICAgcGxheWVyLmZ5ID0gMVxuICAgICAgICB9IGVsc2UgaWYgKGtleXNbNDBdICl7XG4gICAgICAgICAgICBwbGF5ZXIueSArPSBwbGF5ZXIuc3BlZWRcbiAgICAgICAgICAgIHBsYXllci5meSA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzWzM5XSApe1xuICAgICAgICAgICAgcGxheWVyLnggKz0gcGxheWVyLnNwZWVkXG4gICAgICAgICAgICBwbGF5ZXIuZnkgPSAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCk7XG59KSJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/stylesheets/index.scss":
/*!************************************!*\
  !*** ./src/stylesheets/index.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGluZ3Nob3QvLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Nzcz8yMzFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stylesheets/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/stylesheets/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;