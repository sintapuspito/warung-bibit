document.addEventListener("DOMContentLoaded", function () {
  // Definisikan daftar produk di sini
  const daftarProduk = [
    {
      nama: "Benih Okra",
      harga: "Rp9.000",
      deskripsi: "Isi Benih: +- 10 butir",
      semai: "3 HSS",
      panen: "30 HST",
      lingkungan: "Cocok ditanam di dataran rendah hingga sedang...",
      ilmiah: "Abelmoschus esculentus L. Moench",
      family: "Malvaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Tomat",
      harga: "Rp9.000",
      deskripsi: "Isi Benih: 100 butir",
      semai: "3 HSS",
      panen: "90 HST",
      lingkungan:
        "Cocok ditanam di dataran tinggi maupun rendah, rentang suhu 25-35 derajat celsius",
      ilmiah: "Lycopersicon esculentum",
      family: "Solanaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },
    {
      nama: "Benih Pakchoy",
      harga: "Rp9.000",
      deskripsi: "Isi Bersih: +- 330 butir",
      semai: "1-5 HSS",
      panen: "30-45 HST",
      lingkungan:
        "Dataran tinggi atau rendah, rentang suhu 16-35 derajat celcius...",
      ilmiah: "Brassica Rapa L.",
      family: "Brassicaceae",
    },

    // Tambahkan objek-objek lain untuk produk lainnya...
  ];

  // Seleksi elemen list-card-product
  const listCardProduct = document.querySelector(".list-card-product");

  // Fungsi untuk mengisi konten card produk dengan data dari array daftarProduk
  function populateCardProduk() {
    listCardProduct.innerHTML = ""; // Hapus konten yang sudah ada

    // Loop melalui setiap produk dalam daftarProduk
    daftarProduk.forEach((produk, index) => {
      // Buat elemen card
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      card.style.margin = "1.2rem";

      // Isi konten card
      card.innerHTML = `
            <img src="./assets/img/produk/Produk${
              index + 1
            }.png" class="card-img-top" alt="${produk.nama}" />
            <div class="card-body">
              <div class="card-title-price" style="display: flex; justify-content: space-between;">
                <h5 class="card-title">${produk.nama}</h5>
                <h5 class="card-price">${produk.harga}</h5>
              </div>
              <p class="card-text">
                <span class="card-text-span" style="font-weight: 500">Isi Benih</span>: ${
                  produk.deskripsi
                }<br />
                <span class="card-text-span" style="font-weight: 500">Masa Semai</span>: ${
                  produk.semai
                }<br />
                <span class="card-text-span" style="font-weight: 500">Masa Panen</span>: ${
                  produk.panen
                }<br />
                <span class="card-text-span" style="font-weight: 500">Lingkungan Tumbuh</span>: ${
                  produk.lingkungan
                }<br />
                <span class="card-text-span" style="font-weight: 500">Nama Ilmiah</span>: ${
                  produk.ilmiah
                }<br />
                <span class="card-text-span" style="font-weight: 500">Family</span>: ${
                  produk.family
                }<br />
              </p>
              <a href="produk.html" class="btn btn-primary" style="margin-top: 2.5rem; display: block" data-bs-toggle="modal" data-bs-target="#exampleModal" data-produk-id="${index}">Beli</a>
            </div>
          `;

      // Tambahkan card ke dalam elemen list-card-product
      listCardProduct.appendChild(card);
    });
  }

  // Panggil fungsi untuk mengisi konten card produk
  populateCardProduk();

  // Tangani acara klik pada tombol "Beli"
  const beliButtons = document.querySelectorAll(".btn.btn-primary");
  beliButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      const produkId = event.target.dataset.produkId;
      const produk = daftarProduk[produkId];

      // Seleksi elemen modal
      const modal = document.getElementById("exampleModal");
      const modalTitle = modal.querySelector(".modal-title");
      const modalBody = modal.querySelector(".modal-body");

      // Isi konten modal dengan data produk yang sesuai
      modalTitle.textContent = produk.nama;
      modalBody.innerHTML = `
            <p>Harga: ${produk.harga}</p>
            <p>Deskripsi: ${produk.deskripsi}</p>
            <p>Masa Semai: ${produk.semai}</p>
            <p>Masa Panen: ${produk.panen}</p>
            <p>Lingkungan Tumbuh: ${produk.lingkungan}</p>
            <p>Nama Ilmiah: ${produk.ilmiah}</p>
            <p>Family: ${produk.family}</p>
            <!-- Tambahkan informasi produk lainnya sesuai kebutuhan -->
          `;
    });
  });
});
