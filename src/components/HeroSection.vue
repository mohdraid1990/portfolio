<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'

const router = useRouter()
const titles = [
  'Mohammed raed hamid',
  'Frontend Developer && Vue.js Framework', 
  'MSc in Information Systems & Tech (Engineer)'
]
const currentTitle = ref('')
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

const typeText = () => {
  const current = titles[titleIndex.value]
  
  if (isDeleting.value) {
    currentTitle.value = current.substring(0, charIndex.value - 1)
    charIndex.value--
  } else {
    currentTitle.value = current.substring(0, charIndex.value + 1)
    charIndex.value++
  }

  if (!isDeleting.value && charIndex.value === current.length) {
    isDeleting.value = true
    setTimeout(typeText, 300) // Reduced from 500ms to 300ms (pause at end)
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    titleIndex.value = (titleIndex.value + 1) % titles.length
    setTimeout(typeText, 200) // Reduced from 300ms to 200ms (pause before next)
  } else {
    setTimeout(typeText, isDeleting.value ? 50 : 100) // Faster typing: 100ms (typing), 50ms (deleting)
  }
}

const navigateToProjects = () => {
  router.push({ name: 'projects' })
}

onMounted(() => {
  typeText()
  
  gsap.from('.hero-content h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.hero-content .typing-text', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to My Portfolio</h1>
      <p class="typing-text">I am a <span class="highlight">{{ currentTitle }}</span></p>
      <button @click="navigateToProjects" class="cta-button">View My Projects</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
  background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1) 0%, rgba(var(--secondary-color-rgb), 0.1) 100%);
}

.hero-content {
  h1 {
    font-size: 4em;
    line-height: 2.1;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientFlow 1s ease-in-out infinite;
  }

  .typing-text {
    font-size: 2em;
    margin-bottom: 2rem;
    opacity: 0.9;

    .highlight {
      color: #9690ed;
      border-right: 1px solid currentColor;
      padding-right: 4px;
      font-weight: 600;
    }
  }
}

.cta-button {
  display: inline-block;
  padding: 1em 2.5em;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 1.1em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: 0.3s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(100%);
    }
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 768px) {
  .hero-content {
    h1 {
      font-size: 1.5em;
    }

    .typing-text {
      font-size: 1em;
    }
  }
}
</style>
