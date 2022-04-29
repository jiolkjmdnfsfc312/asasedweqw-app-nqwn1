function getParentUrl() {
    var url = (window.location !== window.parent.location)
        ? (document.referrer && document.referrer !== '')
            ? document.referrer
            : document.location.href
        : document.location.href;
    if (document.referrer.indexOf('https://jiolkjmdnfsfc312.github.io/asasedweqw-app-nqwn1/') !== -1) {
        url = 'https://play.gamemonetize.co/';
    }
    return url;
}
// Add the self-hosted game url as value of gameUrl.
var gameUrl = 'https://play.gamemonetize.co/682mfby38fh1c41ajtil6os2qt45c9q2/';
document
    .getElementById('FunGames')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();