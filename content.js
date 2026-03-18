function enableCopy() {
    document.oncopy = null;
    document.onpaste = null;
    document.oncontextmenu = null;

    document.addEventListener('contextmenu', e => e.stopPropagation(), true);
    document.addEventListener('copy', e => e.stopPropagation(), true);
    document.addEventListener('paste', e => e.stopPropagation(), true);
    document.addEventListener('selectstart', e => e.stopPropagation(), true);

    document.documentElement.style.userSelect = "text";
}

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "ENABLE") {
        enableCopy();
    }
});
