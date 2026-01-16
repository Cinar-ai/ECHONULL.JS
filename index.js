const fs = require("fs");
const os = require("os");
const crypto = require("crypto");

const { distort } = require("./distort");
const { brokenTime } = require("./clock");
const { updateMemory , memoryState } = require("./memory");
const { xorEncode}  = require("./cipher");

const LOG_FILE = "echo_log";

function systemFingerprint() {
    const raw = 
        os.hostname() +
        os.platform() +
        os.uptime() +
        Math.random();
    return crypto
        .createHash("sha256")
        .update(raw)
        .digest("hex")
        .slice(0, 10);
}

function writeEcho() {
    const time = brokenTime();
    const instability = updateMemory();
    const memory = memoryState();
    const fingerprint = systemFingerprint();
    const mood = "neutral";

    const base = `Time: ${time}\nInstability: ${instability}\nMemory: ${memory}\nFingerprint: ${fingerprint}`;
    const distorted = distort(base , mood);
    const encoded = xorEncode(distorted, distorted); 

    fs.appendFileSync(LOG_FILE, encoded + "\n");
    console.log(distorted);
}
console.clear();
console.log("echo.null boot sequence started\n");
console.log("memory thread attached");
console.log("press Ctrl+C to detach observer\n");

const loop = setInterval(writeEcho, 3500);

process.on("SIGINT", () => {
    console.log("\nobserver detached.");
    console.log("memory left unresolved");
    clearInterval(loop);
    process.exit();
});
