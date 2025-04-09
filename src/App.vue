<script setup>
import { ref, onMounted } from 'vue'
import FooterSection from './components/FooterSection.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
})
</script>

<template>
  <header class="header">
    <nav class="nav-desktop">
      <router-link to="/" class="logo">
        <span class="logo-text">Mohd</span>
        <span class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#10b981"/>
          </svg>
        </span>
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu" :class="{ 'is-open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <nav class="nav-mobile" :class="{ 'is-open': isMenuOpen }">
      <router-link to="/" @click="toggleMenu" class="nav-link">Home</router-link>
      <router-link to="/about" @click="toggleMenu" class="nav-link">About</router-link>
      <router-link to="/skills" @click="toggleMenu" class="nav-link">Skills</router-link>
      <router-link to="/projects" @click="toggleMenu" class="nav-link">Projects</router-link>
      <router-link to="/contact" @click="toggleMenu" class="nav-link">Contact</router-link>
    </nav>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <FooterSection />
</template>

<style lang="scss">
:root {
  --primary-color: #4f46e5;
  --primary-dark: #4338ca;
  --secondary-color: #10b981;
  --text-color: #1f2937;
  --bg-color: #2A1958FF;
  --section-padding: 4rem 0;
  --transition-speed: 0.3s;
  --border-radius: 8px;
  
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text-color);
  background: var(--bg-color);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.nav-desktop {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 700;
    color: var(--primary-color);
    transition: transform var(--transition-speed) ease;

    &:hover {
      transform: scale(1.05);
    }

    .logo-text {
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .logo-icon {
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      animation: spin 4s linear infinite;

      svg {
        transition: transform var(--transition-speed) ease;
      }

      &:hover {
        svg {
          transform: rotate(15deg);
        }
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;

    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1em;
      padding: 0.6rem 1.2rem;
      border-radius: var(--border-radius);
      position: relative;
      overflow: hidden;
      transition: all var(--transition-speed) ease;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(79, 70, 229, 0.1), transparent);
        transition: all var(--transition-speed) ease;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: all var(--transition-speed) ease;
        transform: translateX(-50%);
      }

      &:hover, &.router-link-active {
        color: var(--primary-color);
        
        &::before {
          left: 100%;
        }

        &::after {
          width: 80%;
        }
      }
    }
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: var(--primary-color);
    margin: 5px 0;
    border-radius: 2px;
    transition: all var(--transition-speed) ease;
  }

  &.is-open {
    span {
      &:first-child {
        transform: rotate(45deg) translate(6px, 6px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  transform: translateX(100%);
  transition: transform var(--transition-speed) ease;
  z-index: 90;

  &.is-open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 1.2rem 2rem;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.3em;
    border-radius: var(--border-radius);
    transition: all var(--transition-speed) ease;

    &:hover, &.router-link-active {
      color: var(--primary-color);
      background: rgba(79, 70, 229, 0.15);
      transform: translateX(5px);
    }
  }
}

main {
  padding: 2rem;
  min-height: calc(100vh - 6rem);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .nav-desktop {
    padding: 1rem 1.5rem;

    .nav-links {
      display: none;
    }

    .menu-toggle {
      display: block;
    }
  }

  .nav-mobile {
    display: flex;
  }

  main {
    padding: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: rgba(255, 255, 255, 0.87);
    --bg-color: #0f172a;
  }

  .header {
    background: rgba(15, 23, 42, 0.95);
  }

  .nav-mobile {
    background: rgba(15, 23, 42, 0.98);
  }

  .menu-toggle span {
    background: #ffffff;
  }
}
</style>
