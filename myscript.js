/*document.addEventListener('DOMContentLoaded', function() {
    
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
//itemList.children[1].style.backgroundColor='yellow';

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



var form=document.getElementById('addForm');
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
            if(confirm('Are you sure?')){
            itemList.removeChild(li);
            }
        }
    }
});
*/

//document.addEventListener('DOMContentLoaded', function() {
/*
        var itemList = document.getElementById('items');
        var lastElement = document.querySelector('.list-group-item:last-child');
    
        if (itemList && lastElement) {
            // Check if 'items' and 'lastElement' exist before setting textContent
            lastElement.textContent = 'Hello 4';
        } else {
            console.log('Element not found in the DOM.');
        }
    
    var header = document.querySelector('#main-header');
    header.style.borderBottom = '4px solid #ccc';

    var input = document.querySelector('input');
    input.value = 'Hello world';

    var submit = document.querySelector('input[type="submit"]');
    submit.value = 'SEND';

    var item = document.querySelector('.list-group-item');
    item.style.color = 'red';

    var lastItem = document.querySelector('.list-group-item:last-child');
    lastItem.style.color = 'blue';

    var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    secondItem.style.color = 'coral';

    var titles = document.querySelectorAll('.title');
    console.log(titles);

    titles[0].textContent = 'hello';

    var odd = document.querySelectorAll('li:nth-child(odd)');
    var even = document.querySelectorAll('li:nth-child(even)');

    for (var i = 0; i < odd.length; i++) {
        odd[i].style.backgroundColor = '#f4f4f4';
        even[i].style.backgroundColor = '#ccc';
    }

    var itemList = document.getElementById('items');
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = '#f4f4f4';
    console.log(itemList.parentNode.parentNode.parentNode);

    console.log(itemList.parentNode);
    itemList.parentElement.style.backgroundColor = '#f4f4f4';
    console.log(itemList.parentElement.parentElement.parentElement);

    console.log(itemList.childNodes);

    console.log(itemList.children);
    console.log(itemList.children[1]);
     itemList.children[1].style.backgroundColor = 'yellow';

    console.log(itemList.firstChild);
    console.log(itemList.firstElementChild);

    console.log(itemList.lastChild);
    console.log(itemList.lastElementChild);
    itemList.lastElementChild.textContent = 'Hello 4';

    console.log(itemList.nextSibling);

    console.log(itemList.previousSibling);

    console.log(itemList.previousElementSibling);
    itemList.previousElementSibling.style.color = 'green';

    var newDiv = document.createElement('div');
    newDiv.className = 'hello';
    newDiv.id = 'hello1';
    newDiv.setAttribute('title', 'hello div');

    var newDivText = document.createTextNode('hello world');
    newDiv.appendChild(newDivText);

    var container = document.querySelector('header.container');
    var h1 = document.querySelector('header h1');
    console.log(newDiv);

    container.insertBefore(newDiv, h1);

    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');

    form.addEventListener('submit', addItem);

    function addItem(e) {
        e.preventDefault();
        var newItem = document.getElementById('item').value;

        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('x'));
        li.appendChild(deleteBtn);

        itemList.appendChild(li);
    }

    function removeItem(e){
   
        if (e.target.classList.contains('delete')) {
          
            if (confirm('Are you sure?')) {
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }*/
    document.addEventListener('DOMContentLoaded', function() {
    var form =document.getElementById('addForm');
    var itemList=document.getElementById('items');
    var filter=document.getElementById('filter');
    
    form.addEventListener('submit',addItem);
    itemList.addEventListener('click',removeItem);
  filter.addEventListener('keyup',filterItems);  
    function addItem(e){
        e.preventDefault();

        var newItem=document.getElementById('item').value;
         var li=document.createElement('li');

         li.className='list-group-item';
         li.appendChild(document.createTextNode(newItem));


         //delete
         var deleteBtn=document.createElement('button');
         deleteBtn.className='btn btn-danger btn-sm float-right delete';
         deleteBtn.appendChild(document.createTextNode('x'));
         li.appendChild(deleteBtn);
         itemList.appendChild(li);

    }

    function removeItem(e){
       if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
         var li=e.target.parentElement;
       
         itemList.removeChild(li);
       }
    }
    }
   
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !==-1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
  
    });
}
});
localStorage.setItem('name','shagun');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name','shagun');
console.log(sessionStorage.getItem('name'));