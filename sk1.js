const nama = "Budi";
const umur = 20;
const hargaBarang = [12000, 15000, 8000, 5000];

let totalBelanja = 0;
for (let i = 0; i < hargaBarang.length; i++) {
  totalBelanja += hargaBarang[i];
}

let status = "";

if (totalBelanja > 30000) {
  console.log("Selamat! Anda mendapatkan diskon.");
  status = "Mendapat Diskon";
} else {
  console.log("Total belanja belum mencapai batas diskon.");
  status = "Tidak Mendapat Diskon";
}

console.log(""); 

console.log(`Nama : ${nama}`, `Umur : ${umur}`, `Total Belanja : ${totalBelanja}`, `Status : ${status}`);