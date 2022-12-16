export { validURL, isNum, rgbToHex, hexToRGB };

//use - checks if url is in correct format
//info - wont tell if the given url exists
//usage - validURL('example.com')
//output - boolean (true/false)
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

//use - checks if given variable is a number
//info - doesnt care if string, float, integer, etc.
//usage - isNum(1) / isNum('1') / isNum(1.43) / isNum('1.43')
//output - boolean (true/false)
function isNum(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

//use - converts rgb to hex format
//info - a much cleaner approach to conversion
//usage - >>>rgbToHex(255, 192, 203); >#ffc0cb
//output - hex value
function rgbToHex(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}
//info - helper for rgbToHex()
function toHex(t) { var n = t.toString(16); return 1 == n.length ? "0" + n : n }

//use - converts hex to rgb format
//info - a much cleaner approach to conversion
//usage - >>>hexToRGB(255, 192, 203); >#ffc0cb
//output - hex value
const hexToRGB = hex => {
    let e = !1,
        n = hex.slice(hex.startsWith("#") ? 1 : 0);
    return 3 === n.length ? n = [...n].map((hex => hex + hex)).join("") : 8 === n.length && (e = !0),
        n = parseInt(n, 16),
        "rgb" + (e ? "a" : "") + "(" + (n >>> (e ? 24 : 16)) +
        ", " + ((n & (e ? 16711680 : 65280)) >>> (e ? 16 : 8)) +
        ", " + ((n & (e ? 65280 : 255)) >>> (e ? 8 : 0)) +
        (e ? ", " + (255 & n) : "") +
        ")"
};