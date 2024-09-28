const product_container = document.getElementById("produk-container");
const prev_button = document.getElementById("prev-button")
const next_button = document.getElementById("next-button")
const page_link1 = document.getElementById("page-link1")
const page_link2 = document.getElementById("page-link2")
const bibit_button = document.getElementById("bibit-button")
const pupuk_button = document.getElementById("pupuk-button")
const hasil_panen_button = document.getElementById("hasil-panen-button")
const pagination = document.getElementById("pagination")
const cari = document.getElementById("cari")


let produk1 = ``;
let produk2 = ``;

prev_button.style.display = "none";
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('cari');

let page_produk = [
    {
      "harga" : "Rp. 18.000,00 per Kg",
      "nama" : "Padi",
      "gambar" : "./img/hasilpanen/padi.jpg",
      "rating" : "4.8",
      "deskripsi" : "Padi adalah salah satu jenis tanaman pangan yang paling penting di Indonesia. Padi ini memiliki kualitas yang sangat baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "20kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 10.000,00 per Kg",
      "nama" : "Jagung",
      "gambar" : "./img/hasilpanen/jagung.jpg",
      "rating" : "4.5",
      "deskripsi" : "Jagung adalah salah satu jenis biji-bijian yang paling populer di Indonesia. Jagung ini memiliki kualitas yang baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "50kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 12.000,00 per Kg",
      "nama" : "Kedelai",
      "gambar" : "./img/hasilpanen/kedelai.jpg",
      "rating" : "4.2",
      "deskripsi" : "Kedelai adalah salah satu jenis kacang-kacangan yang paling populer di Indonesia. Kedelai ini memiliki kualitas yang baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "30kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 15.000,00 per Kg",
      "nama" : "Kentang",
      "gambar" : "./img/hasilpanen/kentang.jpg",
      "rating" : "4.9",
      "deskripsi" : "Kentang adalah salah satu jenis umbi-umbian yang paling populer di Indonesia. Kentang ini memiliki kualitas yang sangat baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "25kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 9.000,00 per Kg",
      "nama" : "Bawang",
      "gambar" : "./img/hasilpanen/bawang.jpg",
      "rating" : "4.1",
      "deskripsi" : "Bawang adalah salah satu jenis bumbu dapur yang paling populer di Indonesia. Bawang ini memiliki kualitas yang baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "35kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 11.000,00 per Kg",
      "nama" : "Cabai",
      "gambar" : "./img/hasilpanen/cabai.jpg",
      "rating" : "4.6",
      "deskripsi" : "Cabai adalah salah satu jenis bumbu dapur yang paling populer di Indonesia. Cabai ini memiliki kualitas yang sangat baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "45kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 14.000,00 per Kg",
      "nama" : "Tomat",
      "gambar" : "./img/hasilpanen/tomat.jpg",
      "rating" : "4.8",
      "deskripsi" : "Tomat adalah salah satu jenis buah-buahan yang paling populer di Indonesia. Tomat ini memiliki kualitas yang sangat baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "20kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 7.000,00 per Kg",
      "nama" : "Kacang",
      "gambar" : "./img/hasilpanen/kacang.jpg",
      "rating" : "4.3",
      "deskripsi" : "Kacang adalah salah satu jenis kacang-kacangan yang paling populer di Indonesia. Kacang ini memiliki kualitas yang baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "50kg",
      "type" : "hasil-panen"
    },
    {
      "harga" : "Rp. 12.000,00 per Kg",
      "nama" : "Ubi",
      "gambar" : "./img/hasilpanen/ubi.jpg",
      "rating" : "4.7",
      "deskripsi" : "Ubi adalah salah satu jenis umbi-umbian yang paling populer di Indonesia. Ubi ini memiliki kualitas yang sangat baik dan cocok untuk diolah menjadi berbagai macam makanan.",
      "stok" : "40kg",
      "type" : "hasil-panen"
    },
    {
        "harga" : "Rp. 5.000,00",
        "nama" : "Bibit Tomat",
        "gambar" : "./img/bibit/tomat2.jpg",
        "rating" : "4.5",
        "deskripsi" : "Bibit tomat yang sehat dan berkualitas tinggi, cocok untuk ditanam di berbagai jenis tanah.",
        "stok" : "1000",
        "type" : "bibit"
      },
      {
        "harga" : "Rp. 3.000,00",
        "nama" : "Bibit Cabai",
        "gambar" : "./img/bibit/cabai2.jpg",
        "rating" : "4.2",
        "deskripsi" : "Bibit cabai yang pedas dan berkualitas tinggi, cocok untuk ditanam di berbagai jenis tanah.",
        "stok" : "800",
        "type" : "bibit"
      },
      {
        "harga" : "Rp. 4.000,00",
        "nama" : "Bibit Bawang",
        "gambar" : "./img/bibit/bawang2.jpg",
        "rating" : "4.1",
        "deskripsi" : "Bibit bawang yang sehat dan berkualitas tinggi, cocok untuk ditanam di berbagai jenis tanah.",
        "stok" : "900",
        "type" : "bibit"
      },
      {
        "harga" : "Rp. 6.000,00",
        "nama" : "Bibit Kentang",
        "gambar" : "./img/bibit/kentang2.jpg",
        "rating" : "4.8",
        "deskripsi" : "Bibit kentang yang sehat dan berkualitas tinggi, cocok untuk ditanam di berbagai jenis tanah.",
        "stok" : "700",
        "type" : "bibit"
      },
      {
        "harga" : "Rp. 2.000,00",
        "nama" : "Bibit Kacang",
        "gambar" : "./img/bibit/kacang2.jpg",
        "rating" : "4.0",
        "deskripsi" : "Bibit kacang yang sehat dan berkualitas tinggi, cocok untuk ditanam di berbagai jenis tanah.",
        "stok" : "1000",
        "type" : "bibit"
      },
      {
        "harga" : "Rp. 10.000,00",
        "nama" : "Pupuk Organik Kompos",
        "gambar" : "./img/pupuk/kompos2.jpg",
        "rating" : "4.8",
        "deskripsi" : "Pupuk organik kompos yang terbuat dari bahan alami, cocok untuk meningkatkan kesuburan tanah dan pertumbuhan tanaman.",
        "stok" : "500",
        "type" : "pupuk"
      },
      {
        "harga" : "Rp. 8.000,00",
        "nama" : "Pupuk Organik Bokashi",
        "gambar" : "./img/pupuk/bokashi2.jpg",
        "rating" : "4.5",
        "deskripsi" : "Pupuk organik bokashi yang terbuat dari bahan alami, cocok untuk meningkatkan kesuburan tanah dan pertumbuhan tanaman.",
        "stok" : "300",
        "type" : "pupuk"
      },
      {
        "harga" : "Rp. 12.000,00",
        "nama" : "Pupuk Organik Vermikompos",
        "gambar" : "./img/pupuk/vermikompos2.jpg",
        "rating" : "4.9",
        "deskripsi" : "Pupuk organik vermicompos yang terbuat dari bahan alami, cocok untuk meningkatkan kesuburan tanah dan pertumbuhan tanaman.",
        "stok" : "200",
        "type" : "pupuk"
      },
      {
        "harga" : "Rp. 9.000,00",
        "nama" : "Pupuk Organik POC",
        "gambar" : "./img/pupuk/poc2.jpg",
        "rating" : "4.6",
        "deskripsi" : "Pupuk organik POC yang terbuat dari bahan alami, cocok untuk meningkatkan kesuburan tanah dan pertumbuhan tanaman.",
        "stok" : "400",
        "type" : "pupuk"
      },
      {
        "harga" : "Rp. 11.000,00",
        "nama" : "Pupuk Organik NPK",
        "gambar" : "./img/pupuk/npk2.jpg",
        "rating" : "4.7",
        "deskripsi" : "Pupuk organik NPK yang terbuat dari bahan alami, cocok untuk meningkatkan kesuburan tanah dan pertumbuhan tanaman.",
        "stok" : "350",
        "type" : "pupuk"
      }
]

function findType(type){
    let produk = ``
    let indeks_produk = 0;
    page_produk.forEach(element => {
        if (element["type"] == type) {
            produk += `<div class="card">
                <img class="gambar-icon" src="${element['gambar']}" alt="GAMBAR">
                <div class="icon">
                    <div class="love" onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                    <div onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                </div>
                <h3>${element.nama}</h3>
                <p>${ element.harga }</p>
                <input type="text" value=${indeks_produk} hidden/>
                <button onclick="lihat(this)" class="tombol-lihat">
                    LIHAT
                </button>
            </div>`
        }
        indeks_produk += 1;
    });
    product_container.innerHTML = produk
}

function search() {
    let find = cari.value;
    let produk = ``;
    let indeks_produk = 0;
    page_produk.forEach(element => {
        if (element.nama.toLowerCase().includes(find.toLowerCase())) {
            produk += `<div class="card">
                <img class="gambar-icon" src="${element["gambar"]} alt="GAMBAR">
                <div class="icon">
                    <div class="love" onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                    <div onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                </div>
                <h3>${element.nama}</h3>
                <p>${ element.harga }</p>
                <input type="text" value=${indeks_produk} hidden/>
                <button onclick="lihat(this)" class="tombol-lihat">
                    LIHAT
                </button>
            </div>`
        }
        indeks_produk += 1;
    });
    product_container.innerHTML = produk
    pagination.style.display = "none";
}

function findBibit() {
    findType("bibit");
    bibit_button.classList.add("filter-active")
    pupuk_button.classList.remove("filter-active")
    hasil_panen_button.classList.remove("filter-active")
    pagination.style.display = "none";
}
function findHasilPanen() {
    findType("hasil-panen")
    bibit_button.classList.remove("filter-active")
    pupuk_button.classList.remove("filter-active")
    hasil_panen_button.classList.add("filter-active")
    pagination.style.display = "none";

}
function findPupuk(){
    findType("pupuk")
    bibit_button.classList.remove("filter-active")
    pupuk_button.classList.add("filter-active")
    hasil_panen_button.classList.remove("filter-active")
    pagination.style.display = "none";

}

for (let i = 0; i < 12; i++)
{
    produk1 += `<div class="card">
                <img class="gambar-icon" src="${page_produk[i]["gambar"]}" alt="GAMBAR">
                <div class="icon">
                    <div class="love" onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                    <div onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                </div>
                <h3>${page_produk[i].nama}</h3>
                <p>${ page_produk[i].harga }</p>
                <input type="text" value=${i} hidden/>
                <button onclick="lihat(this)" class="tombol-lihat">
                    LIHAT
                </button>
            </div>`
}

for (let i = 12; i < page_produk.length; i++)
{
    produk2 += `<div class="card">
                <img class="gambar-icon" src="${page_produk[i]["gambar"]}" alt="GAMBAR">
                <div class="icon">
                    <div class="love" onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                    <div onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                </div>
                <h3>${page_produk[i].nama}</h3>
                <p>${ page_produk[i].harga }</p>
                <input type="text" value=${i} hidden/>
                <button onclick="lihat(this)" class="tombol-lihat">
                    LIHAT
                </button>
            </div>`
}

prev_button.addEventListener("click", () => {
    product_container.innerHTML = produk1
    prev_button.style.display = "none";
    next_button.style.display = "block";

})

next_button.addEventListener("click", () => {
    product_container.innerHTML = produk2
    next_button.style.display = "none";
    prev_button.style.display = "block";
})

page_link1.addEventListener("click", () => {
    product_container.innerHTML = produk1
    page_link2.classList.remove("active")
    page_link1.classList.add("active")
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    prev_button.style.display = "none";
    next_button.style.display = "block";

})

page_link2.addEventListener("click", () => {
    product_container.innerHTML = produk2
    page_link1.classList.remove("active")
    page_link2.classList.add("active")
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    prev_button.style.display = "block";
    next_button.style.display = "none";
})



product_container.innerHTML = produk1;
if (myParam)
{
    let produk = ``
    let indeks_produk = 0;
    page_produk.forEach(element => {
        if (element["nama"].toLowerCase().includes(myParam.toLowerCase())) {
            produk += `<div class="card">
                <img class="gambar-icon" src="${element['gambar']}" alt="GAMBAR">
                <div class="icon">
                    <div class="love" onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                    <div onclick="love(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                </div>
                <h3>${element.nama}</h3>
                <p>${element.harga}</p>
                <input type="text" value=${indeks_produk} hidden/>
                <button onclick="lihat(this)" class="tombol-lihat"">
                    LIHAT
                </button>
            </div>`
        }
        indeks_produk += 1;
    });
    product_container.innerHTML = produk
    pagination.style.display = "none";
}

function lihat(element)
{
    let indeks_produk = parseInt(element.parentElement.children[4].value)
    let overrider = `
    <div class="detail-container">
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
                    <button id="tombol-masuk" href="">
                        Masuk
                    </button>
                    <button id="tombol-daftar" href="">
                        Daftar
                    </button>
                    <button type="button" id="back" class="back">
                        Kembali
                    </button>
                </div>
            </div>
        </nav>
        <section class="section-produk">
            <a href="produk.html" class="blue-btn">Kembali</a>
            <div class="container-1">
                <img class="gambar-produk" src="${page_produk[indeks_produk]["gambar"]}"  />
                <div class="info">
                    <h1>${page_produk[indeks_produk]["nama"]}</h1>
                    <p style="font-family: inter-medium;">Rating: ${page_produk[indeks_produk]["rating"]}/5.0 <span style="margin-left: 10px; margin-right: 10px; font-family: inter-medium;"> | </span></p>
                    <p class="harga" style="margin-bottom: 5px;">${page_produk[indeks_produk]["harga"]}</p>
                    <p style="color: #333333; font-family: inter-medium;">${page_produk[indeks_produk]["deskripsi"]}</p>
                    <div>
                        <div class="kuan">
                            <div>Stok: ${page_produk[indeks_produk]["stok"]}</div>
                            <span style="font-family: inter-medium;">Kuantitas: </span>
                            <button onclick="kurang()" type="button" id="button-min" style="margin: 0px;">-</button>
                            <input id="kuantitas-input" type="text" style="text-align: center; width: 40px; margin: 0px;" value=1 disabled>
                            <button id="button-add" onclick="tambah()" type="button">+</button>
                        </div>
                        <div class="tombol-submit">
                            <button onclick="love()" class="masukan-keranjang">Masukan Keranjang</button>
                            <button onclick="love()" class="beli-sekarang">Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
        <h1>#Ulasan</h1>
        <div class="reviews">
            <div class="review">
                <h2>5/5</h2>
                <p>"Saya sangat puas dengan hasil panen saya setelah menggunakan pupuk organik. Tanaman saya menjadi lebih sehat dan subur!"</p>
                <p>- John Doe</p>
            </div>
            <div class="review">
                <h2>4/5</h2>
                <p>"Saya baru saja memulai pertanian dan saya sangat senang dengan hasilnya. Saya akan terus menggunakan metode ini!"</p>
                <p>- Jane Doe</p>
            </div>
            <div class="review">
                <h2>5/5</h2>
                <p>"Saya sangat puas dengan kualitas pupuk organik yang saya gunakan. Tanaman saya menjadi lebih kuat dan sehat!"</p>
                <p>- Bob Smith</p>
            </div>
            <div class="review">
                <h2>4/5</h2>
                <p>"Saya baru saja mencoba metode pertanian ini dan saya sangat senang dengan hasilnya. Saya akan terus menggunakan metode ini!"</p>
                <p>- Alice Johnson</p>
            </div>
            <div class="review">
                <h2>5/5</h2>
                <p>"Saya sangat puas dengan hasil panen saya setelah menggunakan metode pertanian ini. Tanaman saya menjadi lebih sehat dan subur!"</p>
                <p>- Mike Brown</p>
            </div>
            <div class="review">
                <h2>4/5</h2>
                <p>"Saya baru saja memulai pertanian dan saya sangat senang dengan hasilnya. Saya akan terus menggunakan metode ini!"</p>
                <p>- Emily Davis</p>
            </div>
            <div class="review">
                <h2>5/5</h2>
                <p>"Saya sangat puas dengan kualitas pupuk organik yang saya gunakan. Tanaman saya menjadi lebih kuat dan sehat!"</p>
                <p>- Sarah Taylor</p>
            </div>
            <div class="review">
                <h2>4/5</h2>
                <p>"Saya baru saja mencoba metode pertanian ini dan saya sangat senang dengan hasilnya. Saya akan terus menggunakan metode ini!"</p>
                <p>- David Lee</p>
            </div>
            <div class="review">
                <h2>5/5</h2>
                <p>"Saya sangat puas dengan hasil panen saya setelah menggunakan metode pertanian ini. Tanaman saya menjadi lebih sehat dan subur!"</p>
                <p>- Olivia Martin</p>
            </div>
            <div class="review">
                <h2>4/5</h2>
                <p>"Saya baru saja memulai pertanian dan saya sangat senang dengan hasilnya. Saya akan terus menggunakan metode ini!"</p>
                <p>- Ava Garcia</p>
            </div>
        </div>
        </div>
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
        </div>`
        
        document.getElementsByTagName("body")[0].innerHTML = overrider
        document.documentElement.scrollTop = 0; 
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

        function love(){
            console.log(0)
            login_modal.style.scale = 1;
        }
    }


    function tambah() {
        document.getElementById("kuantitas-input").value = parseInt(document.getElementById("kuantitas-input").value) + 1;
    }

    function kurang() {
        if (document.getElementById("kuantitas-input").value == "1") 
        {
            return
        }
        document.getElementById("kuantitas-input").value = parseInt(document.getElementById("kuantitas-input").value) - 1;

    }

    
    