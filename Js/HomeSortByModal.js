const sortBy = document.getElementById("projectSortBy")
const sortByClass = document.getElementById("classSortBy")
const labelSortByClass = document.getElementById("labelClassSortBy")
const projectFooters = document.getElementsByClassName("projectEntryFooter")
const projectContainer = document.getElementById("projectsContainer")
const noResultsText = document.getElementById("noResultsText")
const cBox = document.getElementById("cTypeBox")

sortBy.addEventListener('change', function() {
    sortItemsInList(sortBy.value, sortByClass.value)
});
sortByClass.addEventListener('change', function() {
    sortItemsInList(sortBy.value, sortByClass.value)
})

function sortItemsInList(sortBy) {
    let counter = showOrHideItemsMainSort(sortBy)
    let classCounter;

    if(sortBy === "Classwork") {
        cBox.style.display = "flex"
        sortByClass.style.visibility = "visible"
        labelSortByClass.style.visibility = "visible"
        classCounter = showOrHideItemsClassSort(sortBy, sortByClass.value)
    } else {
        cBox.style.display = "none"
        sortByClass.style.visibility = "hidden"
        labelSortByClass.style.visibility = "hidden"
    }

    if(counter !== 0 || classCounter !== 0) {
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

function showOrHideItemsClassSort(mainDropdown, className) {
    let counter = 0;
    if (mainDropdown === "Classwork") {
        if(!(sortByClass.value === "All")) {
            for (let i = 0; i < projectContainer.children.length; i++) {
                if (projectFooters[i].dataset.classname === className) {
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