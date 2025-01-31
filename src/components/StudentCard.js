export function StudentCard(props) {
  const student = props.student;
  const wrapper = document.createElement('div');
  
  const html = `
    <div class="card">
      <button class="mail">
        <svg class="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <rect rx="2" y="4" x="2" height="16" width="20" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
      <div class="profile-pic">
        <img src="${student.photo}" alt="${student.name}" />
      </div>
      <div class="bottom">
        <div class="content">
          <span class="name">${student.name}</span>
          <span class="about-me">${student.bio}</span>
        </div>
        <div class="bottom-bottom">
          <div class="social-links-container">
            <a href="${student.linkedin}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 16 15.999" height="15.999" width="16" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(6 598)" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" />
              </svg>
            </a>
            <a href="${student.github}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
          <button class="button">Contact Me</button>
        </div>
      </div>
    </div>
  `;

  wrapper.innerHTML = html;
  return wrapper.innerHTML;
}

// Add styles to the document head
const style = document.createElement('style');
style.textContent = `
.content {
  font-family: 'Poppins', sans-serif;
}
  .card {
    width: 280px;
    height: 280px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px, rgba(0, 0, 0, 0.3) 0px 25px 20px;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
    z-index: 10;
    cursor: pointer;
  }

  .card .mail svg {
    stroke: #6B4EFF;
    stroke-width: 3px;
    transition: all 0.3s ease;
  }

  .card .mail svg:hover {
    stroke: #6B4EFF;
    transform: scale(1.1);
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #121827;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
  }

  .card .profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
    transition: all 0.5s ease-in-out 0s;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #6B4EFF;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(107, 78, 255, 0.3) 0px 5px 15px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
    padding-bottom: 4rem;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 1rem;
    line-height: 1.4;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease;
  }

  .card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: white;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: #6B4EFF;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #f8f8f8;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 3px solid #6B4EFF;
    box-shadow: rgba(107, 78, 255, 0.3) 0px 8px 16px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic img {
    transform: scale(1.5);
    object-position: center;
    transition: all 0.5s ease-in-out 0.5s;
  }
`;

document.head.appendChild(style);