var form= document.getElementById('addForm')
var itemlist= document.getElementById('items')
var filter= document.getElementById('filter')

form.addEventListener('submit',addItem)
itemlist.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItem)
function addItem(e){
    e.preventDefault()
    //get input value
    var newItem=document.getElementById('item').value 
    var description=document.getElementById('description').value

    //create new li element
    var li=document.createElement('li')
    li.className='list-group-item'

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(' '+description))

    // create delete button
    var deletebtn=document.createElement('button')
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    //append text to button
    deletebtn.appendChild(document.createTextNode('X'))
    // append button to li
    li.appendChild(deletebtn)

    // append li to list
    itemlist.appendChild(li)

    var Editbtn=document.createElement('button')
    Editbtn.className = 'edit btn-success btn-sm float-right'
    //append text to button
    Editbtn.appendChild(document.createTextNode('Edit'))
    // append button to li
    li.appendChild(Editbtn)

    // append li to list
    itemlist.appendChild(li)
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}
function filterItem(e){
    var text=e.target.value.toLowerCase()
    var items=itemlist.getElementsByTagName('li')
    //converting html to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        var description=item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text)!=-1||description.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })

}