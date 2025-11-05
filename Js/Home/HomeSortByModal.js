const sortBy = document.getElementById("projectSortBy")
const sortByClass = document.getElementById("classSortBy")
const labelSortByClass = document.getElementById("labelClassSortBy")
const projectFooters = document.getElementsByClassName("projectEntryFooter")
const projectContainer = document.getElementById("projectsContainer")
const noResultsText = document.getElementById("noResultsText")

sortBy.addEventListener('change', function() {
    sortItemsInList(sortBy.value)
});

function sortItemsInList(sortBy) {
    let counter = showOrHideItemsMainSort(sortBy)
    let classCounter = showOrHideItemsClassSort(sortBy)

    if(sortBy === "Classwork") {
        sortByClass.style.display = "flex"
        labelSortByClass.style.display = "flex"
    } else {
        sortByClass.style.display = "none"
        labelSortByClass.style.display = "none"
    }

    if(counter < projectFooters.length || counter < classCounter) {
        noResultsText.style.display = 'none';
        projectContainer.style.height = "auto";
    } else if(noResultsText.style.display !== 'list-item') {
        noResultsText.style.display = 'list-item';
        projectContainer.style.height = "350px";
    }
}

function showOrHideItemsMainSort(labelToCheck) {
    let counter = 0;
    if(!(labelToCheck === "All")) {
        for (let i = 0; i < projectContainer.children.length; i++) {
            if (projectFooters[i].innerHTML === labelToCheck) {
                projectContainer.children[i].style.display = "flex";
            } else {
                projectContainer.children[i].style.display = "none";
                counter++;
            }
        }
    } else {
        for (let i = 0; i < projectContainer.children.length; i++) {
            projectContainer.children[i].style.display = "flex";
        }
    }
    return counter;
}

function showOrHideItemsClassSort(labelToCheck) {
    let counter = 0;
    if (labelToCheck === "Classwork") {
        if(!(sortByClass.value === "All")) {
            for (let i = 0; i < projectContainer.children.length; i++) {
                if (projectFooters[i].dataset === labelToCheck) {
                    projectContainer.children[i].style.display = "flex";
                } else {
                    projectContainer.children[i].style.display = "none";
                    counter++;
                }
            }
        } else {
            for (let i = 0; i < projectContainer.children.length; i++) {
                if(projectFooters[i].innerHTML === "Classwork") {
                    projectContainer.children[i].style.display = "flex";
                }
            }
        }
    }
    return counter;
}