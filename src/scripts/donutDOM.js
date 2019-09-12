import donutHMTL from "./donutHTML.js";

// // Function that adds donut HTML components to the DOM
// const addDonutToDOM = (donutObj) => {
//     document.querySelectorAll(".donut-container")[1].innerHTML += makeDonutHTMLComponent(donutObj)
// /*
//     Responsible for putting our donuts on the DOM
// */

const donutDOMBuilder = donutObj => {
	document.querySelector("#donut-results").innerHTML += donutHMTL(donutObj);
};

export default donutDOMBuilder;
