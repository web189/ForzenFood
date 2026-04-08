const produk = [
  {
    nama: "Sosis Ayam",
    harga: "Rp 25.000",
    img: "img/produk1.jpg"
  },
  {
    nama: "Nugget Premium",
    harga: "Rp 30.000",
    img: "img/produk2.jpg"
  },
  {
    nama: "Bakso Frozen",
    harga: "Rp 28.000",
    img: "img/produk3.jpg"
  }
];

const produkList = document.getElementById("produkList");

produk.forEach(item => {
  produkList.innerHTML += `
    <div class="card">
      <img src="${item.img}">
      <h3>${item.nama}</h3>
      <p>${item.harga}</p>
      <button onclick="beli('${item.nama}')">Beli</button>
    </div>
  `;
});

function beli(nama) {
  alert("Kamu memilih " + nama);
}

function orderWA() {
  window.open("https://wa.me/6281234567890");
}

function scrollToProduk(){
  document.getElementById("produk").scrollIntoView({
    behavior: "smooth"
  });
}