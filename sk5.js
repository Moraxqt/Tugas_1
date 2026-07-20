const hadir = [true,false,true,true,false,true];
let totalHadir = 0;
let totalTidakHadir = 0;

for (let i = 0; i < hadir.length; i++) {
    let status = "";
    if (hadir[i] === true) {
        status = "Hadir";
        totalHadir++;
    } else {
        status = "Tidak Hadir";
        totalTidakHadir++;
    }
    console.log(`Siswa ke-${i + 1} : ${status}`);
}

console.log(""); 
console.log(`Total siswa hadir : ${totalHadir}`);
console.log(`Total siswa tidak hadir : ${totalTidakHadir}`);