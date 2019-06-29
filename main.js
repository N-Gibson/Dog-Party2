let nameValue = document.querySelector('.name__value');
let nameInput = document.querySelector('.name__input');
let nameButton = document.querySelector('.name__input__button');
// let main = document.querySelector('.main');
// let contentButton = document.querySelector('.card__button');
// let paragraphContent = document.querySelector();

let buttonHandle = () => {
  updateName()
  clearInput()
}

let updateName = () => {
  nameValue.innerHTML = nameInput.value;
}

let clearInput = () => {
  nameInput.value = '';
}

// let contentToggle = () => {
//   if(event.target.closest('.card__button')) {
    
//   }
// }

// main.addEventListener('click', contentToggle);
nameButton.addEventListener('click', buttonHandle);