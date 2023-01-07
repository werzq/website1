window.onload = () => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("a")) {
        const txtp = cleAn(atob(urlParams.get('a')));
        document.getElementById("title").innerText = txtp


    }
    if (urlParams.has("link")) {
        const colp = cleAn(atob(urlParams.get('link')));
        document.body.style.background = colp
    }
    if (urlParams.has("sharing")) {
        try {

            var counted = false;

            if (!counted) {
                var x = setInterval(function() {
                    const step1 = atob(urlParams.get('sharing'));
                    h = cleAan(step1)
                    if (!h.startsWith("http")) {
                        h = "https://" + h;
                        window.location.href = h;
                    }
                    counted = true;
                }, 5000);
            }

        } catch {
            document.getElementById("title").innerText = "This link is invalid!";
        }
    } else {
        document.getElementById("title").innerText = "This link is invalid!";
    }
}

function cleAn(value) {
    let step2 = [];
    for (let i = 0; i < value.length; i += 4) {
        step2.push(value.split("")[i]);
    }
    let heb = atob(step2.join(""));
    return heb
}

function cleAan(value) {



    let step2 = [];
    for (let i = 0; i < value.length; i += 4) {
        step2.push(value.split("")[i]);
    }
    let heb = atob(step2.join(""));
    return heb
}