document.addEventListener('DOMContentLoaded', function() {
var header =document.querySelector('#main-header');
header.style.borderBottom = '4px solid #ccc';

var input=document.querySelector('input');
input.value='Hello world'

var submit =document.querySelector('input[type="submit"]');
submit.value="SEND"

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector
('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem =document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

var titles=document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent='hello';

var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)'); 

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}
});




