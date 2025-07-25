
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  // Static weather data
  const tempCelsius = 8;      // °C
  const windSpeedKmh = 10;   // km/h

  // Display static values
  document.getElementById('temperature').textContent = `${tempCelsius}°C`;
  document.getElementById('windSpeed').textContent = `${windSpeedKmh} km/h`;

  // Calculate and display wind chill if conditions met
  let windChillText = "N/A";

  if (tempCelsius <= 10 && windSpeedKmh > 4.8) {
    windChillText = calculateWindChill(tempCelsius, windSpeedKmh).toFixed(1) + '°C';
  }

  document.getElementById('windChill').textContent = windChillText;
});

// Wind chill calculation function (metric)
function calculateWindChill(temp, windSpeed) {
  // Wind chill formula for Celsius and km/h
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}
