let bottom = document.querySelector("bottom")
let thumbBar = document.querySelector("#thumb-bar")
let displayImage = document.querySelector(".displayed-img")
let submit = document.querySelector("bottom button")
let input = document.querySelector("bottom input")

function addThumbBar() {
    for (i = 1; i < 6; i++) {
        img = document.createElement("img")
        img.setAttribute("id", i)
        img.setAttribute("src", `images/pic${i}.jpg`)
        img.setAttribute("alt", `Picture #${i}`)
        thumbBar.appendChild(img)
    }
}
let currImg = 4
thumbBar.addEventListener("mouseover", (img) => {
    imgID = img.target.id
    if (isNaN(imgID)) {
        return
    }
    displayImage.setAttribute("src", `images/pic${imgID}.jpg`)
    bottom.setAttribute("class", "")
    currImage = imgID
})


submit.addEventListener("click", () => {
    value = input.value
    input.value = ""
    if (value != "blur") {
        alert(`${value}\nHey! Don't do that!`)
    } else {
        displayImage.setAttribute("src", `images/pic${currImage}B.jpg`)
    }
})

function onPageLoad() {
    bottom.setAttribute("class", "hidden")
    addThumbBar()
}

onPageLoad()