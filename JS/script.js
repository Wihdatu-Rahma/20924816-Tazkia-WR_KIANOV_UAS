// fungsi ini secara bersama-sama berfungsi untuk menyimpan, mengambil, dan menampilkan data keranjang belanja pada aplikasi web,
// sehingga pengguna dapat menambahkan produk ke keranjang dan melihat jumlah produk yang sudah dipilih
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
}
function tambahKeKeranjang(nama, harga, gambar) {
    const cart = getCart();
    cart.push({ nama, harga, gambar });
    saveCart(cart);
    updateCartCount();
    alert('Produk ditambahkan ke keranjang!');
}

//fungsi ini digunakan untuk mengontrol visibilitas popup keranjang belanja
// dan memperbarui daftar produk yang ditampilkan di dalamnya,
// sehingga pengguna dapat melihat isi keranjang secara interaktif.
function toggleCart() {
    const popup = document.getElementById('cartPopup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        tampilkanIsiKeranjang();
        popup.style.display = 'block';
    }
}
function tampilkanIsiKeranjang() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const list = document.getElementById('cartItemsList');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = '<li>Keranjang kosong</li>';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '0.5rem';

        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;

        // Buat tombol menghapus
        const btnHapus = document.createElement('button');
        btnHapus.textContent = 'Hapus';
        btnHapus.style.marginLeft = '1rem';
        btnHapus.style.backgroundColor = '#c0392b';
        btnHapus.style.color = '#fff';
        btnHapus.style.border = 'none';
        btnHapus.style.borderRadius = '4px';
        btnHapus.style.cursor = 'pointer';
        btnHapus.onclick = () => {
            hapusDariKeranjang(index);
        };

        li.appendChild(btnHapus);
        list.appendChild(li);
    });
}

function hapusDariKeranjang(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index > -1 && index < cart.length) {
        cart.splice(index, 1); // Hapus item pada posisi index
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        tampilkanIsiKeranjang();
        alert('Produk berhasil dihapus dari keranjang.');
    }
}

function closeCart() {
    const popup = document.getElementById('cartPopup');
    if (popup) popup.style.display = 'none';
}

// Panggil saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCartCount);

function tambahKeKeranjang(nama, harga, gambar) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ nama, harga, gambar });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${nama} berhasil ditambahkan ke keranjang!`);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function tampilkanIsiKeranjang() {
    const cart = getCart();
    const list = document.getElementById('cartItemsList');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = '<li>Keranjang kosong.</li>';
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
        list.appendChild(li);
    });
}

function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    if (cartPopup.style.display === 'block') {
        cartPopup.style.display = 'none';
    } else {
        tampilkanIsiKeranjang();
        cartPopup.style.display = 'block';
    }
}

function updateCartCount() {
    const cart = getCart();
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
}

// Panggil saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', updateCartCount);

// Ambil data keranjang dari localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Simpan data keranjang ke localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update jumlah item di ikon keranjang
function updateCartCount() {
    const cart = getCart();
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
}

// Tampilkan isi keranjang di popup dengan tombol hapus
function tampilkanIsiKeranjang() {
    const cart = getCart();
    const list = document.getElementById('cartItemsList');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = '<li>Keranjang kosong.</li>';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '0.5rem';

        // Teks nama dan harga produk
        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;

        // Tombol hapus
        const btnHapus = document.createElement('button');
        btnHapus.textContent = 'Hapus';
        btnHapus.style.marginLeft = '1rem';
        btnHapus.style.backgroundColor = '#c0392b';
        btnHapus.style.color = '#fff';
        btnHapus.style.border = 'none';
        btnHapus.style.borderRadius = '4px';
        btnHapus.style.cursor = 'pointer';

        // Event hapus produk dari keranjang
        btnHapus.onclick = () => {
            hapusDariKeranjang(index);
        };

        li.appendChild(btnHapus);
        list.appendChild(li);
    });
}

// Fungsi hapus item dari keranjang di halaman index
function hapusDariKeranjang(index) {
    const cart = getCart();
    if (index > -1 && index < cart.length) {
        cart.splice(index, 1); // Hapus item
        saveCart(cart);
        updateCartCount();
        tampilkanIsiKeranjang();
        alert('Produk berhasil dihapus dari keranjang.');
    }
}

// Fungsi toggle popup keranjang di halaman index
function toggleCart() {
    const popup = document.getElementById('cartPopup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        tampilkanIsiKeranjang();
        popup.style.display = 'block';
    }
}

// Fungsi tutup popup keranjang di halaman index
function closeCart() {
    const popup = document.getElementById('cartPopup');
    if (popup) popup.style.display = 'none';
}

// Panggil updateCartCount saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCartCount);

