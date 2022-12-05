/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-wrostifire/default.js":
/*!*************************************************!*\
  !*** ./node_modules/html-wrostifire/default.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MakeWorst {
    constructor(component)
    {
        this.component = component;
        this.canvas = this.createCanvas();
        this.radius = Math.floor(this.canvas.height/10);
        this.ctx = this.canvas.getContext("2d");

        this.coordinates = {
            posX : 50*Math.random() + this.radius,
            posY : 30* Math.random() + this.radius,
        };
        this.velocity = {
            x: Math.random() + 0.95,
            y: Math.random() - 0.75
        };
        this.animate = () => {
            this.updateCanvasAttribute(this.canvas);
            requestAnimationFrame(this.animate);
            this.update();
        }

    }
    updateCanvasAttribute(){

        var cWidth = window.getComputedStyle(this.canvas,null).getPropertyValue('width');
        var cHeight = window.getComputedStyle(this.canvas,null).getPropertyValue('height');
        

        this.canvas.setAttribute("width",`${cWidth}`)
        this.canvas.setAttribute("height",`${cHeight}`)
    
    }

    createCanvas(){
           
           this.component.style.position = "relative";
        
            var cWidth = window.getComputedStyle(this.component,null).getPropertyValue('width');
            var cHeight = window.getComputedStyle(this.component,null).getPropertyValue('height');
           
            var canvas = document.createElement('canvas');

            canvas.style.position = "absolute";
            canvas.style.top = "0%";
            canvas.style.left = "0%";

            var attributes = {
                height:cHeight,
                width:cWidth
            }
        
            Object.keys(attributes).forEach((attribute)=>{
                canvas.setAttribute(`${attribute}`,attributes[attribute]);
            })
        
            this.component.append(canvas)
            
            return canvas;
      
    }


    draw(){

        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.coordinates.posX,this.coordinates.posY,this.radius,0,2*Math.PI,true);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
       
         this.draw();
         this.coordinates.posX += this.velocity.x;
         this.coordinates.posY += this.velocity.y;
         if(this.coordinates.posX <= this.radius || this.coordinates.posX >= this.canvas.width - this.radius)
         {
             this.velocity.x = - this.velocity.x;
         }
         if(this.coordinates.posY <= this.radius || this.coordinates.posY >= this.canvas.height - this.radius)
         {
             this.velocity.y = - this.velocity.y;
         }
             
    }


   
    

}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakeWorst);

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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_wrostifire_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-wrostifire/default */ "./node_modules/html-wrostifire/default.js");
// import MakeWorst from 'html-wrostifire'


var cover = document.getElementById("coverMe");
var pCover = document.getElementById("testPTag");


var element = new _node_modules_html_wrostifire_default__WEBPACK_IMPORTED_MODULE_0__["default"](cover);
var pElement =new  _node_modules_html_wrostifire_default__WEBPACK_IMPORTED_MODULE_0__["default"](pCover);

element.animate();
pElement.animate();





// function createCoverMe(){
//     var cWidth = window.getComputedStyle(cover,null).getPropertyValue('width');
//     var cHeight = window.getComputedStyle(cover,null).getPropertyValue('height');

//     var canvas = document.createElement('canvas');
//     var attributes = {height:cHeight,width:cWidth,postion:"absolute"}

//     Object.keys(attributes).forEach((attribute)=>{
//         canvas.setAttribute(`${attribute}`,attributes[attribute]);
//     })

//     cover.append(canvas)
//     var demo = new MakeWorst(canvas);
//     demo.animate();

// }

// createCoverMe();


// var c = container.getContext("2d");

// (function(){

//     var cWidth = window.getComputedStyle(container,null).getPropertyValue('width');
//     var cHeight = window.getComputedStyle(container,null).getPropertyValue('height');

//     container.setAttribute("width",`${cWidth}`)
//     container.setAttribute("height",`${cHeight}`)

// })();

// window.onresize = () => {
//     var cWidth = window.getComputedStyle(container,null).getPropertyValue('width');
//     var cHeight = window.getComputedStyle(container,null).getPropertyValue('height');

//     container.setAttribute("width",`${cWidth}`)
//     container.setAttribute("height",`${cHeight}`)
// }


// function crateElement(){
//     var r = Math.floor(container.width/20)
//     c.beginPath();
//     c.fillStyle = "black";
//     c.arc(50,80,r,0,2*Math.PI,true);
//     c.fill();
//     c.closePath();
// }


    




// function animate(){
//     crateElement();
//     requestAnimationFrame(animate);
   
// }

// animate();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map