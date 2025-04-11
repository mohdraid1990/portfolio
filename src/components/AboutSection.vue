<script setup>
import profileImage from '../assets/image-person.jpeg'; // Assuming the image is in src/assets/

const profile = {
  image: profileImage,
  description: `I am a passionate frontend developer with expertise in Vue.js and modern web technologies, 
                holding a Master's degree in Information Systems and Technologies (Engineer) from 
                Saratov State Technical University named after ssgtu. Gagarin, Saratov, Russia (2019). 
                I live in Saratov, Russia, with a residence permit (ВНЖ) and all necessary documents 
                for official employment. With 1 year of team experience, I specialize in HTML5, CSS3, 
                Bootstrap, JavaScript (ES6, DOM, BOM, AJAX), GSAP animations, adaptive and cross-browser 
                layouts, APIs, Flex, Grid, Sass, WordPress, GitHub, Git, Photoshop, Figma, Canvas, 
                Swiper, and Vue.js (Options API, Composition API, Vue Router, Vuex, Pinia, Vuetify, 
                Vite, Vue CLI, Nuxt 3). I optimize for PageSpeed Insights, understand SEO and REST API, 
                and convert designs from Figma or Photoshop into code. Committed to creating beautiful, 
                responsive, and user-friendly web applications, I bring a keen eye for detail and a deep 
                understanding of user experience principles.`
}
</script>

<template>
  <section id="about" class="about">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <div class="profile-image">
        <img :src="profile.image" alt="Profile Picture" />
      </div>
      <div class="profile-text">
        <p>{{ profile.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: 6rem 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.8rem); // Responsive font size
  margin-bottom: 2rem;
  color: var(--text-color);
  position: relative;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  
  &::after {
    content: '';
    width: 80px;
    height: 4px;
    background: #3498db;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
}

.about-content {
  display: flex;
  align-items: flex-start; // Align to top for better text flow
  gap: 3rem;
  padding: 0 1rem;
}

.profile-image {
  flex-shrink: 0;
  img {
    width: 100%;
    max-width: 280px;
    border-radius: 18px;
    display: block;
    aspect-ratio: 1/1;
    object-fit: cover;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
    }
  }
}

.profile-text {
  font-size: clamp(1rem, 1.1vw, 1.2rem); // Responsive font size
  line-height: 1.8;
  letter-spacing: 0.2px;
  padding: 1.5rem;
  border-radius: 12px;

  hyphens: auto; // Better text wrapping
  text-align: justify;
  
  p {
    color: var(--text-color);
    margin: 0;
    font-weight: 400;
    max-width: 100%;
    word-spacing: 0.5px;
  }
}

/* Medium screens (tablets) */
@media (max-width: 992px) {
  .about {
    padding: 4rem 1.5rem;
  }
  
  .about-content {
    gap: 2rem;
  }
  
  .profile-image img {
    max-width: 220px;
  }
  
  .profile-text {
    font-size: 1.05rem;
    line-height: 1.7;
  }
}

/* Small screens (mobile) */
@media (max-width: 768px) {
  .about {
    padding: 3rem 1rem;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  .profile-image {
    margin-bottom: 1.5rem;
    img {
      max-width: 200px;
    }
  }

  .profile-text {
    font-size: 1rem;
    line-height: 1.6;
    padding: 1.2rem;
    text-align: left;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .about {
    padding: 2rem 0.5rem;
  }
  
  .profile-text {
    font-size: 0.6rem;
    line-height: 1.6;
    padding: 1rem;
  

        width: 310px;

  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>
