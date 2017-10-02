browser.contextMenus.create({
    id: "open-link-in-new-foreground-tab",
    title: "Open Link in New Foreground Tab",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-link-in-new-foreground-tab") {
        const url = info.linkUrl;
        browser.tabs.create({url});
    }
});