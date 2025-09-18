
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Set last modified date
        document.getElementById('last-modified').textContent = document.lastModified;
        
        // Windchill calculation
        function calculateWindChill(temp, windSpeed) {
            // Using metric formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        }
        
        // Get temperature and wind speed values
        const temperature = 10; // Static value in Celsius
        const windSpeed = 5;    // Static value in km/h
        
        // Calculate wind chill if conditions are met
        let windChill = "N/A";
        if (temperature <= 10 && windSpeed > 4.8) {
            windChill = `${calculateWindChill(temperature, windSpeed)}°C`;
        }
        
        // Display wind chill factor
        document.getElementById('wind-chill').textContent = windChill;
    