const body = document.body
const rbgValue = document.getElementById('rgbValue');
const red = document.getElementById('rangeRed')
const green = document.getElementById('rangeGreen')
const blue = document.getElementById('rangeBlue')

const changeColor = () => {
    let r = red.value;
    let g = green.value;
    let b = blue.value;
    let bkgdClr = `rgb(${r},${g},${b})`
    body.style.background = bkgdClr;
}

red.addEventListener('input', changeColor);
green.addEventListener('input', changeColor);
blue.addEventListener('input', changeColor)


changeColor();

function optSet() {
    var x = document.getElementById("customiseset");
    if (x.style.display === "none") {
        document.getElementById("genurl").innerText = ''
        x.style.display = "block";
        document.getElementById('dropdnbuton').innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    } else {
        x.style.display = "none";
        document.getElementById('dropdnbuton').innerHTML = '<i class="fa-solid fa-caret-right"></i>'
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function generateLink() {
    url = document.getElementById("mainurl").value;
    loadingtext = document.getElementById("loadingtxt").value;
    bakcolor = body.style.background;

    if (url == '') {
        alert("Enter a URL first")
    } else {
        var chkurl = validURL(url)
        if (chkurl === false) {
            alert("Enter a valid URL\n\n" + url + " is not a valid URL\n\n\nA URL should contain the following:\n-protocol\n-domain name\n-port and path")
        } else {
            var dezk = document.getElementById("customiseset");
            dezk.style.display = "none";
            document.getElementById('dropdnbuton').innerHTML = '<i class="fa-solid fa-caret-right"></i>'

            const step1 = btoa(url);
            let step2 = [];
            for (const letter of step1.split("")) {
                for (let i = 0; i < 4; i++) {
                    step2.push(letter)
                }
            }
            const finalUrl = btoa(step2.join(""));
            const urlpart = encodeURIComponent(finalUrl)
            if (loadingtext == '') {
                var ltxt = 'Redirecting...'
            } else {
                var ltxt = loadingtext
            }

            const step3 = btoa(ltxt);
            let step4 = [];
            for (const letter of step3.split("")) {
                for (let i = 0; i < 4; i++) {
                    step4.push(letter)
                }
            }
            const finalltxt = btoa(step4.join(""));
            const txtpart = encodeURIComponent(finalltxt)

            const step5 = btoa(bakcolor);
            let step6 = [];
            for (const letter of step5.split("")) {
                for (let i = 0; i < 4; i++) {
                    step6.push(letter)
                }
            }

            const finallcol = btoa(step6.join(""));
            const colorpart = encodeURIComponent(finallcol)

            currentURL = "https://thisisaverrrrrylonglinkextenderthatimadeforliterallynoreason.xwqx.cf/this/is/a/very/very/very/long-link/madeby/wq?sharing=" + urlpart + "&a=" + txtpart + "&link=" + colorpart;
            console.log(url + ltxt + bakcolor);
            document.getElementById("genurl").innerText = currentURL;
        }
    }

}