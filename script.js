//This is the student counter app
var count = 0
var saved = ""
function increment() {
    count++
    document.getElementById("count-el").innerText = count
}

function addSave() {
    if (saved != "") {
        saved += "-"
    }
    saved += count
    document.getElementsByTagName("p")[0].innerHTML = "Previous Enteries: " + saved
}