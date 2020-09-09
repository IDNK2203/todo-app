function add(input, list) {
  console.log(input, list);
  if (input.value != "") {
    //   store input value
    let in_take = input.value;
    // set input value to empty string
    input.value = "";
    // create li, span , delete btn
    let item = document.createElement("li");
    let span = document.createElement("span");
    let deletebtn = document.createElement("i");
    // set the text content of li to intake and append it to list
    item.textContent = in_take;
    list.appendChild(item);
    // append span to item and btn to span
    item.appendChild(span);
    span.appendChild(deletebtn);
    // set text content of deletebtn to delete
    deletebtn.classList.add("delete", "fa-trash", "fas");
    input.focus();
  }
}

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
      // create li, span , delete btn
      let item = document.createElement("li");
      item.classList.add("list_item");
      let span = document.createElement("span");
      let deletebtn = document.createElement("i");
      // set the text content of li to intake and append it to list
      item.textContent = input_value;
      deletebtn.textContent = "x";
      this.list.appendChild(item);
      // append span to item and btn to span
      item.appendChild(span);
      span.appendChild(deletebtn);
      // set text content of deletebtn to delete
      deletebtn.classList.add("delete", "fa-trash", "fas");
    }
  }
}

export { add, Add };
