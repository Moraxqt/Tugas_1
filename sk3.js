const hero = ["Layla", "Ling", "Franco", "Fanny", "Miya", "Eudora"];

for (let i = 0; i < hero.length; i++) {
  let status = "";

  if (hero[i][0] === "F") {
    status = "Hero Assassin/Tank Favorit";
  } else {
    status = "Hero Biasa";
  }

  console.log(`${hero[i]} -> ${status}`);
}