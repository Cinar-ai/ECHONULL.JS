const phrashes = [
    "observer lost reference",
    "memeory recursion unstable",
    "signal contradicts itself",
    "intent echoed incorrectly",
    "pattern almost recognized",
    "system hesitates ",
    "meaning leaend through silence"
];

function distort(text, mood) {
    const phrase =
        phrashes[Math.floor(Math.random() * phrashes.length)];

        const reserved = 
    text.split("").reserve().join("");
return `${reserved}\n-- ${phrase} [mood: ${mood}]`;
}

module.exports = { distort };
