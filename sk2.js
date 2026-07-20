const nilai = [90, 75, 60, 45, 88];
const BATAS_LULUS = 75;
let jumlahLulus = 0;
let jumlahTidakLulus = 0;

for (let i = 0; i < nilai.length; i++) { 
  let status = "";
  if (nilai[i] >= BATAS_LULUS) {
    status = "Lulus";
    jumlahLulus++;
  } else {
    status = "Tidak Lulus";
    jumlahTidakLulus++;
  }
  console.log(`Siswa ke-${i + 1} : ${nilai[i]} -> ${status}`);
}

console.log(""); 
console.log(`Jumlah yang lulus : ${jumlahLulus}`);
console.log(`Jumlah yang tidak lulus : ${jumlahTidakLulus}`);