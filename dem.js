console.dir(document);
document.title=132;
var items =document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
items[1].textcontent='hello 2';
items[1].style.fontweight='bold';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundcolor='#f4f4f4';
}

var items =document.getElementsByTagName('list-group-items');
console.log(li);
console.log(li[1]);
li[1].textcontent='hello 2';
li[1].style.fontweight='bold';

for(var i=0;i<items.length;i++){
    li[i].style.backgroundcolor='#f4f4f4';
}