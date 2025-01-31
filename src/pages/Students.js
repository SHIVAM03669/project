import { students } from '../data/students.js';
import { StudentCard } from '../components/StudentCard.js';

export function Students() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Meet Our Squad</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          ${students.map(student => `
            <div class="student-card flex justify-center">
              ${StudentCard({ student })}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}