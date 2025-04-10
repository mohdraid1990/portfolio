<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/mohdraid1990", icon: "🐱" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-hameed-04b795267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: "💼",
  },
];

const contactInfo = {
  whatsapp: "+79962662350", // Replace with your WhatsApp number
  email: "mohdraid62@yahoo.com", // Replace with your email
};

onMounted(() => {
  // GSAP animations
  gsap.from(".section-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".contact-content", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".social-link, .contact-item", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    stagger: 0.2, // Staggered animation for each item
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Get in Touch</h2>
    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <span class="icon">📱</span>
          <a
            :href="`https://wa.me/${contactInfo.whatsapp.replace(
              /[^0-9]/g,
              ''
            )}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ contactInfo.whatsapp }}
          </a>
        </div>
        <div class="contact-item">
          <span class="icon">✉️</span>
          <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
        </div>
      </div>
      <div class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <span class="icon">{{ link.icon }}</span>
          <span>{{ link.name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
 padding: 6rem 2rem;

  max-width: 1200px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 2.5rem;
  color:var(--text-color);
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

.contact-content {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 0 1rem;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  .icon {
    font-size: 1.5em;
    color: #3498db;
  }
  a {
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    &:hover {
      color: #3498db;
    }
  }
}

.social-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1em;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    .icon,
    span {
      color: #3498db;
    }
  }
  .icon {
    font-size: 1.5em;
    color: #2c3e50;
    transition: color 0.3s ease;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem;

  }

  .section-title {
    font-size: 2em;
    &::after {
      width: 50px;
      height: 3px;
    }
  }

  .contact-content {
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }

  .contact-item,
  .social-link {
    padding: 0.7rem;
    .icon {
      font-size: 1.3em;
    }
    a,
    span {
font-size: 0.7em;

    }
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 1.5rem 0.5rem;
  }

  .section-title {
    font-size: 1.8em;
  }

  .contact-item,
  .social-link {
    padding: 0.7rem;
  }
 
}
</style>
