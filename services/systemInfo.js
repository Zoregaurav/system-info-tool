const os = require("os");

function getSystemInfo() {

    const uptimeHours =
        Math.floor(os.uptime() / 3600);

    const uptimeMinutes =
        Math.floor(
            (os.uptime() % 3600) / 60
        );

    return {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        homeDirectory: os.homedir(),

        nodeVersion: process.version,
        pid: process.pid,
        cwd: process.cwd(),

        cpuCount: os.cpus().length,

        totalMemory:
            (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",

        freeMemory:
            (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",

        uptime:
            `${uptimeHours} Hours ${uptimeMinutes} Minutes`
    };
}

module.exports = getSystemInfo;