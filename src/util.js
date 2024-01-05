function $(tag, className) {
    if (tag.startsWith("<") && tag.endsWith(">")) {
        let el = document.createElement(tag.substring(1, tag.length-1))
        if(className !== undefined) {
            el.className = className
        }
        return el   
    } else {
        return document.querySelector(tag)
    }
}
//HW1: find -> array with ALL objects
function findOnMap(grid, classRef) {
    //a)create empty array
    for (let ri = 0; ri < 10; ri++) {
        for (let ci = 0; ci < 10; ci++) {
            if (grid[ri][ci] instanceof classRef){
                return grid[ri][ci]
                //b)array - add new element
            }
        }
    }
    //c)return the array
}
function randomCoord() {
    return parseInt(Math.random() * 9.9)
}
function randomPlace(grid) {

    let tries = 100

    while(tries-- > 0) {
        let r = randomCoord()
        let c = randomCoord()

        if(grid[r][c] instanceof Empty) {
            return[r, c]
        }
    }
}