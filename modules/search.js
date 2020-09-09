function search(list , input){
  let lists = Array.from(list.children)
// grab current list item .
  console.log(list)
// grab inputed text
  let in_take = input.value
// set input value to empty string
  input.value =""
// loop through items passing item text content  through a condition 
  for(let i = 0 ; i<lists.length ;i++ ){
    let text = lists[i].textContent
    console.log(typeof text)
// if item text content matches input value display that item at the top of the list 
    if(text.indexOf(in_take) != -1){
      list.insertBefore(lists[i],lists[0])
    } 
  }
}

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
export {search , Find} 