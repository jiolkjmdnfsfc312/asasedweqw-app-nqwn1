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
var gameUrl = 'https://html5.gamedistribution.com/951d399995cc4ea5a528c9b7e873066b/?gd_sdk_referrer_url=https://gamedistribution.com/games/ludo-hero';
document
    .getElementById('FunGames')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();