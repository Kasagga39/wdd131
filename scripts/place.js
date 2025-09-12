
        // Function to update the last modified date and time
        function updateLastModified() {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit'
            };
            const formattedDate = now.toLocaleDateString('en-US', options);
            document.querySelector('.last-modified').textContent = `Last Modification: ${formattedDate}`;
        }

        // Function to simulate live weather updates
        function updateWeather() {
            const tempElement = document.querySelector('.temperature');
            const conditionsElement = document.querySelector('.conditions');
            const windElement = document.querySelector('.weather-detail:nth-child(1) div:nth-child(3)');
            const windChillElement = document.querySelector('.weather-detail:nth-child(2) div:nth-child(3)');
            
            // Generate random variations in weather data
            const tempVariation = (Math.random() * 2 - 1).toFixed(1);
            const newTemp = (10 + parseFloat(tempVariation)).toFixed(1);
            
            const windVariation = (Math.random() * 4 - 2).toFixed(1);
            const newWind = (5 + parseFloat(windVariation)).toFixed(1);
            
            const windChillVariation = (Math.random() * 1 - 0.5).toFixed(1);
            const newWindChill = (9.8 + parseFloat(windChillVariation)).toFixed(1);
            
            // Update the DOM with new values
            tempElement.textContent = `${newTemp} °C`;
            windElement.textContent = `${newWind} km/h`;
            windChillElement.textContent = `${newWindChill} °C`;
            
            // Randomly change conditions occasionally
            if (Math.random() > 0.7) {
                const conditions = ['Partly Cloudy', 'Mostly Sunny', 'Light Rain', 'Clear Sky'];
                conditionsElement.textContent = conditions[Math.floor(Math.random() * conditions.length)];
            }
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            updateLastModified();
            
            // Update weather every 60 seconds
            setInterval(updateWeather, 60000);
            
            // Add interactive effect to data items
            const dataItems = document.querySelectorAll('.data-item');
            dataItems.forEach(item => {
                item.addEventListener('click', function() {
                    this.style.transform = 'scale(1.02)';
                    this.style.transition = 'transform 0.2s ease';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 200);
                });
            });
        });
    