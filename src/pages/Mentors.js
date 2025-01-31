import { mentors } from '../data/mentors.js';
import { MentorCard } from '../components/MentorCard.js';

export function Mentors() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Mentors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          ${mentors.map(mentor => MentorCard({ mentor })).join('')}
        </div>
      </div>
    </section>
  `;
}