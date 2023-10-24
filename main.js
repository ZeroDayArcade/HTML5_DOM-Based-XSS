/*  Always sanatize user input values before rendering them to the DOM.
    This example intentially does not do this to help you learn about
    how XSS and JavaScript injection works. Fixes for preventing 
    injection are commented out below.
*/

var queryString = window.location.search;
var searchQuery = new URLSearchParams(queryString).get('search');

/*  Potential Fix 1: Import a DOM Sanitizer Library like DOMPurify
    See https://github.com/cure53/DOMPurify
    Use dist/purify.js or dist/purify.min.js
*/
// searchQuery = DOMPurify.sanitize(searchQuery, { USE_PROFILES: { html: false } });

/*  Potential Fix 2: Use the browser's built-in HTML escape functionality
    Example from: https://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
*/
// function HtmlEncode(s)
// {
//   var el = document.createElement("div");
//   el.innerText = el.textContent = s;
//   s = el.innerHTML;
//   return s;
// }
// searchQuery = HtmlEncode(searchQuery);

if (searchQuery) {
    document.getElementById('search_string')
        .innerHTML = 'Search results for "' + searchQuery + '"';
    document.getElementById('search_text').value = searchQuery;
    document.getElementById("search_results").classList.remove("hide");
    document.getElementById("game_preview").classList.add("hide");
}

function profileAction(actionNum) {
    switch (Number(actionNum)) {
        case 0: linkSocialMedia(); break;
        case 1: deleteAccount(); break;
        case 2: changePassword(); break;
        case 3: logout(); break;
        default: alert("Error");
    }
}

function logout() { 
    alert("Logging out..."); 
}

function deleteAccount() { 
    alert("Deleting Account..."); 
}

function changePassword() { 
    alert("Changing password..."); 
}

function linkSocialMedia() { 
    alert("Linking Social Media..."); 
}

function playGame() {
    window.location = "/";
}

function sendCoins() {
    var sendToUser = document.getElementById('send_to_user').value;
    var numCoins = document.getElementById('num_coins').value;
    alert("Sending " + numCoins + " coins to " + sendToUser);
}
