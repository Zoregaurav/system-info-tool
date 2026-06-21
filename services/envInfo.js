
function getEnvironmentInfo() {
    return {
        username: process.env.USERNAME || "Not Available",
        userProfile: process.env.USERPROFILE || "Not Available",
        temp: process.env.TEMP || "Not Available"
    };
}


module.exports = getEnvironmentInfo;