function getParentUrl() {
    var url = (window.location !== window.parent.location)
        ? (document.referrer && document.referrer !== '')
            ? document.referrer
            : document.location.href
        : document.location.href;
    if (document.referrer.indexOf('https://jiolkjmdnfsfc312.github.io/asasedweqw-app-nqwn1/') !== -1) {
        url = 'https://gamedistribution.com/';
    }
    return url;
}
// Add the self-hosted game url as value of gameUrl.
var gameUrl = 'https://html5.gamedistribution.com/5ee4b0222a474e44880b6c6d9f96754d/?gd_sdk_referrer_url=https://gamedistribution.com/games/tiny-fishing';
document
    .getElementById('FunGames')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();