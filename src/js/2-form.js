const formData = {email: "", message: ""};

const form = document.querySelector(".feedback-form");

document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
        formData.email = savedData.email;
        formData.message = savedData.message;
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});
form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    if (name === "email") {
        formData.email = value.trim();
    } else if (name === "message") {
        formData.message = value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
 
form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
    }
    console.log(formData); 
    form.reset(); 
    localStorage.removeItem("feedback-form-state");
  
});