// --object imported content
// import * as add_m from "./modules/add.js";
// import * as search_m from "./modules/search.js";

// --basic import statements
import { add as _a, Add } from "./modules/add.js";
import { search as _s, Find } from "./modules/search.js";

// DOM

// appendChild provides a reference to the selected node.
// so it can be used to moved node up and down the DOM
// cloneNode duplicates a node
// the removeChild is used to remove a child node from is parent
// When you want to remove a node based only on a reference to itself,
//  which is fairly common, you can use ChildNode.remove():

// MANIPULATING STYLES

let input = document.querySelector("input[type='text']");
let addbtn = document.querySelector(".add_span");
let list = document.querySelector(".list");
let searchbtn = document.querySelector(".search_span");
let deletebtns = document.querySelectorAll(".delete");
console.log(input, addbtn, list, searchbtn, deletebtns);

// add events to items parent container
// remove item that register the origin of fired events
// stop event propagation

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
    e.stopPropagation();
  }
  console.log(e.target);
});

// --imported function called as an event handler
// addbtn.addEventListener("click" , add(input , list))
// searchbtn.addEventListener("click" , search( list , input))

// --imported function called inside event handler function scope
searchbtn.addEventListener("click", () => {
  // _s( list , input)
  let find_1 = new Find(list, input);
  find_1.find_me();
});

addbtn.addEventListener("click", () => {
  // _a( input , list )
  let add_1 = new Add(input, list);
  add_1.add_me();
});

// --object imported content
// addbtn.addEventListener("click" , add_m.add(input , list))
// searchbtn.addEventListener("click" , search_m.search( list , input))

// --dynamically imported functions
// searchbtn.addEventListener("click" , ()=>{
// 	import("./modules/search.js").then((module)=>{
// 		module.search( list , input)
// 	})
// })

// addbtn.addEventListener("click", ()=>{
// 	import("./modules/add.js").then((module)=>{
// 		module.add(input , list)
// 	})
// })

// I want to code split in modules --|>
// create sperate modules for add ,reset  and search function export them
// import functionality from modules into main.js
