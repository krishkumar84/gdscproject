(function($) {
      // Back to top button 
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    //  Star ScrollTop
    $('.scrolltop-mf').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    //  Accordion faq
    $(".accordion").on("click", ".title", function() {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(document).ready(function() {

        $('.color-choose input').on('click', function() {
            var headphonesColor = $(this).attr('data-image');

            $('.active').removeClass('active');
            $('.about-img img[data-image = ' + headphonesColor + ']').addClass('active');
            $(this).addClass('active');
        });

    });
});








    // Get all accordion items
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Attach click event listener to each accordion item
  accordionItems.forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.accordion-info');

    title.addEventListener('click', () => {
      item.classList.toggle('active');
      info.classList.toggle('active');

      // Check if the info is currently active
      if (info.classList.contains('active')) {
        info.style.maxHeight = item.classList.contains('active') ? info.scrollHeight + 'px' : '0';
      } else {
        info.style.maxHeight = null;
      }
    });
  });




  // Get the color radio buttons and the about-img container
const colorRadios = document.querySelectorAll('input[name="color"]');
const aboutImgContainer = document.querySelector('.about-img');

// Attach event listeners to the color radio buttons
colorRadios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    const selectedColor = event.target.getAttribute('data-image');
    
    // Remove 'active' class from all images
    const images = aboutImgContainer.querySelectorAll('img');
    images.forEach(img => img.classList.remove('active'));
    
    // Add 'active' class to the selected color image
    const selectedImage = aboutImgContainer.querySelector(`img[data-image="${selectedColor}"]`);
    selectedImage.classList.add('active');
  });
});







  
  
  
  
  
  
  