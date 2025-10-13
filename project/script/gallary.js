
    // Enhanced Gallery Data Array
    const galleryProjects = [
      {
        id: 1,
        name: "Masaka School Solar Installation",
        image: "images/solarcctv-installation.jpg",
        category: "solar",
        description: "Complete solar power system installation at Masaka Secondary School, providing reliable electricity for classrooms and administrative buildings."
      },
      {
        id: 2,
        name: "Commercial CCTV Security System",
        image: "images/setup.jpg",
        category: "security",
        description: "Advanced CCTV surveillance system installed at a commercial complex in Kampala, featuring 24/7 monitoring and remote access capabilities."
      },
      {
        id: 3,
        name: "Home Inverter Backup System",
        image: "images/inverter.jpg",
        category: "energy",
        description: "Residential inverter and battery backup system providing uninterrupted power supply during outages for homes in Wakiso district."
      },
      {
        id: 4,
        name: "Professional Installation Team",
        image: "images/team.jpg",
        category: "solar",
        description: "Our certified technicians installing high-efficiency solar panels on a residential property in Entebbe."
      },
      {
        id: 5,
        name: "Transformer Installation Project",
        image: "images/transformer.jpg",
        category: "energy",
        description: "Industrial transformer installation for a manufacturing plant, ensuring stable power distribution and voltage regulation."
      },
      {
        id: 6,
        name: "Rooftop Solar Array",
        image: "images/solar-roof.jpg",
        category: "solar",
        description: "Large-scale rooftop solar panel installation on a commercial building in Jinja, reducing grid dependency by 80%."
      },
      {
        id: 7,
        name: "Solar Street Lighting",
        image: "images/solar-streetlights.jpg",
        category: "solar",
        description: "Solar-powered street light installation along major roads in Mbarara, enhancing community safety and reducing energy costs."
      },
      {
        id: 8,
        name: "Advanced Security Monitoring",
        image: "images/monitors.jpg",
        category: "security",
        description: "State-of-the-art security monitoring center with multiple displays for real-time surveillance of corporate facilities."
      }
    ];

    // Function to generate gallery items
    function generateGallery() {
      const galleryContainer = document.getElementById('galleryContainer');
      galleryContainer.innerHTML = '';

      galleryProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', project.category);
        galleryItem.setAttribute('data-id', project.id);

        galleryItem.innerHTML = `
          <div class="image-container">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
            <div class="overlay">
              <button class="view-btn" data-id="${project.id}">View Details</button>
            </div>
          </div>
          <div class="caption">
            <h3>${project.name}</h3>
            <p>${project.description.substring(0, 100)}...</p>
          </div>
        `;

        galleryContainer.appendChild(galleryItem);
      });

      // Add event listeners to view buttons
      document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const projectId = parseInt(this.getAttribute('data-id'));
          openModal(projectId);
        });
      });
    }

    // Function to filter gallery items
    function filterGallery(category) {
      const items = document.querySelectorAll('.gallery-item');
      
      items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Function to open modal with project details
    function openModal(projectId) {
      const project = galleryProjects.find(p => p.id === projectId);
      if (!project) return;

      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      const modalCaption = document.getElementById('modalCaption');
      const modalDescription = document.getElementById('modalDescription');

      modalImg.src = project.image;
      modalImg.alt = project.name;
      modalCaption.textContent = project.name;
      modalDescription.textContent = project.description;

      modal.style.display = 'block';
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
      generateGallery();
      
      // Set current year in footer
      document.getElementById('year').textContent = new Date().getFullYear();

      // Filter buttons functionality
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          filterGallery(this.getAttribute('data-filter'));
        });
      });

      // Close modal functionality
      document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('imageModal').style.display = 'none';
      });

      // Close modal when clicking outside
      window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  