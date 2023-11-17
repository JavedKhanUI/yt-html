// Get the canvas element
var canvas = document.getElementById('radialChart');
var ctx = canvas.getContext('2d');

// Draw the radial progress chart
function drawRadialChart(value) {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define color ranges
  var color = '#3498db'; // Default color (blue)
  if (value >= 0 && value < 50) {
    color = '#e74c3c'; // Red for 0-49%
  } else if (value >= 50 && value < 70) {
    color = '#f39c12'; // Yellow for 50-69%
  } else if (value >= 70 && value <= 100) {
    color = '#2ecc71'; // Green for 70-100%
  }

  // Draw the background circle
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 25, 0, 2 * Math.PI);
  ctx.strokeStyle = '#e0e0e0'; // Light gray
  ctx.lineWidth = 30;
  ctx.stroke();

  // Draw the progress arc
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 25, -0.5 * Math.PI, (value / 100) * 2 * Math.PI - 0.5 * Math.PI);
  ctx.strokeStyle = color;
  ctx.lineWidth = 30;
  ctx.stroke();

  // Display the percentage in the center
  ctx.fillStyle = color;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(value + '%', canvas.width / 2, canvas.height / 2);
}

// Call the drawRadialChart function with a value of 80%
drawRadialChart(70);