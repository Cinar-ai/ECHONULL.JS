let instability = 0;

function updateMemory() {
    instability += Math.random() * 0.4;
    if (instability > 10) instability = 10;
    return instability.toFixed(2);

}

function memeoryState() {
    if (instability < 3) return "stable";
    if (instability < 6) return "drifting";
    if (instability < 8) return "fragmented";
    return "collapsed";

}
module.exports = { updateMemory, memoryState };
