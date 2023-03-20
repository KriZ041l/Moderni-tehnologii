const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//#373e40;
//<li><a href="#about" data-after="About">About</a></li>

/*<!-- Service Section -->
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">How we<span> work </span>with you</h1>
        <p>
          We design buildings and places that are purposeful, simple, efficient and beautiful.</p>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/></div>
          <h2>Purpose</h2>
          <p>
            Our design ethos combines our clients’ goals, with the wider needs of society. That means humane and forward-looking choices, combining elegance with enduring impact. The rapidly designed and timber-structured Believe in Better Building is built on a clear social idea of community focus and education.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/></div>
          <h2>Simplicity</h2>
          <p>JArchitectural projects reflect our clients’ greatest ambitions and operational needs. We overcome complexity by  harnessing Arup’s collective expertise to inform the ultimate design solution for every brief. We distilled the many performance requirements of a modern car production plant to design the award-winning Jaguar Land Rover Engineering Centre.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/></div>
          <h2>Efficiency</h2>
          <p>Today’s design choices must result in responsible, economical outcomes that deliver more with less. Our team embeds circular and regenerative principles, to ensure buildings consume less resources whilst retaining future flexibility and value in a changing world. Our design on the 17 stations of the Cityringen metro in Copenhagen, represents an elegant and cost-effective blueprint for city transport architecture.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/></div>
          <h2>Beauty</h2>
          <p>Good architecture should lift the spirits and provide an inclusive and enjoyable experience. Beauty has many definitions, visual, experiential and social. We prioritise light, space and emotion to produce buildings that resonate with a lasting identity.  The multi-purpose Singapore Sports Hub is a much-loved and in demand destination on the city’s skyline.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Service Section --> */