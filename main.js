// --import statements
import { Add } from "./modules/add.js";
import {  Find } from "./modules/search.js";
import {  delete_item} from "./modules/delete.js";
// MANIPULATING STYLES

let input = document.querySelector("input[type='text']");
let addbtn = document.querySelector(".add_span");
let list = document.querySelector(".list");
let searchbtn = document.querySelector(".search_span");
let deletebtns = document.querySelectorAll(".delete");
console.log(input, addbtn, list, searchbtn, deletebtns);

// --delete todo-item
list.addEventListener("click", (e)=>{
// you need to pass the event object as argument (e) to the internal function
  delete_item(e)
} );

// --populate screen on page load
window.addEventListener("load", () => {
  let add_item = new Add(input, list);
  add_item.populate();
});

// --search for todo item 
searchbtn.addEventListener("click", () => {
  let find_1 = new Find(list, input);
  find_1.find_me();
});

// add a todo item
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter" ){
    let add_item = new Add(input, list);
    add_item.add_me(); 
  }
});