var inPage;
var outPage
function urlChange(inPage) {
    if(inPage == "home") {
        outPage = "";
    } else if(inPage == "projects") {
        outPage = "/projects.html";
    } else if(inPage == "qs") {
        outPage = "/qs/";
    } else if(inPage == "music") {
        outPage = "/music.html";
    } else if(inPage == "website") {
        outPage = "/website.html";
    }
    document.getElementById("frame").src="https://quinn0823.github.io/" + outPage;
}