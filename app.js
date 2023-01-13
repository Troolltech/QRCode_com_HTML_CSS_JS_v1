let inputTitle = document.querySelector("#title");
let inputText = document.querySelector('#text');
let title = document.querySelector("h1");
let qrcode = document.querySelector("#image");
let butao = document.querySelector('button');

butao.addEventListener("click", () => {
    genQRCode();
});

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        genQRCode();
    }
});

qrcode.addEventListener('click', () => {
    if (!qrcode.src) return;

    const link = document.createElement('a')
    link.href = qrcode.src;
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
})

function genQRCode() {
    if (!inputText.value) return;
    title.innerText = inputTitle.value;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
    inputText.value = '';
    inputTitle.value = '';
}