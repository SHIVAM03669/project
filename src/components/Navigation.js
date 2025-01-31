export function Navigation() {
  return `
    <nav class="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 py-4 border-b border-gray-800">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-primary-500">SQUAD 72</a>
        <div class="flex items-center gap-6">
          ${[
            ['/', 'Home'],
            ['/mentors', 'Mentors'], 
            ['/students', 'Students'],
            ['/projects', 'Projects'],
            ['/memories', 'Memories'],
            ['/about', 'About']
          ].map(([path, label]) => `
            <a href="${path}" 
               class="text-gray-200 nav-link relative hover:text-customRed transition-colors ${
                 path === window.location.pathname ? 'active font-semibold text-customRed' : ''
               }">
              ${label}
              ${path === window.location.pathname ? 
                `<span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#ef3837] rounded-full"></span>` 
                : ''
              }
            </a>
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}