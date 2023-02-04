

// var remove=document.querySelector('.list-group-item:nth-child(3)')
// remove.style.display='none'

var nthitem=document.querySelector('.list-group-item:nth-child(2)')
//nthitem.style.backgroundColor='green'
nthitem.style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4'
}