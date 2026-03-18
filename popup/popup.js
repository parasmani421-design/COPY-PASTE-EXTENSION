document.getElementById("enableBtn").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    chrome.tabs.sendMessage(tab.id, {
        action: "ENABLE"
    });
});
