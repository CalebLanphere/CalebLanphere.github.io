const ProjectInfoWidget = document.getElementsByClassName("ProjectFullScreenWidget");
const ProjectDiv = document.getElementsByClassName("projectEntry");
let indexOfProjectSelected = 0;

for(let i = 0; i < ProjectDiv.length; i++) {
    ProjectDiv[i].addEventListener("click", (e) => {
        e.preventDefault();
        indexOfProjectSelected = i;
        setImageScrollingVars();
        ProjectInfoWidget[ProjectDiv[i].dataset.index].style.display = "grid";
    });
}
for(let i = 0; i < ProjectInfoWidget.length; i++) {
    document.getElementById("closeProject" + i).addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("ProjectWidget".concat(parseInt(ProjectDiv[i].dataset.index).toString())).style.display = "none";
        clearPhotoArray();
    });
}



// Image Scrolling

let projectImage;
let previousImage;
let nextImage;
let index = 0;
let imagesToShow = {
    DesignForUnderstanding: ["/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForUnderstanding/FinalClearDesign.png",
        "/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForUnderstanding/FinalPersuasiveDesign.png"],
    DesignForDimensions: ["/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/FigmaDesign.png",
        "/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/BlogSiteSketches/Sketch1.png",
        "/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/MainPageDesignSketches/Sketch1.png",
        "/CS-257-Webpage/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/ViewerDesignSketches/Sketch1.png",],
};
let selectedPhotoArray;
let isPhotoArraySelected = false;

function setImageScrollingVars() {
    projectImage = document.getElementById("projectImage" + indexOfProjectSelected);
    previousImage = document.getElementById("previousImage" + indexOfProjectSelected);
    nextImage = document.getElementById("nextImage" + indexOfProjectSelected);
    console.log("projectImage" + indexOfProjectSelected);

    previousImage.addEventListener("click", function() {
        previousPhoto();
    })

    nextImage.addEventListener("click", function() {
        nextPhoto();
    })

    if (isPhotoArraySelected === false) {
        selectedPhotoArray = getCorrectPhotoArray();
        isPhotoArraySelected = true;
    }
    console.log(selectedPhotoArray);
}

function getCorrectPhotoArray() {
    if(projectImage.dataset.project === "DesignForUnderstanding") {
        return imagesToShow.DesignForUnderstanding;
    }
    if(projectImage.dataset.project === "DesignForDimensions") {
        return imagesToShow.DesignForDimensions;
    }
}

function nextPhoto() {
    if (index !== (selectedPhotoArray.length - 1) && index < selectedPhotoArray.length) {
        projectImage.setAttribute("src",selectedPhotoArray[index]);
        index++;
        console.log(index);
    } else if (index === selectedPhotoArray.length - 1) {
        index = 0;
        projectImage.setAttribute("src", selectedPhotoArray[index]);
        console.log(index);
    }
}

function previousPhoto() {
    if (index < selectedPhotoArray.length && index !== 0) {
        projectImage.setAttribute("src",selectedPhotoArray[index]);
        index--;
        console.log(index);
    } else if (index === 0) {
        index = (selectedPhotoArray.length - 1);
        projectImage.setAttribute("src", selectedPhotoArray[index]);
        console.log(index);
    }
}

function clearPhotoArray() {
    isPhotoArraySelected = false;
    index = 0;
}

