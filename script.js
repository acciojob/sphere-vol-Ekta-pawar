function volume_sphere(event) {
      event.preventDefault(); // Prevent form from submitting

  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) {
   alert("Please enter a valid positive number for radius.");
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(4); // Rounded to 4 decimal places
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
