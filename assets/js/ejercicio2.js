function calcularStickers() {
    const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;
    const total = sticker1 + sticker2 + sticker3;

    if (total <= 10) {
        document.getElementById("resultado").textContent = `Llevas ${total} stickers`;
    } else {
        document.getElementById("resultado").textContent = "Llevas demasiados stickers";
    }
}
