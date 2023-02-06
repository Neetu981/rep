var form= document.getElementById('addForm')
var itemlist= document.getElementById('items')

form.addEventListener('submit',addItem)
itemlist.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault()
    //get input value
    var newItem=document.getElementById('item').value 

    //create new li element
    var li=document.createElement('li')
    li.className='list-group-item'

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))

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