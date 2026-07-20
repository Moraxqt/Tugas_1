const umur = [8, 13, 17, 20, 25, 11];

for (let i = 0; i < umur.length; i++) {
    let status = "";
    if (umur[i] >= 17) {
        status = "Boleh Masuk";
    } else {
        status = "Tidak Boleh Masuk";
    }
    console.log(`Pengunjung ke-${i + 1} : ${umur[i]} -> ${status}`);
}