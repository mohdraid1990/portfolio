<script setup>
const skills = [
  { name: "HTML & CSS (Flex,Grid)", icon: "🎨" },
  { name: "Sass", icon: "🎨" },
  { name: "BEM", icon: "🧱" },

  { name: "Responsive Design (All Screen Sizes)", icon: "📱" },
  { name: "CSS Animation", icon: "🌟" },
  { name: "GSAP Animation", icon: "✨" },
  { name: "Bootstrap", icon: "📏" },
  { name: "JavaScript", icon: "🟨" },
  { name: "API & JSON", icon: "🔗" },
  { name: "OOP", icon: "🧩" },
  { name: "AJAX", icon: "📡" },
  { name: "Vue.js", icon: "⚡" },
  { name: "Vuex", icon: "🗃️" },
  { name: "Pinia", icon: "📦" },
  { name: "Nuxt.js", icon: "🌐" },
  { name: "Vuetify", icon: "🖼️" },
  { name: "Vite", icon: "🚀" },

  { name: "GitHub & Git", icon: "🔄" },
  { name: "GitLab", icon: "🛠️" },
  { name: "NPM", icon: "📚" },
];
</script>

<template>
  <section id="skills" class="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="skill-icon">{{ skill.icon }}</div>
        <h3>{{ skill.name }}</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.skills {
  padding: 6rem 2rem;
  border-radius: 10px;
  max-width: 1200px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 2.5rem;
  color: var(--text-color);
  position: relative;
  &::after {
    content: "";
    width: 60px;
    height: 4px;
    background: #3498db;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  justify-content: center;
}

.skill-card {
  background: var(--text-color);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(52, 152, 219, 0.2); // Subtle border
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
}

.skill-icon {
  font-size: 2em;
  margin-bottom: 0.75rem;
  color: #3498db; // Matches the theme
}

h3 {
  font-size: 1.1em;
  color: #2c3e50;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .section-title {
    font-size: 2em;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .skill-icon {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1em;
  }
}

@media (max-width: 480px) {

  .skill-card {
    padding: 0.8rem;
  }

  .skill-icon {
    font-size: 1.5em;
  }
}
</style>
