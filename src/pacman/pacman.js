class Pacman {
    constructor(r, c, grid) {
        this.r = r;
        this.c = c;
        this.grid = grid;
        this.grid[r][c] = this;
        this.status = "alive";
        this.score = 0;
        this.health = 100; // Предположим, что у пакмана 100 здоровья
    }
    moveDown() {
        this.grid[this.r++][this.c] = new Empty()
        this.collisionUpdate()
        
    }
    moveUp() {
        this.grid[this.r--][this.c] = new Empty()
        this.collisionUpdate()
        
    }
    moveRight() {
        this.grid[this.r][this.c++] = new Empty()
        this.collisionUpdate()
        
    }
    moveLeft() {
        this.grid[this.r][this.c--] = new Empty()
        this.collisionUpdate()
        
    }

    collisionUpdate() {
        if (this.grid[this.r][this.c] instanceof Bomb) {
            this.status = "exploding";
            this.health -= 25; // Уменьшаем здоровье на 25 при взрыве бомбы
            if (this.health <= 0) {
                this.status = "dead";
                alert("Game Over!");
            }
        }
        if (this.grid[this.r][this.c] instanceof Coin) {
            this.score += 25; // Добавляем 25 очков при сборе монеты
            alert(`YeeeE! Score: ${this.score}`);
        }
        this.grid[this.r][this.c] = this;
    }

    render(rootElement) {
        this.rootElement = rootElement;
        let div = $('<div>', `pacman ${this.status}`);
        div.innerHTML = `Score: ${this.score} | Health: ${this.health}`;
        this.rootElement.appendChild(div);
    }

}