const skor = [100, 450, 800, 150, 900];

for (let i = 0; i < skor.length; i++) {
    let status = "";
    if (skor[i] >= 800) {
        status = "Mythic";
    } else if (skor[i] >= 500) {
        status = "Legend";
    } else if (skor[i] >= 300) {
        status = "Epic";
    } else {
        status = "Warrior";
    }
    console.log(`Player ${i + 1} : ${skor[i]} -> ${status}`);
} 