export function About() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white dark:text-gray-900">About Squad 72</h2>
        <div class="max-w-4xl mx-auto space-y-12">
          <div class="bg-gray-800 dark:bg-white rounded-xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold mb-4 text-white dark:text-gray-900">Our Vision</h3>
            <p class="text-gray-300 dark:text-gray-600 mb-6">
              Squad 72 represents a collective of ambitious developers committed to pushing the boundaries of technology and innovation. We're not just learning to code; we're learning to create solutions that matter.
            </p>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center p-6 bg-gray-700/50 dark:bg-gray-100 rounded-lg">
                <div class="text-3xl mb-2 text-[#6B4EFF]">18+</div>
                <div class="text-white dark:text-gray-900">Active Members</div>
              </div>
              <div class="text-center p-6 bg-gray-700/50 dark:bg-gray-100 rounded-lg">
                <div class="text-3xl mb-2 text-[#6B4EFF]">20+</div>
                <div class="text-white dark:text-gray-900">Projects Completed</div>
              </div>
              <div class="text-center p-6 bg-gray-700/50 dark:bg-gray-100 rounded-lg">
                <div class="text-3xl mb-2 text-[#6B4EFF]">3+</div>
                <div class="text-white dark:text-gray-900">Hackathons Won</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 dark:bg-white rounded-xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold mb-4 text-white dark:text-gray-900">Our Journey</h3>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">1</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Foundation Phase</h4>
                  <p class="text-gray-300 dark:text-gray-600">Started with fundamentals of programming and web development, building strong basics in HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">2</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Advanced Technologies</h4>
                  <p class="text-gray-300 dark:text-gray-600">Mastered modern frameworks and tools like React, Node.js, and cloud platforms.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">3</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Real-world Projects</h4>
                  <p class="text-gray-300 dark:text-gray-600">Worked on industry-level projects, solving real problems and building practical solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 dark:bg-white rounded-xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold mb-4 text-white dark:text-gray-900">Our Culture</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Collaborative Learning</h4>
                <p class="text-gray-300 dark:text-gray-600">We believe in growing together through pair programming, code reviews, and knowledge sharing sessions.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Innovation First</h4>
                <p class="text-gray-300 dark:text-gray-600">Encouraging creative solutions and out-of-the-box thinking in every project we undertake.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Continuous Growth</h4>
                <p class="text-gray-300 dark:text-gray-600">Regular workshops, hackathons, and learning sessions to stay ahead in technology.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white dark:text-gray-900">Community Support</h4>
                <p class="text-gray-300 dark:text-gray-600">A strong support system where every member helps others grow and succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}