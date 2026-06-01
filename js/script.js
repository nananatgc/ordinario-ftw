const messages = [
    " “El secreto para salir adelante es empezar.” — Mark Twain ",
    " “Sé más fuerte que la más fuerte de tus excusas.” ",
    "“Lo único imposible es aquello que no intentas.” — Paulo Coelho",
    "“No cuentes los días, haz que los días cuenten.” — Muhammad Ali",
    "“Si la oportunidad no llama, construye una puerta.” — Milton Berle",
    "“El éxito es la suma de pequeños esfuerzos repetidos día tras día.” — Robert Collier"
 
];

const button = document.getElementById("motivacionbtn");
const message = document.getElementById("mensaje");

button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * messages.length);
    message.textContent = messages[random];
});