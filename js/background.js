
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('activateDarkMode').addEventListener('click', injectCSS);
});

function injectCSS(){
    chrome.scripting.insertCSS({
        target: { tabId: tabs.id },
        files: ["dark-mode.css"]
    });
}
