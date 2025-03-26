const container = document.querySelector(".container");
const input = document.getElementById("url");
const button = document.querySelector(".btn");
const qrCodeImg = document.querySelector(".qrCodeImg");

button.addEventListener("click", () => {
  let urlValue = input.value;
  if (urlValue === "") {
    container.classList.remove("active");
    return;
  }
  button.innerHTML = "Gerando...";
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${urlValue}`;
  qrCodeImg.src = url;
  qrCodeImg.addEventListener("load", () => {
    button.innerHTML = "Gerar QR Code";
    container.classList.add("active");
  });
  qrCodeImg.addEventListener("error", () => {
    alert("Erro ao gerar QR Code. Verifique a URL inserida.");
    button.innerHTML = "Gerar QR Code";
    container.classList.remove("active");
  });

  document.querySelector(".qrCodeImg").style.opacity = "1";

});

input.addEventListener("keyup", () => {  
  container.classList.remove("active");
});
