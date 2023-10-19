const userInput = document.querySelector('#userInputFiled');
const userAddBtn = document.querySelector('#addToContainer');
const removeBtn = document.querySelector("#removeTask");
const showDataHere = document.querySelector("#showDataHere #userTypePasteHere");
// user function 
const TodoApp = () => {
    let userTypied = userInput.value;
    const userData = document.createElement('div');
    userData.innerHTML = `
    <div class="addd-text">
    <strong  id="userTypePasteHere">${userTypied}</strong>
    <div class="button">
    <i class="fa-solid fa-minus" id="removeTask"></i>
  </div>
   </div>
    `
    showDataHere.appendChild(userData);
    // remove text from the input field 
    userInput.value = "";
}
// userCLickl function
userAddBtn.addEventListener('click', () => {
    let p = document.createElement('p');
    if (userInput.value === "") {
        p.innerHTML = "Add something !"
        setTimeout(() => {
            p.remove();

        }, 1000);

        document.body.appendChild(p);
    }
    else {

        TodoApp();


    }
})
