var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("art_history.jpg", "background.jpg", "BioFit_Logo1.png", "computer.jpg", "logo_black.png", "logo_transparent.png", "logo_white.png", "logo_white250.png", "matchmaker-layout.png", "office.jpg", "photo-1.jpg", "profile_picture.png", "slack.jpg", "trulia.png");