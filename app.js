let bottom = document.querySelector("bottom")
let thumbBar = document.querySelector("#thumb-bar")
let displayImage = document.querySelector(".displayed-img")
function addThumbBar() {
    for (i = 1; i < 6; i++) {
        img = document.createElement("img")
        img.setAttribute("id", i)
        img.setAttribute("src", `images/pic${i}.jpg`)
        img.setAttribute("alt", `Picture #${i}`)
        thumbBar.appendChild(img)
    }
}

thumbBar.addEventListener("mouseover", (img) => {
    imgID = img.target.id
    if (isNaN(imgID)) {
        return
    }
    displayImage.setAttribute("src", `images/pic${imgID}.jpg`)
    bottom.setAttribute("class", "")
})


function onPageLoad() {
    bottom.setAttribute("class", "hidden")
    addThumbBar()
}

onPageLoad()