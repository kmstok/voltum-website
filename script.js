document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Отключаем стандартную отправку формы

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!name || !phone) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const telegramBotToken = "7600241739:AAHInadBxwHGk-SOCOKdLNgU0d6kZh7y7qQ";
        const telegramChatID = "294598394";

        const message = `🔥 Новая заявка с сайта Voltum\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: telegramChatID, text: message }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Заявка успешно отправлена!");
                form.reset();
            } else {
                alert("Ошибка при отправке.");
            }
        })
        .catch(error => {
            alert("Ошибка сети.");
            console.error("Ошибка:", error);
        });
    });
});
