const produk = ["Laptop", "Mouse", "Keyboard", "Monitor", "Flashdisk"];
const harga = [7000000, 150000, 350000, 1800000, 120000];

for (let i = 0; i < produk.length; i++) {
    let status = "";
    if (harga[i] > 1000000) {
        status = "Produk Mahal";
    } else {
        status = "Produk Murah";
    }
    console.log(`${produk[i]} - Rp${harga[i]} -> ${status}`);
}