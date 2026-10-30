// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav ul');
  
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = 'var(--charcoal)';
      nav.style.padding = '1rem';
      nav.style.gap = '1rem';
    });
  }

  // Talent filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const talentCards = document.querySelectorAll('.talent-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      talentCards.forEach(card => {
        if (filter === 'all' || card.dataset.platforms.includes(filter) || card.dataset.niche.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Form toggle
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const type = btn.dataset.type;
      const budgetLabel = document.querySelector('.budget-label');
      const companyLabel = document.querySelector('.company-label');
      
      if (type === 'brand') {
        if (budgetLabel) budgetLabel.textContent = 'Budget (optional)';
        if (companyLabel) companyLabel.textContent = 'Company';
      } else {
        if (budgetLabel) budgetLabel.textContent = 'Audience size (approx)';
        if (companyLabel) companyLabel.textContent = 'Channel / Platform';
      }
    });
  });

  // Modal for enquire
  const enquireTriggers = document.querySelectorAll('.open-enquire');
  const modal = document.getElementById('enquireModal');
  const closeModal = document.querySelector('.close-modal');
  
  enquireTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });
  
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Form submission (client-side demo)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // In production, replace with Formspree, Netlify Forms, or backend
      alert('Thank you for your enquiry! We will be in touch shortly at the email provided.');
      form.reset();
      
      if (modal) modal.classList.remove('active');
    });
  });

  // Simple carousel auto-scroll (optional enhancement)
  const carousel = document.querySelector('.talent-carousel');
  if (carousel) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount += 320;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 4000);
  }
});
