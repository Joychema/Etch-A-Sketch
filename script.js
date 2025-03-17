const container = document.querySelector('#container');
const gridsquare = 16*16;

for(i=0; i<gridsquare; i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    div.addEventListener('mouseover', () =>{
        // div.classList.add('hover'); a class can be created to change the color of the grid
        div.style.backgroundColor = 'black';
    })
}
const btn = document.querySelector('button');
// const container = document.querySelector('#container');
btn.addEventListener('click', () =>{
    let newGrid = prompt('Enter the new grid size', '16');
    newGrid = parseInt(newGrid); //converts the string to an integer
    
    // Check if the input is a number between 1 and 100
    if (isNaN(newGrid) || newGrid < 1 || newGrid > 100){
        alert('Please enter a number between 1 and 100');
        return;
    }
    
    container.innerHTML = ''; //clears the existing grid
    
    // Update grid size using CSS (styles.css)
    container.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;

    // Create new grid
    for(i=0; i<newGrid*newGrid; i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    }
})