document.addEventListener('DOMContentLoaded', function() {
    const pixelGrid = document.querySelector('.grid');

    // Function to create a pixel element
    function createSquare() {
        const square = document.createElement('div');
        square.className = 'pixel';
        square.style.backgroundColor = 'lightgray'; // Default color (neutral)
        return square;
    }
    
    // Function to initialize the pixel grid
    function initializePixelGrid(num) {
        const pixelGrid = document.querySelector('.grid');
        pixelGrid.innerHTML = ''; // Clear existing content
    
        const gridSize = 300;
        const pixelSize = gridSize / num;
    
        for (let i = 0; i < num; i++) {
            const row = document.createElement('div');
            row.className = 'row';
    
            for (let j = 0; j < num; j++) {
                const square = document.createElement('div');
                square.className = 'pixel';
                square.style.width = pixelSize + 'px';
                square.style.height = pixelSize + 'px';
                row.appendChild(square);
            }
    
            pixelGrid.appendChild(row);
        }
    }
    

    initializePixelGrid(4); // Initialize the pixel grid

    // Function to change the color of a pixel on hover
    function changeColor() {
        const squares = document.querySelectorAll('.grid');
        squares.forEach(square => {
            square.addEventListener('mouseover', function(event) {
                // event.target.style.backgroundColor = 'black';
                const randomColor = getRandomColor();
                event.target.style.backgroundColor = randomColor;
            });
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    
    const changeButton = document.getElementsByClassName('new');

    function changeGrid() {
        // num = prompt("Enter a number between 1 and 64");
        num = document.getElementById('inputText').value;
        initializePixelGrid(num)};


    changeColor();
    
    const myForm = document.getElementById('myForm');
    const inputText = document.getElementById('inputText');
    const submitButton = document.getElementById('new');

    // Define a function that handles form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the value from the input field
        const inputValue = inputText.value;
        // alert if the input is not a number between 1 and 64
        if (inputValue < 1 || inputValue > 64) {
            alert("Please enter a number between 1 and 64");
            return;
        }
        // Call your desired function with the input value
        changeGrid(inputValue);
    }

    // Attach an event listener to the form
    myForm.addEventListener('submit', handleSubmit);
});

// Your custom function to process the input
function changeGrid(value) {
    initializePixelGrid(num)};
