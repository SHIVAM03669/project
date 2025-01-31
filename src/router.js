export function router() {
  const routes = {
    '/': () => import('./pages/Home.js').then(m => m.Home()),
    '/mentors': () => import('./pages/Mentors.js').then(m => m.Mentors()),
    '/students': () => import('./pages/Students.js').then(m => m.Students()),
    '/projects': () => import('./pages/Projects.js').then(m => m.Projects()),
    '/memories': () => import('./pages/Memories.js').then(m => m.Memories()),
    '/about': () => import('./pages/About.js').then(m => m.About())
  };

  async function handleRoute() {
    const path = window.location.pathname;
    
    // Load all pages for the main view
    const [Home, Mentors, Students, Projects, Memories, About] = await Promise.all([
      import('./pages/Home.js').then(m => m.Home()),
      import('./pages/Mentors.js').then(m => m.Mentors()),
      import('./pages/Students.js').then(m => m.Students()),
      import('./pages/Projects.js').then(m => m.Projects()),
      import('./pages/Memories.js').then(m => m.Memories()),
      import('./pages/About.js').then(m => m.About())
    ]);
    
    const navigation = await import('./components/Navigation.js').then(m => m.Navigation());
    const footer = await import('./components/Footer.js').then(m => m.Footer());
    
    const app = document.querySelector('#app');
    app.innerHTML = `
      <div class="fullpage-wrapper">
        ${navigation}
        <div id="fullpage">
          <div class="section" data-anchor="home">${Home}</div>
          <div class="section" data-anchor="mentors">${Mentors}</div>
          <div class="section" data-anchor="students">${Students}</div>
          <div class="section" data-anchor="projects">${Projects}</div>
          <div class="section" data-anchor="memories">${Memories}</div>
          <div class="section" data-anchor="about">
            ${About}
            ${footer}
          </div>
        </div>
      </div>
    `;

    // Initialize fullPage.js
    new fullpage('#fullpage', {
      licenseKey: 'YOUR_KEY_HERE',
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Home', 'Mentors', 'Students', 'Projects', 'Memories', 'About'],
      showActiveTooltip: true,
      scrollingSpeed: 1000,
      onLeave: (origin, destination, direction) => {
        // Add zoom out effect to the leaving section
        origin.item.style.transform = 'scale(0.8)';
        origin.item.style.opacity = '0';
        
        // Add zoom in effect to the destination section
        destination.item.style.transform = 'scale(1)';
        destination.item.style.opacity = '1';
        
        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
          const href = link.getAttribute('href').substring(1);
          if (href === destination.anchor) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // Handle navigation clicks
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('/')) {
          e.preventDefault();
          const anchor = href.substring(1) || 'home';
          fullpage_api.moveTo(anchor);
          window.history.pushState({}, '', href);
        }
      });
    });
  }

  window.addEventListener('popstate', handleRoute);
  handleRoute();

  // Force dark theme
  document.documentElement.classList.add('dark');
}