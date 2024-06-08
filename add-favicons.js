const PREFIX_ICON_URL = "https://icons.duckduckgo.com/ip3/";
const SUFFIX_ICON_URL = ".ico";

// Play around for customizations
const UPDATE_DELAY = 1000;
const ICON_SIZE = 32;
const ICON_UNIT = "em";

addFavicons();
setInterval(addFavicons, UPDATE_DELAY);

function addFavicons() {
    const linkElements = document.querySelectorAll("body a.url_wrapper");

    linkElements.forEach((link) => {
        const websiteUrl = link.href;
        const websiteDomain = getDomainFromUrl(websiteUrl);
        const fullIconUrl = `${PREFIX_ICON_URL}${websiteDomain}${SUFFIX_ICON_URL}`;
        const newLinkedFavicon = createElementFromString(
            `<a href="${websiteUrl}"><img height="${ICON_SIZE}${ICON_UNIT}" width="${ICON_SIZE}${ICON_UNIT}" src="${fullIconUrl}" alt="${websiteDomain} icon"></a>`
        );

        if (!link.parentNode.innerHTML.includes(newLinkedFavicon.innerHTML)) {
            link.parentNode.insertBefore(newLinkedFavicon, link);
        }
    });
}

function createElementFromString(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString.trim();
    return tempDiv.firstChild;
}

function getDomainFromUrl(url) {
    var parsedUrl = new URL(url);
    return parsedUrl.hostname;
}
