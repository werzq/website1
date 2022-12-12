window.onload = () => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("thisIsAVeryLongLink")) {
        try {
            const step1 = atob(urlParams.get('thisIsAVeryLongLink'));
            let step2 = [];
            for (let i = 0; i < step1.length; i += 4) {
                step2.push(step1.split("")[i]);
            }
            let h = atob(step2.join(""));
            if (!h.startsWith("http")) {
                h = "https://" + h;
            }
            window.location.href = h;
        } catch {
            document.getElementById("title").innerText = "This link is invalid!";
        }
    } else {
        document.getElementById("title").innerText = "This link is invalid!";
    }
}