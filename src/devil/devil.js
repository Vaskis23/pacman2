class Devil {

    constructor(r, c, grid){
        this.r = r
        this.c = c
        this.grid = grid
        this.grid[r][c] = this

        this.start()
    }
    moveDown() {
        this.grid[this.r][this.c] = new Empty()
        this.grid[++this.r][this.c] = this
    }
    moveUp() {
        this.grid[this.r][this.c] = new Empty()
        this.grid[--this.r][this.c] = this
    }
    moveRight() {
        this.grid[this.r][this.c] = new Empty()
        this.grid[this.r][++this.c] = this
    }
    moveLeft() {
        this.grid[this.r][this.c] = new Empty()
        this.grid[this.r][--this.c] = this
    }

    render(rootElement) {
        this.rootElement = rootElement
        let div = $('<div>', 'devil')
        this.rootElement.appendChild(div)
    }

    start(){
        setInterval(
            this.alive.bind(this),
            1000
        )
    }

    alive() {
        let pacman = findOnMap(gm.grid, Pacman)
    
        if(pacman){

            if(pacman.r > this.r){
                this.moveDown()
            }
            else if(pacman.r < this.r){
                this.moveUp()
            }
            else if(pacman.c < this.c){
                this.moveLeft()
            }
            else if(pacman.c > this.c){
                this.moveRight()
            }
            gm.render($('.scene'))

        }
    }
}