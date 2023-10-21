//document.addEventListener('DOMContentLoaded', function() {
/*var header =document.querySelector('#main-header');
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


var itemList =document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentNode);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstchild);
console.log(itemList.firstElementchild);

console.log(itemList.lastchild);
console.log(itemList.lastElementchild);
itemList.lastElementchild.textcontent="Hello 4";

console.log(itemList.nextsibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

var newDiv=document.createElement('div');

newDiv.className='hello';

newDiv.id='hello1';
newDiv.setAttribute('title','hello div');

var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv,h1)

*/

/*var form=document.getElementById('addForm');
var newItem = document.getElementById('items').value;


form.addEventListener('submit',addItem);
form.addEventListener('click',removeitem);

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById(item);
    var li=document.createElement('li');
    li.className='list-group-item';
    console.log(li);
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
   li.appendChild(deleteBtn); 
    itemList.appendChild(li);

}
function removeitem(e){
    if(e.target.classList.contains('delete'));
    console.log(1);
}
});

*/

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');

    form.addEventListener('submit', addItem);
    form.addEventListener('click', removeItem);

    function addItem(e) {
        e.preventDefault();
        var newItemValue = document.getElementById('item').value;

        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItemValue));

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('x'));
        li.appendChild(deleteBtn);

        itemList.appendChild(li);
    }

    function removeItem(e) {
        if (e.target.classList.contains('delete')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
});
