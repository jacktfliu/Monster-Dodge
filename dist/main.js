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

eval("// import charPhoto from './assets/golbez.png'\n// import backgroundPhoto from './assets/background.png'\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.width = 1000;\n  canvas.heigth = 600;\n  var keys = [];\n  var player = {\n    x: 200,\n    y: 200,\n    width: 34,\n    height: 45,\n    fx: 0,\n    fy: 0,\n    speed: 9,\n    moving: false\n  };\n  var playerChar = document.getElementById('player'); // playerChar.src = charPhoto\n  // const background= new Image();\n  // background.src = backgroundPhoto\n\n  function drawPlayer(imgfile, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(imgfile, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawPlayer(playerChar, player.width * player.fx, player.height * player.fy, player.width, player.height, player.x, player.y, player.width, player.height);\n    moveChar();\n    requestAnimationFrame(animate);\n  }\n\n  window.addEventListener('keydown', function (e) {\n    keys[e.keyCode] = true;\n  });\n  window.addEventListener('keyup', function (e) {\n    delete keys[e.keyCode];\n  });\n\n  function moveChar() {\n    if (keys[38]) {\n      player.y -= player.speed;\n    } else if (keys[37]) {\n      player.x -= player.speed;\n    } else if (keys[40]) {\n      player.y += player.speed;\n    } else if (keys[39]) {\n      player.x += player.speed;\n    }\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGluZ3Nob3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWd0aCIsImtleXMiLCJwbGF5ZXIiLCJ4IiwieSIsImhlaWdodCIsImZ4IiwiZnkiLCJzcGVlZCIsIm1vdmluZyIsInBsYXllckNoYXIiLCJkcmF3UGxheWVyIiwiaW1nZmlsZSIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwibW92ZUNoYXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJlIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxNQUFNQyxNQUFNLEdBQUc7QUFDWEMsSUFBQUEsQ0FBQyxFQUFFLEdBRFE7QUFFWEMsSUFBQUEsQ0FBQyxFQUFFLEdBRlE7QUFHWEwsSUFBQUEsS0FBSyxFQUFFLEVBSEk7QUFJWE0sSUFBQUEsTUFBTSxFQUFFLEVBSkc7QUFLWEMsSUFBQUEsRUFBRSxFQUFFLENBTE87QUFNWEMsSUFBQUEsRUFBRSxFQUFFLENBTk87QUFPWEMsSUFBQUEsS0FBSyxFQUFFLENBUEk7QUFRWEMsSUFBQUEsTUFBTSxFQUFFO0FBUkcsR0FBZjtBQVdBLE1BQU1DLFVBQVUsR0FBR2pCLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUFuQixDQXBCZ0QsQ0FxQmhEO0FBQ0E7QUFDQTs7QUFHQSxXQUFTZSxVQUFULENBQW9CQyxPQUFwQixFQUE2QkMsRUFBN0IsRUFBaUNDLEVBQWpDLEVBQXFDQyxFQUFyQyxFQUF5Q0MsRUFBekMsRUFBNkNDLEVBQTdDLEVBQWlEQyxFQUFqRCxFQUFxREMsRUFBckQsRUFBeURDLEVBQXpELEVBQTREO0FBQ3hEdkIsSUFBQUEsR0FBRyxDQUFDd0IsU0FBSixDQUFjVCxPQUFkLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0JDLEVBQS9CLEVBQW1DQyxFQUFuQyxFQUF1Q0MsRUFBdkMsRUFBMkNDLEVBQTNDLEVBQStDQyxFQUEvQyxFQUFtREMsRUFBbkQ7QUFDSDs7QUFFRCxXQUFTRSxPQUFULEdBQWtCO0FBQ2R6QixJQUFBQSxHQUFHLENBQUMwQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjVCLE1BQU0sQ0FBQ0ksS0FBM0IsRUFBa0NKLE1BQU0sQ0FBQ1UsTUFBekM7QUFDQU0sSUFBQUEsVUFBVSxDQUFDRCxVQUFELEVBQWFSLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlRyxNQUFNLENBQUNJLEVBQW5DLEVBQXVDSixNQUFNLENBQUNHLE1BQVAsR0FBZ0JILE1BQU0sQ0FBQ0ssRUFBOUQsRUFBa0VMLE1BQU0sQ0FBQ0gsS0FBekUsRUFBZ0ZHLE1BQU0sQ0FBQ0csTUFBdkYsRUFDVkgsTUFBTSxDQUFDQyxDQURHLEVBQ0FELE1BQU0sQ0FBQ0UsQ0FEUCxFQUNVRixNQUFNLENBQUNILEtBRGpCLEVBQ3dCRyxNQUFNLENBQUNHLE1BRC9CLENBQVY7QUFFQW1CLElBQUFBLFFBQVE7QUFDUkMsSUFBQUEscUJBQXFCLENBQUNILE9BQUQsQ0FBckI7QUFDSDs7QUFHREksRUFBQUEsTUFBTSxDQUFDaEMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBU2lDLENBQVQsRUFBVztBQUMxQzFCLElBQUFBLElBQUksQ0FBQzBCLENBQUMsQ0FBQ0MsT0FBSCxDQUFKLEdBQWtCLElBQWxCO0FBQ0gsR0FGRDtBQUlBRixFQUFBQSxNQUFNLENBQUNoQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTaUMsQ0FBVCxFQUFXO0FBQ3hDLFdBQU8xQixJQUFJLENBQUMwQixDQUFDLENBQUNDLE9BQUgsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsV0FBU0osUUFBVCxHQUFtQjtBQUNmLFFBQUl2QixJQUFJLENBQUMsRUFBRCxDQUFSLEVBQWE7QUFDVEMsTUFBQUEsTUFBTSxDQUFDRSxDQUFQLElBQVlGLE1BQU0sQ0FBQ00sS0FBbkI7QUFDSCxLQUZELE1BRU8sSUFBSVAsSUFBSSxDQUFDLEVBQUQsQ0FBUixFQUFjO0FBQ2pCQyxNQUFBQSxNQUFNLENBQUNDLENBQVAsSUFBWUQsTUFBTSxDQUFDTSxLQUFuQjtBQUNILEtBRk0sTUFFQSxJQUFJUCxJQUFJLENBQUMsRUFBRCxDQUFSLEVBQWM7QUFDakJDLE1BQUFBLE1BQU0sQ0FBQ0UsQ0FBUCxJQUFZRixNQUFNLENBQUNNLEtBQW5CO0FBQ0gsS0FGTSxNQUVBLElBQUlQLElBQUksQ0FBQyxFQUFELENBQVIsRUFBYztBQUNqQkMsTUFBQUEsTUFBTSxDQUFDQyxDQUFQLElBQVlELE1BQU0sQ0FBQ00sS0FBbkI7QUFDSDtBQUNKOztBQUVEYyxFQUFBQSxPQUFPO0FBQ1YsQ0E1REQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2hhclBob3RvIGZyb20gJy4vYXNzZXRzL2dvbGJlei5wbmcnXG4vLyBpbXBvcnQgYmFja2dyb3VuZFBob3RvIGZyb20gJy4vYXNzZXRzL2JhY2tncm91bmQucG5nJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWd0aCA9IDYwMDtcblxuICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgIGNvbnN0IHBsYXllciA9IHtcbiAgICAgICAgeDogMjAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICAgIHdpZHRoOiAzNCxcbiAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgZng6IDAsXG4gICAgICAgIGZ5OiAwLFxuICAgICAgICBzcGVlZDogOSxcbiAgICAgICAgbW92aW5nOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckNoYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJylcbiAgICAvLyBwbGF5ZXJDaGFyLnNyYyA9IGNoYXJQaG90b1xuICAgIC8vIGNvbnN0IGJhY2tncm91bmQ9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGJhY2tncm91bmQuc3JjID0gYmFja2dyb3VuZFBob3RvXG4gXG5cbiAgICBmdW5jdGlvbiBkcmF3UGxheWVyKGltZ2ZpbGUsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCl7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nZmlsZSwgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCl7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICBkcmF3UGxheWVyKHBsYXllckNoYXIsIHBsYXllci53aWR0aCAqIHBsYXllci5meCwgcGxheWVyLmhlaWdodCAqIHBsYXllci5meSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0LCBcbiAgICAgICAgcGxheWVyLngsIHBsYXllci55LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQpO1xuICAgICAgICBtb3ZlQ2hhcigpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuXG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTtcbiAgICB9KVxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBkZWxldGUga2V5c1tlLmtleUNvZGVdO1xuICAgIH0pXG4gIFxuICAgIGZ1bmN0aW9uIG1vdmVDaGFyKCl7XG4gICAgICAgIGlmIChrZXlzWzM4XSl7XG4gICAgICAgICAgICBwbGF5ZXIueSAtPSBwbGF5ZXIuc3BlZWRcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzWzM3XSApe1xuICAgICAgICAgICAgcGxheWVyLnggLT0gcGxheWVyLnNwZWVkXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1s0MF0gKXtcbiAgICAgICAgICAgIHBsYXllci55ICs9IHBsYXllci5zcGVlZFxuICAgICAgICB9IGVsc2UgaWYgKGtleXNbMzldICl7XG4gICAgICAgICAgICBwbGF5ZXIueCArPSBwbGF5ZXIuc3BlZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbn0pIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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