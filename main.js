const main = document.querySelector('main')
var joke1 = 'What kind of tea is hard to swallow? Reality.'
var joke2 = 'Why do beets always win? They are un-beet-able.'
var joke3 = 'How do celebrities stay cool? They have many fans.'

const li = document.querySelector('.list1');
const li2 = document.querySelector('.list2');
const li3 = document.querySelector('.list3');

li.textContent = joke1
li2.textContent = joke2
li3.textContent = joke3

var body = document.body;
var paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";
body.appendChild(paragraph);