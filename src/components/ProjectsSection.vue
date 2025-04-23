<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { gsap } from "gsap";

// Import images for the projects
import carImage from "../assets/CARS.png";
import TravilImage from "../assets/Travil.webp";
import GameImage from "../assets/Game.webp";
import sngosar from "../assets/sngosar.png";
import sngosar1 from "../assets/sngosar-0.png";
import bondi from "../assets/bondi.webp";
import resturant from "../assets/resturant.webp";
import Toster from "../assets/Toster.webp";
import weather from "../assets/weather-api.webp";
import Convert from "../assets/Convert-money.webp";
import furniture from "../assets/furniture.webp";
import Rangi from "../assets/rangi.webp";
import Toster1 from "../assets/Tooster-media.webp";
import PRODUCT from "../assets/PRODUCT-MANAGEMENT-SYSTEM.png";
import ChatApp from "../assets/chat-app.png";
import Todo from "../assets/Todo-list.webp";
import Shop from "../assets/Shop-api.png";
import WEATHERVUEJS from "../assets/WEATHER-APP-VUEJS.png";
import pro from "../assets/pro-mang-vuejs.png";
import Post from "../assets/add-posts.png";
import Transilation from "../assets/Transilation-App.png";
import nuxt from "../assets/nuxt-api.png";
import Book from "../assets/book.png";
import Film from "../assets/film.png";
import Dashboard from "../assets/Dashboard.png";
import softline from "../assets/soft-line.png";
import Travel from "../assets/travel.png";



// Array of project objects with their details
const projects = [
  {
    title: "Rental-cars",
    description:
      "A modern car rental platform with a sleek, responsive design and intuitive navigation.",
    image: carImage,
    url: "https://mohdraid1990.github.io/Rental-cars/",
    tags: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Travel",
    description:
      "A stylish travel agency site with a responsive design, showcasing destinations and intuitive navigation.",
    image: TravilImage,
    url: "https://mohdraid1990.github.io/travil/",
    tags: ["HTML", "CSS", "Java Script"],
  },

  {
    title: "Game",
    description:
      "A dynamic gaming site with interactive features and a modern design, built for an engaging user experience.",
    image: GameImage,
    url: "https://mohdraid1990.github.io/Pro-Game/",
    tags: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "sngosar",
    description:
      "A professional industrial equipment site with a robust, modern design tailored for business needs.",
    image: sngosar1,
    url: "https://mohdraid1990.github.io/Neftegazoborudovanie/",
    tags: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "bondi",
    description:
      "A sleek, responsive website built with Bootstrap 5, featuring modern design and rapid development.",
    image: bondi,
    url: "https://mohdraid1990.github.io/Restaurant/",
    tags: ["HTML", "CSS", "Java Script", "BootStap"],
  },
  {
    title: "Restaurant",
    description:
      "An elegant restaurant site with a modern layout, showcasing menus and a delightful user experience.",
    image: resturant,
    url: "https://mohdraid1990.github.io/Bondi_bootstrap5/",
    tags: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "sngosar",
    description:
      "A corporate site for industrial solutions, featuring a clean design and user-friendly navigation.",
    image: sngosar,
    url: "https://mohdraid1990.github.io/sngosar/",
    tags: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Toster",
    description:
      "A minimalist template site with a creative design and smooth, responsive functionality.",
    image: Toster,
    url: "https://mohdraid1990.github.io/Temp-/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    description:
      "A real-time weather application with API integration, offering a clean and responsive design.",
    image: weather,
    url: "https://mohdraid1990.github.io/Weather-App/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Convert Money",
    description:
      "A currency converter app with API integration, featuring a simple and responsive interface.",
    image: Convert,
    url: "https://mohdraid1990.github.io/convert-money-/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Furniture",
    description:
      "A modern furniture e-commerce site with a sleek design and responsive product showcase.",
    image: furniture,
    url: "https://mohdraid1990.github.io/furniture/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Rangi",
    description:
      "A vibrant and creative website template with a colorful design and responsive layout.",
    image: Rangi,
    url: "https://mohdraid1990.github.io/rangi/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Toster Media",
    description:
      "A media-focused site with a modern, responsive design and engaging visual elements.",
    image: Toster1,
    url: "https://mohdraid1990.github.io/Toster-media/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Product Management System",
    description:
      "A streamlined product management tool with a clean interface and efficient functionality.",
    image: PRODUCT,
    url: "https://mohdraid1990.github.io/PRODUCT-MANAGEMENT-SYSTEM/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with Vue.js, featuring a sleek and interactive interface.",
    image: ChatApp,
    url: "https://chat-app-vuejs.netlify.app/",
    tags: ["HTML", "SASS", "Vue.js", "Pinia"],
  },
  {
    title: "Todo List with API",
    description:
      "A task management app built with Vue.js, integrating APIs for efficient todo tracking.",
    image: Todo,
    url: "https://main--joyful-chimera-f3e293.netlify.app/#/%E2%80%8EThank",
    tags: ["HTML", "SASS", "Vue.js", "API"],
  },
  {
    title: "Shop with API",
    description:
      "An e-commerce platform built with Vue.js, featuring API-driven product listings and a modern design.",
    image: Shop,
    url: "https://master--friendly-dasik-cbcccf.netlify.app/",
    tags: ["HTML", "SASS", "Vue.js", "API"],
  },
  {
    title: "Weather App (Vue.js)",
    description:
      "A Vue.js-powered weather app with API integration, delivering real-time updates in a sleek design.",
    image: WEATHERVUEJS,
    url: "https://main--dynamic-narwhal-935610.netlify.app/",
    tags: ["HTML", "SASS", "Vue.js", "API"],
  },
  {
    title: "Product Management (Vue.js)",
    description:
      "A Vue.js-based product management system with a clean, efficient interface for inventory tracking.",
    image: pro,
    url: "https://main--celebrated-torrone-3f794f.netlify.app/",
    tags: ["HTML", "SASS", "Vue.js"],
  },
  {
    title: "Add Posts (Nuxt.js)",
    description:
      "A Nuxt.js app for creating posts with API integration, featuring a modern and responsive design.",
    image: Post,
    url: "https://radiant-profiterole-85905a.netlify.app/",
    tags: ["HTML", "SASS", "Nuxt.js", "API"],
  },
  {
    title: "Translation App (Vite)",
    description:
      "A translation app built with Vite and Vue.js, offering a fast, responsive multilingual experience.",
    image: Transilation,
    url: "https://vocal-frangipane-73e5c3.netlify.app/",
    tags: ["HTML", "SASS", "Vite", "Vue.js"],
  },
  {
    title: "Nuxt API Project",
    description:
      "A Nuxt.js project with API integration, featuring a modern design and seamless functionality.",
    image: nuxt,
    url: "https://project-api-nuxt.netlify.app/",
    tags: ["HTML", "SASS", "Pinia", "Nuxt.js", "API"],
  },
  {
    title: "Book App",
    description:
      "A Vue.js-based book app with a clean design, offering an intuitive interface for book management.",
    image: Book,
    url: "https://book-0.netlify.app/",
    tags: ["HTML", "SASS", "Vue.js"],
  },
  {
    title: "movie App",
    description:
      "A Vue.js-powered film app with a sleek design, showcasing movie details and a responsive layout.",
    image: Film,
    url: "https://film-app-0.netlify.app/",
    tags: ["HTML", "SASS", "API", "Pinia", "Vue.js"],
  },

  {
    title: "Dashboard App",
    description:
      "A Vue.js-powered task management dashboard with a responsive Kanban board, enabling users to organize projects and tasks seamlessly. Features multi-language support (Arabic/English), dark/light themes, and drag-and-drop functionality.",
    image: Dashboard,
    url: "https://famous-bonbon-63ea46.netlify.app/",
    tags: ["HTML", "SCSS", "Vue.js", "Pinia", "Vue-i18n", "vuedraggable"],
  },
  {
    title: "Softline Web Application",
    description:
      "A modern web application built with Vue.js, featuring a responsive and intuitive interface for streamlined user interactions. Includes dynamic content rendering, theme switching (dark/light modes), and seamless API integration for real-time data updates.",
    image: softline,
    url: "https://softline.surge.sh/",
    tags: ["HTML", "CSS", "Sass", "Vue.js", "Pinia", "Vite"],
  },
    {
    title: "Travel Web Application",
    description:
      "A modern travel web application built with Vue.js, featuring a responsive and intuitive interface, dynamic content rendering, and theme switching",
    image: Travel,
    url: "https://travel-vuejs.vercel.app/",
    tags: ["HTML",  "Sass", "Vue.js",  "Vite"],
  },
];

// Reactive variable to track the filter state
const showFrameworksOnly = ref(false);

// Computed property to filter projects based on the toggle state
const filteredProjects = computed(() => {
  if (showFrameworksOnly.value) {
    // Switch ON: Show only projects WITH frameworks (Vue.js, Nuxt.js, Vite, Pinia)
    return projects.filter((project) =>
      project.tags.some((tag) =>
        ["Vue.js", "Nuxt.js", "Vite", "Pinia"].includes(tag)
      )
    );
  } else {
    // Switch OFF: Show only projects WITHOUT frameworks (only HTML, CSS, JavaScript)
    return projects.filter((project) => {
      const tags = project.tags;
      // Check if tags only include HTML, CSS, JavaScript (and variants) and no frameworks
      return tags.every((tag) =>
        ["HTML", "CSS", "JavaScript", "Java Script"].includes(tag)
      );
    });
  }
});

// GSAP animations
onMounted(() => {
  gsap.from(".section-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  animateProjects(); // Initial animation
});

// Watch for filter changes to re-run animation
watch(filteredProjects, () => {
  animateProjects();
});

// Function to animate project cards smoothly
const animateProjects = () => {
  gsap.fromTo(
    ".project-card",
    { opacity: 0, scale: 0.95 }, // Start slightly scaled down
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    }
  );
};
</script>

<template>
  <section id="projects" class="projects">
    <h2 class="section-title">Projects</h2>
    <div class="filter-toggle">
      <label for="framework-toggle">Show projects with frameworks only</label>
      <input
        type="checkbox"
        id="framework-toggle"
        v-model="showFrameworksOnly"
      />
    </div>
    <div class="projects-grid">
      <a
        v-for="project in filteredProjects"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles for the projects section
.projects {
  padding: 6rem 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto; // Center the section
}

// Section title styling
.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1rem;
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

// Styles for the filter toggle switch
.filter-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  label {
    font-size: 1.2em;
    color: var(--text-color);
  }

  input[type="checkbox"] {
    appearance: none;
    width: 50px;
    height: 24px;
    background: #ddd;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;

    &:checked {
      background: #3498db;
    }

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: transform 0.3s ease;
    }

    &:checked::before {
      transform: translateX(26px);
    }
  }
}

// Grid layout for project cards
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
  min-height: 600px; // Set a minimum height to stabilize layout
  align-content: start; // Prevent stretching
}

// Project card styling
.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%; // Ensure cards fill their grid cell

  &:hover {
    transform: scale(1.05);
  }
}

// Project image styling
.project-image {
  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    transition: all 0.2s ease-in;
    padding-top: 20px;
  }
}

// Project content styling
.project-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 0 0.75rem;
    color: #3498db;
    font-size: 1.5em;
    font-weight: 600;
  }

  p {
    color: #2c3e50;
    font-size: 1em;
    line-height: 1.6;
    margin: 0 0 1rem;
    flex-grow: 1;
  }
}

// Tags styling
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  border: 1px solid rgba(52, 152, 219, 0.3);
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #3498db;
    color: #fff;
  }
}

// Responsive design for tablets
@media (max-width: 768px) {
  .projects {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .section-title {
    font-size: 2em;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    min-height: 400px; // Adjusted for smaller screens
  }

  .project-card {
    border-radius: 10px;
  }

  .project-image img {
    height: 200px;
  }

  .project-content {
    padding: 1rem;

    h3 {
      font-size: 1.3em;
    }

    p {
      font-size: 0.95em;
    }

    .tag {
      font-size: 0.85em;
    }
  }
}

// Responsive design for mobile devices
@media (max-width: 480px) {
  .filter-toggle label {
    font-size: 0.8em;
  }

  .projects {
    padding: 1.5rem 0.5rem;
  }

  .projects-grid {
    justify-content: center;
    min-height: 300px; // Adjusted for mobile
  }

  .project-image img {
    height: 180px;
  }
}

@media (max-width: 340px) {
  .filter-toggle input {
    width: 95px !important;
  }
}
</style>
