
class Find {
  constructor (list , input){
    this.input = input , 
    this.list = list
  }
  find_me(){
// grab current list item 
    let  list_items = Array.from(this.list.children)
// grab inputed text
    let input_value = this.input.value
// set input value to empty string
    this.input.value = "" 
// loop through items passing item text content  through a condition 
    for (let i = 0 ; i < list_items.length ; i++){
      let text_item =  list_items[i].textContent
// if item text content matches input value display that item at the top of the list 
      if (text_item.indexOf(input_value) != -1){
        this.list.insertBefore(list_items[i] , list_items[0])
      }
    }
    console.log("finding you")
  }
}

console.log("heavy")
export { Find} 