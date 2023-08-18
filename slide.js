document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var captions = document.querySelectorAll(".caption");
  
    for (var i = 0; i < slides.length; i++) {
      slides[i].addEventListener("mouseover", showCaption);
      slides[i].addEventListener("mouseout", hideCaption);
    }
  
    function showCaption() {
      var caption = this.querySelector(".caption");
      caption.style.display = "block";
    }
  
    function hideCaption() {
      var caption = this.querySelector(".caption");
      caption.style.display = "none";
    }
  });
  function blinkImage() {
    var image = document.getElementById('myImage');
    image.classList.toggle('blink');
  }

  setInterval(blinkImage, 1000); // Toggle visibility every 500 milliseconds

  // Toggle the visibility of navigation items on small devices
function toggleNavDots() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('show-dots');
}

// Call the toggleNavDots function when the window is resized
window.addEventListener('resize', toggleNavDots);

// Call the toggleNavDots function initially
toggleNavDots();

  // Function to update time and date
  function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    
    // Format the date and time
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      timeZoneName: 'short' 
    };
    
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    
    // Update the content of the HTML element
    datetimeElement.textContent = formattedDateTime;
  }
  
  // Call the function to initially set the time and date
  updateDateTime();
  
  // Update time and date every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);

