const menu = [10000, 25000, 18000, 12000, 50000];

for (let i = 0; i < menu.length; i++) {
    let status = "";
    if (menu[i] >= 20000) {
        status = "Menu Premium";
    } else {
        status = "Menu Biasa";
    }
    console.log(`menu ke-${i + 1} : ${menu[i]} -> ${status}`);
}