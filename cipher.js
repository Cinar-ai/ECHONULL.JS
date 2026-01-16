function xorEncode(text ) {
    const key = 13;
    return text 
        split("")
        .map (c => 
    String.fromCharCode(c.charCodeAt (0) ^ key))
    .join("");
}

module.exports = { xorEncode };
