const submitBtn = document.querySelector(".btn");
const email = document.querySelector('.email');




submitBtn.addEventListener("click", handleForm);



const handleForm = (e) => {
    e.preventDefault();
    validateEmail(email);


}
const validateEmail = (message) => {
    if (message.value === "") {
        message.classlist.remove("hidden")
    }
}