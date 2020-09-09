import { Add } from "./add.js";

let input = document.querySelector("input[type='text']");
let list = document.querySelector(".list");

function delete_item (e){
  if (e.target.classList.contains("delete")) {
// get the click on todo item text content
  let text = [].reduce.call(e.target.parentNode.parentNode.childNodes, function(a, b) { 
    return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
// get all local keys
  let store_items = Object.keys(localStorage);
// check all local storage items if they match the click on todo item text content
  for (let i = 0; i < store_items.length; i++) {
    if (localStorage.getItem(store_items[i]) == text) {
// if match  is found delete todo item.
      localStorage.removeItem(store_items[i]);
    }
  }
  let add_item = new Add(input, list);
  add_item.populate();
  e.stopPropagation();
  }
}



export{delete_item}