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
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #43669BFF 0%, rgb(180, 187, 199) 100%);
  border-radius: 10px;
  margin: 10rem auto;
  max-width: 1200px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 2rem;
  color: #E2E8EEFF;
  position: relative;
  &::after {
    content: '';
    width: 50px;
    height: 3px;
    background: #3498db;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.about-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0 1rem;
}

.profile-image {
  flex-shrink: 0;
  img {
    width: 100%;
    max-width: 250px; // Slightly larger for better visibility
    border-radius: 20px; // Softer corners instead of full circle
    display: block;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 4px solid #fff; // White border for a clean look
    &:hover {
      transform: translateY(-5px); // Subtle lift on hover
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  }
}

.profile-text {
  font-size: 1.2em;
  line-height: 1.8;
  color: #34495e;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  p {
    margin: 0;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 2rem 1rem;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .profile-image {
    margin-bottom: 1.5rem;
    img {
      max-width: 200px;
    }
  }

  .profile-text {
    font-size: 1em;
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2em;
  }
}
</style>
