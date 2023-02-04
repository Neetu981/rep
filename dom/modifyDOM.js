var itemlist=document.querySelector('#items')

// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemlist.parentNode.parentNode)

// var itemlist=document.querySelector('#items')

// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemlist.parentElement.parentElement)

// console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor='yellow'

// console.log(itemlist.firstChild)

// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent='hello'

// console.log(itemlist.lastChild)

// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent='hello'

// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)
 
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)

// itemlist.previousElementSibling.style.color='green'

var newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','hello div')

var newDivText=document.createTextNode('hello world')
console.log(newDiv)


newDiv.appendChild(newDivText)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1)

// newDiv.style.fontSize='30px'

var container1=document.querySelector('ul')
var h2=document.querySelector('li')
container1.insertBefore(newDiv,h2)
