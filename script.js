document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = form.querySelector("input[type='text']").value;
        const phone = form.querySelector("input[type='tel']").value;

        if (name && phone) {
            alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}.`);
            form.reset();
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    });
});
