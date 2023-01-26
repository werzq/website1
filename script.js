function zENcoDE(h, i) {
    let d = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\\/"\'`,.;:<>?|~!@#$%^&*(){}[]-_+=*';
    let e = '/';
    if (i === 'encrypt') {
        plaintext = h;
        let c = '';
        for (let b = 0; b < plaintext.length; b++)
            for (let a = 0; a < d.length; a++) d[a] === plaintext[b] && (c += (a + 1).toString() + e);
        return c.substring(0, c.length - e.length);
    }
    if (i === 'decrypt') {
        c = h;
        let f = c.split(e);
        let g = '';
        for (let b = 0; b < f.length; b++)
            for (let a = 0; a < d.length; a++) a + 1 == f[b] && (g += d[a]);
        return g;
    }
    console.log('mode error\nselect encrypt/decrypt');
}

window.onload = () => {
    const t = new URLSearchParams(location.search);
    if (t.has("b")) {
        const n = zENcoDE(t.get("b"), 'decrypt');
        document.getElementById("title").innerText = n
    }
    if (t.has("c")) {
        const n = zENcoDE(t.get("c"), 'decrypt');
        document.body.style.background = n
    }
    if (t.has("a")) try {
        var n = !1;
        if (!n) setInterval((function() {
            const e = t.get("a");
            h = zENcoDE(e, 'decrypt'), h.startsWith("http") || (h = "https://" + h, window.location.href = h), n = !0
        }), 2500)
    } catch { document.getElementById("title").innerText = "This link is invalid!" } else document.getElementById("title").innerText = "This link is invalid!"
};