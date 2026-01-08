const PIX="59169871884";
const WHATS="https://wa.me/5511955559726?text=";

function toggleTheme(){
  document.body.classList.toggle("light");
  const icon=document.getElementById("themeIcon");
  icon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
}

function copyPix(){
  navigator.clipboard.writeText(PIX);
  alert("Pix copiado, safado 😈");
}

function pay(prod){
  window.location.href = WHATS + encodeURIComponent(
    "Oi Ana, já fiz o pagamento do "+prod+". Segue o comprovante."
  );
}
