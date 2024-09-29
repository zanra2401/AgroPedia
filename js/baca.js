let page_bacaan = [
    {
      "judul": "Tips Membuat Tanah Subur untuk Pertanian",
      "content": "Tanah yang subur adalah kunci utama untuk pertanian yang sukses. Berikut adalah beberapa tips untuk membuat tanah subur: menambahkan kompos, menggunakan pupuk alami, dan menghindari penggunaan pestisida kimia.",
      "gambar": "./img/baca/tips_tanah_subur.jpg",
      "tanggal_upload": "2022-01-01",
      "love" : 24
    },
    {
      "judul": "Cara Menanam Sayuran yang Benar",
      "content": "Menanam sayuran memerlukan teknik yang tepat untuk mendapatkan hasil yang maksimal. Berikut adalah beberapa tips untuk menanam sayuran yang benar: memilih benih yang sehat, menyiapkan tanah yang subur, dan melakukan perawatan yang rutin.",
      "gambar": "./img/baca/cara_tanam_sayur.jpg",
      "tanggal_upload": "2022-01-05",
      "love" : 36
    },
    {
      "judul": "Tips Mengatasi Hama dan Penyakit Tanaman",
      "content": "Hama dan penyakit tanaman dapat menjadi ancaman besar bagi pertanian. Berikut adalah beberapa tips untuk mengatasi hama dan penyakit tanaman: menggunakan pestisida alami, melakukan perawatan yang rutin, dan memantau kondisi tanaman secara teratur.",
      "gambar": "./img/baca/tips_mengatasi_hama_tanaman.jpg",
      "tanggal_upload": "2022-01-10",
      "love" : 67
    },
    {
      "judul": "Cara Membuat Pupuk Kompos yang Baik",
      "content": "Pupuk kompos adalah salah satu cara terbaik untuk meningkatkan kesuburan tanah. Berikut adalah beberapa tips untuk membuat pupuk kompos yang baik: memilih bahan yang tepat, melakukan proses pengomposan yang benar, dan memantau kondisi kompos secara teratur.",
      "gambar": "./img/baca/cara_membuat_pupuk_kompos.jpg",
      "tanggal_upload": "2022-01-15",
      "love" : 28
    },
    {
      "judul": "Tips Menghemat Air dalam Pertanian",
      "content": "Menghemat air adalah salah satu cara terbaik untuk meningkatkan efisiensi pertanian. Berikut adalah beberapa tips untuk menghemat air dalam pertanian: menggunakan sistem irigasi yang efisien, melakukan perawatan yang rutin, dan memantau kondisi tanaman secara teratur.",
      "gambar": "./img/baca/menghemat_air.jpg",
      "tanggal_upload": "2022-01-20",
      "love" : 90
    },
    {
      "judul": "Cara Menanam Buah yang Benar",
      "content": "Menanam buah memerlukan teknik yang tepat untuk mendapatkan hasil yang maksimal. Berikut adalah beberapa tips untuk menanam buah yang benar: memilih benih yang sehat, menyiapkan tanah yang subur, dan melakukan perawatan yang rutin.",
      "gambar": "./img/baca/cara_tanam_buah.jpg",
      "tanggal_upload": "2022-01-25",
      "love" : 78
    },
    {
      "judul": "Tips Mengatasi Kekeringan dalam Pertanian",
      "content": "Kekeringan dapat menjadi ancaman besar bagi pertanian. Berikut adalah beberapa tips untuk mengatasi kekeringan dalam pertanian: menggunakan sistem irigasi yang efisien, melakukan perawatan yang rutin, dan memantau kondisi tanaman secara teratur.",
      "gambar": "./img/baca/menghemat_air.jpg",
      "tanggal_upload": "2022-01-30",
      "love" : 45
    },
    {
      "judul": "Cara Membuat Tanaman Hias yang Indah",
      "content": "Tanaman hias dapat menjadi dekorasi yang indah untuk rumah atau taman. Berikut adalah beberapa tips untuk membuat tanaman hias yang indah: memilih tanaman yang tepat, menyiapkan tanah yang subur, dan melakukan perawatan yang rutin.",
      "gambar": "./img/baca/cara_tanam_sayur.jpg",
      "tanggal_upload": "2022-02-01",
      "love" : 17
    },
    {
        "judul": "Tips Menggunakan Teknologi dalam Pertanian",
        "content": "Teknologi dapat menjadi alat yang sangat berguna dalam pertanian. Berikut adalah beberapa tips untuk menggunakan teknologi dalam pertanian: menggunakan aplikasi pertanian, memantau kondisi tanaman secara teratur, dan melakukan analisis data untuk meningkatkan efisiensi.",
        "gambar": "./img/baca/cara_tanam_buah.jpg",
        "tanggal_upload": "2022-02-05",
        "love" : 42
    },
    {
        "judul": "Cara Membuat Sistem Irigasi yang Efisien",
        "content": "Sistem irigasi yang efisien dapat membantu menghemat air dan meningkatkan efisiensi pertanian. Berikut adalah beberapa tips untuk membuat sistem irigasi yang efisien: menggunakan pipa yang tepat, memantau kondisi tanaman secara teratur, dan melakukan perawatan yang rutin.",
        "gambar": "./img/baca/menghemat_air.jpg",
        "tanggal_upload": "2022-02-10",
        "love" : 67
    },
    {
        "judul": "Tips Mengembangkan Usaha Pertanian yang Sukses",
        "content": "Mengembangkan usaha pertanian yang sukses memerlukan perencanaan yang matang dan eksekusi yang tepat. Berikut adalah beberapa tips untuk mengembangkan usaha pertanian yang sukses: membuat rencana bisnis yang jelas, memantau kondisi tanaman secara teratur, dan melakukan analisis data untuk meningkatkan efisiensi.",
        "gambar": "./img/baca/cara_tanam_buah.jpg",
        "tanggal_upload": "2022-02-15",
        "love" : 54
    },
    {
        "judul": "Tips Menggunakan Pupuk Organik dalam Pertanian",
        "content": "Pupuk organik dapat menjadi alternatif yang lebih ramah lingkungan dan sehat untuk tanaman. Berikut adalah beberapa tips untuk menggunakan pupuk organik dalam pertanian: memilih pupuk organik yang tepat, memantau kondisi tanaman secara teratur, dan melakukan perawatan yang rutin.",
        "gambar": "./img/baca/cara_membuat_pupuk_kompos.jpg",
        "tanggal_upload": "2022-02-20",
        "love" : 22
      }
]

const bacaan_container = document.getElementById("bacaan-container")
const cari = document.getElementById("cari")


let bacaan = ``;
let love_now = 0;

function baca(element) 
{
    let indeks = parseInt(element.parentElement.children[3].value)
    love_now = parseInt(page_bacaan[indeks]["love"]);
    document.getElementsByTagName("body")[0].innerHTML = `
    <nav class="navigation-bar">
        <div class="left-side-nav">
            <img src="img/logo.jpg" alt="LOGO" style="height: 80%;">
            <h1>AGROPEDIA</h1>
        </div>
        <div class="right-side-nav" id="right-side-nav">
            <button class='h-b' id='h-b'><div></div><div></div><div></div></button>
            <img src="img/wave.svg" alt="wave" class="wave-nav">
            <img src="img/wave-1.svg" alt="wave" class="wave-nav-2">
            <div class="menu" id="menu">
                <a href="index.html">
                    Beranda
                </a>
                <a href="produk.html">
                    Produk
                </a>
                <a href="baca.html">
                    Baca
                </a>
                 <a id="tombol-profile" href="">
                    Profile
                </a>
                <button  type="button" id="back" class="back">
                    Kembali
                </button>
            </div>
        </div>
    </nav>
    <div class="body-bacaan">
        <section class="section-i-baca">
            <h1>#${page_bacaan[indeks]["judul"]}</h1>
            <img src="${page_bacaan[indeks]["gambar"]}" alt="">
        </section>
        <section class="section-bacaan">
            <p>
                Dipublikasikan pada tanggal ${page_bacaan[indeks]["tanggal_upload"]}
            </p>
            <div class="love-container">
                <div onclick="lovePlus(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                <span>${page_bacaan[indeks]["love"]}</span>
            </div>
            <div class="content">
                <p>
                    ${page_bacaan[indeks]["content"]}
                </p>
            </div>
        </section>
    <div class="footer">
        <div class="footer-column">
            <h3>Agropedia</h3>
            <p>Telang Nisa Blok A no 1, Kamal Bangkalan</p>
        </div>
        <div class="footer-column">
            <h3>Links</h3>
            <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="produk.html">Produk</a></li>
                <li><a href="baca.html">Baca</a></li>
                <li><a href="https://www.freepik.com/">freepik</a></li>
                <li><a href="https://id.pinterest.com/99designs/">99designs</a></li>

            </ul>
        </div>
        <div class="footer-column">
            <h3>Hubungi kami</h3>
            <div class="message-area">
                <p>081928381398</p>
                <a href="#">email@email.com</a>
            </div>
    </div>
    </div>
    <div class="modal login-modal" id="login-modal" style="scale: 0;">
        <form action="/user/login" method="post">
            <h2>MASUK</h2>
            <div class="input-field">
                <p>Email / nomer handphone</p>
                <input type="text" placeholder="Masukan email / nomer-handphone" name="email">
            </div>
            <div class="input-field">
                <p>Password</p>
                <input type="password" placeholder="Masukan password" name="password">
            </div>
            <input type="hidden" name="_token"/>
            <button type="submit"> Masuk </button>
        </form>
    </div>

    <div class="modal daftar-modal" id="daftar-modal" style="scale: 0;">
        <form action="/user/buat-akun" method="post">
            <h2>DAFTAR</h2>
            <div class="input-field" ">
                <p>Email / nomer handphone</p>
                <input type="text" name="email" placeholder="Masukan email / nomer-handphone">
            </div>
            <div class="input-field">
                <p>Password</p>
                <input type="password" name="password" placeholder="Masukan password">
            </div>
            <div class="input-field">
                <p>Konfirmasi password</p>
                <input type="password" name="confirm_pass" placeholder="Konfirmasi password">
            </div>
            <input type="hidden" name="_token"/>
            <button type="submit"> Daftar </button>
        </form>
    </div>
    <script src="js/navbar.js"></script>
    `
    
    window.screenTop = 0;
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
}

let indeks_bacaan = 0;
page_bacaan.forEach(element => {
    bacaan += `<div class="bacaan">
                    <img src="${element["gambar"]}" alt="">
                    <p class="tanggal-bacaan">Diupload: ${element["tanggal_upload"]}</p>
                    <p class="title-bacaan">${element["judul"]}</p>
                    <input type="text" value="${indeks_bacaan}" hidden/>
                    <div class="love-container">
                        <img class="love" src="img/love.svg" alt="">
                        <span style="margin-left: 5px;">${element["love"]}</span>
                    </div>
                    <button onclick="baca(this)" class="blue-btn">Baca</button>
            </div>`
    indeks_bacaan+=1;
});


function search()
{
    let bacaan_list = ``;
    let indeks_bacaan = 0;
    page_bacaan.forEach(element => {
        if (element.judul.toLowerCase().includes(cari.value.toLowerCase()))
        {
            bacaan_list += `<div class="bacaan">
                    <img src="${element["gambar"]}" alt="">
                    <p class="tanggal-bacaan">Diupload: ${element["tanggal_upload"]}</p>
                    <p class="title-bacaan">${element["judul"]}</p>
                    <input type="text" value="${indeks_bacaan}" hidden/>
                    <div class="love-container">
                        <img class="love" src="img/love.svg" alt="">
                        <span style="margin-left: 5px;">${element["love"]}</span>
                    </div>
                    <button onclick="baca(this)" class="blue-btn">Baca</button>
            </div>`
        }
        indeks_bacaan += 1;
    });
    bacaan_container.innerHTML = bacaan_list;
}


function lovePlus(element) {
    if (love_now == parseInt(element.parentElement.children[1].innerHTML)) {
        element.parentElement.children[1].innerHTML = parseInt(element.parentElement.children[1].innerHTML) + 1
        element.style.color = "#6FAC2D";
    }
}



bacaan_container.innerHTML = bacaan;