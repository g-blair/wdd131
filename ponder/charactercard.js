let health = 40;
let level = 7;

function attack() {
    health -= 5;
    if (health < 0) health = 0;
    document.getElementById("health").textContent = health;
}

function levelUp() {
    level += 1;
    health += 10;
    document.getElementById("level").textContent = level;
    document.getElementById("health").textContent = health;
}