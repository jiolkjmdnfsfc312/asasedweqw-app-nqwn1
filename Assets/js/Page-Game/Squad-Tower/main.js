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
var gameUrl = 'https://html5.gamedistribution.com/3785752826134e79888aa3f724e50108/?gd_sdk_referrer_url=https://gamedistribution.com/games/squad-tower';
document
    .getElementById('FunGames')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();


// Sidebar Fullscreen
    var container = document.querySelector('.container');
    var main = document.querySelector('.main');
    
    function toggleSidebar(){
        isShowingSidebar() ? hideSidebar() : showSidebar();
    }
    
    function showSidebar(){
        container.classList.add('show-sidebar');
    }
    
    function hideSidebar(){
        container.classList.remove('show-sidebar');
    }
    
    function isShowingSidebar(){
        return container.classList.contains('show-sidebar');
    }
    
    document.querySelector('.hamburger').addEventListener('click', toggleSidebar, false);
    
    container.addEventListener('click', function(e){
        if(isShowingSidebar() && main.contains(e.target)){
            e.preventDefault();
            hideSidebar();
        }
    }, true);
    
    // FullScreen
    function goFullscreen(id) {
            // Get the element that we want to take into fullscreen mode
            var element = document.getElementById(id);
    
            // These function will not exist in the browsers that don't support fullscreen mode yet,
            // so we'll have to check to see if they're available before calling them.
    
            if (element.mozRequestFullScreen) {
                // This is how to go into fullscren mode in Firefox
                // Note the "moz" prefix, which is short for Mozilla.
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                // This is how to go into fullscreen mode in Chrome and Safari
                // Both of those browsers are based on the Webkit project, hence the same prefix.
                element.webkitRequestFullScreen();
            }
            // Hooray, now we're in fullscreen mode!
        }