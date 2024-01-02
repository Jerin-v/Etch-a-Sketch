const grid = document.querySelector('.grid')
const reset = document.querySelector('button')

function makeGrid(size) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for (i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.classList = "row"
        wrapper.appendChild(row)

        for (j = 0; j < size; j++) {
            const widthAndHeight = 960 / size 
            let column = document.createElement('div')
            column.classList = "column"
            column.style.width = `${widthAndHeight}px`
            column.style.height = `${widthAndHeight}px`
            // mouse enter listener to change background color
            column.addEventListener('mouseenter', () => {
                column.style.backgroundColor = '#2596be';
            })
            row.appendChild(column)
        }
        
    }
    grid.appendChild(wrapper)


}

reset.addEventListener('click', () => {
    let userSize = parseInt(prompt("Enter dimentions of new grid"))

    while (userSize > 100) {
        userSize = parseInt(prompt("Enter a number smaller than 100"))
    }

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        makeGrid(userSize)
    } else {
        wrapper.remove()
        makeGrid(userSize)
    }
})

makeGrid(16)



