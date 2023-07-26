// Header

let calendar_button = document.querySelector("#calendar-button")

let calendar_modal = document.querySelector("#calendar-modal")

let calendar_close = document.querySelector("#calendar-close")

let calendar_overlay = document.querySelector("#overlay")

calendar_button.addEventListener("click", function(){
    calendar_modal.classList.toggle("calendar-on")
    calendar_overlay.classList.toggle("overlay")
})

calendar_close.addEventListener("click", function(){
    calendar_modal.classList.toggle("calendar-on")
    calendar_overlay.classList.toggle("overlay")
})