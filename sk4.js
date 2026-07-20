const stok = [12, 0, 5, 8, 0, 20];

let stokHabis = 0;
let stokTersedia = 0;

for (let i = 0; i < stok.length; i++) {
  let status = "";

  if (stok[i] === 0) {
    status = "Stok Habis";
    stokHabis++;
  } else {
    status = "Stok tersedia";
    stokTersedia++;
  }

  console.log(`Barang ke-${i + 1} : ${stok[i]} -> ${status}`);
}

console.log("");
console.log(`Jumlah barang yang habis : ${stokHabis}`);
console.log(`Jumlah barang yang masih tersedia : ${stokTersedia}`);