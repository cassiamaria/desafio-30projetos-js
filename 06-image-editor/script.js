const filterBlur = document.getElementById("blur");
const filterContrast = document.getElementById("contrast");
const filterHueRotate = document.getElementById("hue-rotate");
const filterSepia = document.getElementById("sepia");

const noFlipBtn = document.getElementById("no-flip");
const flipXBtn = document.getElementById("flip-x");
const flipYpBtn = document.getElementById("flip-y");

const uploadButton = document.getElementById("upload-button");
const image = document.getElementById("chosen-image");

function resetFilters() {
    filterBlur.value = "0";
    filterContrast.value = "100";
    filterHueRotate.value = "0";
    filterSepia.value = "0";
    noFlipBtn.checked = true;
    addFilter();
    flipImage();
}

uploadButton.onchange = () => {
    resetFilters();
    document.querySelector(".image-container").style.display = "block";

    const reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

const sliders = document.querySelectorAll(".filter input[type='range']")
sliders.forEach(slider => {
    slider.addEventListener("input", addFilter);
})

function addFilter() {
    image.style.filter = `
        blur(${filterBlur.value}px)
        contrast(${filterContrast.value}%)
        hue-rotate(${filterHueRotate.value}deg)
        sepia(${filterSepia.value}%)
    `
}

const radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", flipImage);
})

function flipImage() {
    if(flipXBtn.checked) {
        image.style.transform = "scaleX(-1)";
    } else if (flipYpBtn.checked) {
        image.style.transform = "scaleY(-1)";
    } else {
        image.style.transform  = "scale(1,1)";
    }
}