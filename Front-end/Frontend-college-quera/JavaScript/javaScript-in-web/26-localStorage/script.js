const localStorageKey = "greeting";
const localStorageValue = "سلام دنیا!";

//get btn and remove buttons
const btn = document.getElementById("btn");
const remove = document.getElementById("remove");

//add event on click on btn button
btn.addEventListener("click", addStorage);

//add event on click on remove button
remove.addEventListener("click", clearStorage);

//functuin that add data to localStorage
function addStorage() {
  localStorage.setItem(localStorageKey, localStorageValue);
}

//function that clear localStorage
function clearStorage() {
  localStorage.removeItem(localStorageKey);
}

//set an interval
setInterval(addp, 1000);

//check if there is data in storage or not
function addp() {
  let el = localStorage.getItem(localStorageKey);
  if (el == localStorageValue) {
    let paragaph = document.getElementById("result");
    paragaph.innerHTML = localStorageValue;
  } else {
    let paragaph = document.getElementById("result");
    paragaph.innerHTML = "";
  }
}

///another way

// const showBtn = document.querySelector('#btn')
// const removeBtn = document.querySelector('#remove')
// const resultP = document.querySelector('#result')

// const localStorageKey = 'greeting';
// const localStorageValue = 'سلام دنیا!';

// showBtn.addEventListener('click',()=>{
//   localStorage.setItem('greeting', 'سلام دنیا!')
// })

// removeBtn.addEventListener('click',()=>{
//   localStorage.removeItem('greeting')
// })

// setInterval(()=>{
//   const greeting = localStorage.getItem('greeting')
//   resultP.innerText = greeting ? greeting : "";
// },1000)
