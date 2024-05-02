// function named getFullYear that will return the current year
export function getFullYear() {
    let date = new Date();
    return date.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) return "Atlas School"
    return "Atlas School main dashboard"
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD"
}