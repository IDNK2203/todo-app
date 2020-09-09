class Add {
  constructor(input, list) {
    (this.input = input), (this.list = list);
  }
  add_me() {
    if (this.input.value != "") {
      //   store inpu t value
      let input_value = this.input.value;
      // set input value to empty string
      this.input.value = "";
      // --send item to local storage with unique key
      localStorage.setItem(`item_${input_value}`, input_value);
      // reconstruct the list dom
      this.populate();
    }
  }
  populate() {
    // clear list content
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
    // store localstorage keys
    let store_items = Object.keys(localStorage);
    // create a loop that like this
    // for every local storage key  construct a  todo dom item
    for (let i = 0; i < store_items.length; i++) {
      if (store_items[i].indexOf("item") != -1) {
        let text = localStorage.getItem(store_items[i]);
        let item = document.createElement("li");
        item.innerText = text;

        item.classList.add("list_item");
        let span = document.createElement("span");
        let deletebtn = document.createElement("i");
        // -- inserting local storage code here
        deletebtn.textContent = "x";
        this.list.appendChild(item);
        // append span to item and btn to span
        item.appendChild(span);
        span.appendChild(deletebtn);
        deletebtn.classList.add("delete", "fa-trash", "fas");
      }
    }
  }
}

export { Add };
