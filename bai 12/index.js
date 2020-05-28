const items = ['Backpack', 'Miband watch', 'Ring'];
console.log(items);
const listItemUl = document.getElementById('item_list_ul');
let i;
function addItems () {
    for (i=0; i<items.length;i++){
        listItemUl.insertAdjacentHTML('beforeend',`<li><span>${items[i]}<button id="remove_button", onclick="remove('${i}')">Remove</button></span></li>`)
    }
}
function removeTest () {
    const test1= document.getElementById('test1')
    const test2= document.getElementById('test2')
    listItemUl.removeChild(test1);
    listItemUl.removeChild(test2);
}
const add_btn= document.getElementById('add_btn');
const itemInput=document.getElementById('item_input');

add_btn.addEventListener('click', ()=>{
    items.push(itemInput.value)
    addItems();
    removeTest();
})
const remove_button = document.getElementById('remove_button');
function remove(x){
        items.splice(items[x]);
}
remove_button.addEventListener('click',()=>{
    remove();
    addItems();
})

