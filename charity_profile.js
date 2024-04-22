function showForm() {
    var form = document.getElementById("volunteerForm");
    form.style.display = "block";
}
function showDescription(charity, link) {
    var description;
    if (charity === 'ASAN') {
        description = "Provides advocacy, support, and resources for individuals on the autism spectrum.";
    } else if (charity === 'Current') {
        description = "Focuses on freshwater debris removal and water quality preservation.";
    } else if (charity === 'FeedingAmerica') {
        description = "A nationwide network of food banks addressing food insecurity.";
    } else {
        description = "No description available.";
    }
    
    var descriptionElement = document.createElement("div");
    descriptionElement.setAttribute("class", "description");
    descriptionElement.textContent = description;
    link.parentNode.insertBefore(descriptionElement, link.nextSibling);
}

function hideDescription(link) {
    var descriptionElement = link.nextSibling;
    if (descriptionElement && descriptionElement.classList.contains("description")) {
        descriptionElement.remove();
    }
}
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    var playerElement = document.getElementById('player');
    var videoId = playerElement.getAttribute('data-video-id');
    var player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoId, 
    });
}


