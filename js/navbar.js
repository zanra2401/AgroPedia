const menu = document.getElementById("menu")
const back = document.getElementById("back")
const hB = document.getElementById("h-b")
const login_modal = document.getElementById("login-modal");
const daftar_modal = document.getElementById("daftar-modal");
const tombol_masuk = document.getElementById("tombol-masuk");
const tombol_daftar = document.getElementById("tombol-daftar");

hB.addEventListener("click", () => {
    menu.style.transform = "translateY(0%)";
})

back.addEventListener('click', function ()  {
    menu.style.transform = "translateY(-200%)";
})

function checkOutsideClick(element, callback) {
    document.addEventListener('mousedown', function(event) {
        if (!element.contains(event.target)) {
            callback();
        }
    });
}

checkOutsideClick(login_modal, function() {
    if (login_modal.style.scale != 0){
        login_modal.style.scale = 0;
    } 
});

checkOutsideClick(daftar_modal, function() {
    if (daftar_modal.style.scale != 0){
        daftar_modal.style.scale = 0;
    } 
});


tombol_masuk.addEventListener("click", () => {
    if (login_modal.style.scale != 1) {
        login_modal.style.scale = 1;
        daftar_modal.style.scale = 0;
    }
    else {
        login_modal.style.scale = 0;
    }
})

tombol_daftar.addEventListener("click", () => {
    if (daftar_modal.style.scale != 1) {
        daftar_modal.style.scale = 1;
        login_modal.style.scale = 0;
    }
    else {
        daftar_modal.style.scale = 0
    }
})