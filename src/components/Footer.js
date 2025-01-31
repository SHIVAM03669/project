export function Footer() {
  return `
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© ${new Date().getFullYear()} SQUAD 72. All rights reserved.</p>
        <p class="mt-2">Proudly learning at <a href="https://kalvium.com" class="text-[#FF3939] dark:text-[#FF5959] hover:underline">Kalvium</a></p>
      </div>
    </footer>
  `;
}