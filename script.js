const grid = document.querySelector('.grid')

function makeGrid(size) {
    for (i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.classList = "row"
        grid.appendChild(row)

        for (j = 0; j < size; j++) {
            let column = document.createElement('div')
            column.classList = "column"
            row.appendChild(column)
        }
        
    }


}
makeGrid(16)