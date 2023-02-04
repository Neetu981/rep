// console.dir(document)
// console.log(document.URL)
// console.log(document.title)
// document.title="hey"
// console.log(document.body)
// console.log(document.forms)

// console.log(document.getElementById('header-title'))
// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle)
//headerTitle.textContent='Hello'//same as headerTitle.innerText='hey'=>pays attention to the styling

var header=document.getElementById('main-header')
header.style.borderBottom ='solid 3px black'

var items=document.getElementsByClassName('list-group-item')
console.log(items)
// console.log(items[1])
// items[1].textContent='hello'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold'
    items[i].style.color='blue'
}

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='#f4f4f4'
// }

// console.log(document.getElementsByTagName('li'))

// var input=document.querySelector('input')
// input.value='Hello'

// var submit=document.querySelector('input[type="submit"]')
// submit.value="SEND"

// var item=document.querySelector('.list-group-item')
// item.style.color='red'

// var lastitem=document.querySelector('.list-group-item:last-child')
// lastitem.style.color='red'


// var nthitem=document.querySelector('.list-group-item:nth-child(2)')
// nthitem.style.color='blue'

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='Hello'

// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4'
// }
// var even=document.querySelectorAll('li:nth-child(even)')
// for(var i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor='#ccc'
// }
