const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set background color
ctx.fillStyle = '#333';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Display Hello World text
ctx.fillStyle = '#fff';
ctx.font = '40px Arial';
ctx.textAlign = 'center';
ctx.fillText('Hello, Tower Defense!', canvas.width / 2, canvas.height / 2);
