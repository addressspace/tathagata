// Function to get OS information
function getOS() {
    let userAgent = window.navigator.userAgent;
    let platform = window.navigator.platform;
    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

// Function to get browser information
function getBrowser() {
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
        browserName = "Samsung Internet";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
        browserName = "Microsoft Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    } else {
        browserName = "Unknown";
    }

    return browserName;
}




function getMachineId() {

    let machineId = localStorage.getItem('MachineId');

    if (!machineId) {
        machineId = crypto.randomUUID();
        localStorage.setItem('MachineId', machineId);
    }

    return machineId;


}






// Function to get the current time
function getCurrentTime() {
    return new Date().toISOString();
}

// Function to get the current URL
function getCurrentURL() {
    return window.location.href;
}

// Function to send client information to the server
function sendClientInfo() {
    // Collect client information
    let clientInfo = {
        os: navigator.userAgent + '/uuid-' + "getMachineId()",
        browser: getBrowser(),
        time: getCurrentTime(),
        url: getCurrentURL()
    };


    // Send client information to PHP API
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://spanx.pythonanywhere.com/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(clientInfo));
}

// Add event listener for page load
window.onload = sendClientInfo;




//console.log(navigator.userAgent + '/uuid-' + getMachineId())
