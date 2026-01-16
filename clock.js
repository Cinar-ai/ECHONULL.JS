let offset = 0;

function brokenTime() { 
    offset += Math.random() * 2;

        const h = Math.floor(Math.random() * (24 + offset));
        const m = Math.floor(Math.random() * (60 + offset * 2));

        return `${h.toString().padStart(2, "0")}:${m    .toString().padStart(2, "0")}`;

        module.exports = { brokenTime };

}
