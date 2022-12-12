let currentURL = "";

function generate() {
    const url = document.getElementById("link").value;
    const step1 = btoa(url);
    let step2 = [];
    for (const letter of step1.split("")) {
        for (let i = 0; i < 4; i++) {
            step2.push(letter)
        }
    }
    const finalUrl = btoa(step2.join(""));
    currentURL = "https://very-very-very-very-very-very-very-very-very-long-link.make-my-link-longer.ml/this/link/is/really/quite/long/its-actually-quite-impressive/the-sheer-length-of-this-link/?thisIsAVeryLongLink=" + encodeURIComponent(finalUrl) + "";
    document.getElementById("generated").style.display = "block";
    document.getElementById("output").innerText = currentURL;
}

function copyLink() {
    navigator.clipboard.writeText(currentURL);
    alert("Copied to clipboard!");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", generate);
    document.getElementById("copy").addEventListener("click", copyLink);
});