const viewMore = document.getElementById('view');
const hideElements = document.querySelectorAll('.second')

viewMore.addEventListener("click", function () {
    hideElements.forEach(el => {
        el.style.display = "block";
    })
})