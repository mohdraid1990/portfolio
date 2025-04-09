<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const currentYear = new Date().getFullYear()

onMounted(() => {
  // GSAP animations for footer
  gsap.from('.footer-content', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3
  })
})
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">
        <p>© {{ currentYear }} Mohd - Frontend Developer</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); // Dark gradient for contrast
  color: #fff;
  text-align: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  border-radius: 10px;

}

.copyright {
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.5px;
  opacity: 0.9;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, background 0.3s ease;
  p {
    margin: 0;
  }

}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 0;
  }

  .footer-content {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1.5rem;
  }

  .copyright {
    font-size: 0.9em;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1rem 0;
  }

  .footer-content {
    padding: 0 0.5rem;
  }

  .copyright {
    font-size: 0.85em;
  }
}
</style>