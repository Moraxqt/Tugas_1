const nilai = [80, 95, 70, 88, 100, 65];
let nilaiTerbesar = nilai[0];
let nilaiTerkecil = nilai[0];

for (let i = 1; i < nilai.length; i++) {
  if (nilai[i] > nilaiTerbesar) {
    nilaiTerbesar = nilai[i];
  }
  if (nilai[i] < nilaiTerkecil) {
    nilaiTerkecil = nilai[i];
  }
}

console.log(`Nilai tertinggi : ${nilaiTerbesar}`);
console.log(`Nilai terendah : ${nilaiTerkecil}`);