let currentURL = "";

function generate() {
    const url = document.getElementById("link").value;
    if (url == '') {
        alert("Enter a URL first")
    } else {
        var chkurl = validURL(url)
        if (chkurl === false) {
            alert("Enter a valid URL\n\n" + url + " is not a valid URL\n\n\nA URL should contain the following:\n-protocol\n-domain name\n-port and path")
        } else {
            const step1 = btoa(url);
            let step2 = [];
            for (const letter of step1.split("")) {
                for (let i = 0; i < 4; i++) {
                    step2.push(letter)
                }
            }
            const finalUrl = btoa(step2.join(""));
            currentURL = "https://thisisaverrrrrylonglinkextenderthatimadeforliterallynoreason.xwqx.cf/this/is/a/very/very/very/long-link/madeby/wq?thislinkissobigandlongandverycooolandnicetoo=" + encodeURIComponent(finalUrl);
            document.getElementById("generated").style.display = "block";
            document.getElementById("output").innerText = currentURL;
        }
    }
}

function copyLink() {
    navigator.clipboard.writeText(currentURL);
    alert("Copied to clipboard!");
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
console.log('Hello!\nDo sampleTest(url) for console generating')

function sampleTest(url) {
    var testurl = url
    console.log("testurl: " + testurl)

    if (testurl == '') {
        console.log("Enter a URL first")
    } else {
        var chkurl = validURL(testurl)
        console.log(chkurl)
        if (chkurl === false) {
            console.log("Enter a valid URL\n\n" + testurl + " is not a valid URL\n\n\nA URL should contain the following:\n-protocol\n-domain name\n-port and path")
        } else {
            const step1 = btoa(testurl);
            let step2 = [];
            for (const letter of step1.split("")) {
                for (let i = 0; i < 4; i++) {
                    step2.push(letter)
                }
            }
            const finalUrl = btoa(step2.join(""));
            currentURL = "https://thisisaverrrrrylonglinkextenderthatimadeforliterallynoreason.xwqx.cf/this/is/a/very/very/very/long-link/madeby/wq?thislinkissobigandlongandverycooolandnicetoo=" + encodeURIComponent(finalUrl);
            console.log("Link: " + currentURL)
            console.log("output: " + encodeURIComponent(finalUrl))
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", generate);
    document.getElementById("copy").addEventListener("click", copyLink);
});