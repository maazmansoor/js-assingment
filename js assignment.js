
//________________________________ANS 1________________________________________________________

function AddNumberClosure(a) {
  return function (x) {
    return x + a;
  }
}

// ______________________________ANS 2____________________________________________________________

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}
// _________________________________ANS 3____________________________________________________________

function addParagraph(text) {
  
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}
addParagraph('This is a new paragraph!');


// __________________________________ANS 4_____________________________________________________________

function addListItem(text) {
  
  const newListItem = document.createElement('li');

  
  newListItem.textContent = text;
  const unorderedList = document.querySelector('ul');

  unorderedList.appendChild(newListItem);
}
addListItem('This is a new list item!');


// ______________________________ANS 5___________________________________________________

function changeBackgroundColor(element, color) {
 
  element.style.backgroundColor = color;
}
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');


//______________________________________ANS 6_______________________________________________________

function saveToLocalStorage(key, obj) {
  const objStr = JSON.stringify(obj);
  localStorage.setItem(key, objStr);
}
const myobj = { foo: 'bar', baz: [1, 2, 3] };
saveToLocalStorage('myObjKey', myobj);


//_______________________________________ANS 7_____________________________________________

function getFromLocalStorage(key) {
  const objStr = localStorage.getItem(key);
  const obj = JSON.parse(objStr);

  return obj;
}

const mybj = getFromLocalStorage('myObjKey');

console.log(myObj.foo); 
console.log(myObj.baz); 


//______________________________________ANS 8_________________________________________________

function saveObjToLocalStorage(obj) {
  for (const [key, value] of Object.entries(obj)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const newObj = {};
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  }

  return newObj;

}
const myObj = { foo: 'bar', baz: [1, 2, 3] };

const savedObj = saveObjToLocalStorage(myObj);

console.log(savedObj.foo);
console.log(savedObj.baz); 