

const menuData = {
  hot: [
    {
      name: "Signature Espresso",
      tag: "Espresso",
      desc: "Double shot of our signature blend — bold, complex, and silky smooth.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80"
    },
    {
      name: "Masala Chai Latte",
      tag: "Desi Special",
      desc: "Espresso pulled through a spiced chai concentrate with steamed milk.",
      price: "₹150",
      img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80"
    },
    {
      name: "Haldi Doodh Latte",
      tag: "Specialty",
      desc: "Traditional turmeric milk with ginger, black pepper & a shot of espresso.",
      price: "₹160",
      img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80"
    },
    {
      name: "Classic Cappuccino",
      tag: "Cappuccino",
      desc: "Equal parts espresso, steamed milk, and velvety foam.",
      price: "₹190",
      img: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400&q=80"
    }
  ],
  cold: [
    {
      name: "Midnight Cold Brew",
      tag: "Cold Brew",
      desc: "Steeped 20 hours for a smooth, low-acid, intensely rich brew.",
      price: "₹220",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
    },
    {
      name: "Iced Caramel Macchiato",
      tag: "Iced",
      desc: "Vanilla syrup, espresso shots, milk over ice with caramel drizzle.",
      price: "₹240",
      img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&q=80"
    },
    {
      name: "Rose Sharbat Cold Brew",
      tag: "Desi Fusion",
      desc: "Cold brew blended with rose syrup and a hint of cardamom.",
      price: "₹230",
      img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80"
    },
    {
      name: "Nariyal Cold Frappé",
      tag: "Blended",
      desc: "Espresso blended with fresh coconut water, ice and coconut cream.",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80"
    }
  ],
  food: [
    {
      name: "Maska Bun",
      tag: "Bengali Classic",
      desc: "Soft Kolkata-style bun slathered with salted butter — a café staple.",
      price: "₹60",
      img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80"
    },
    {
      name: "Egg Chicken Roll",
      tag: "Kolkata Street",
      desc: "Crispy paratha wrapped with egg, spiced chicken filling and kasundi.",
      price: "₹120",
      img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80"
    },
    {
      name: "Mishti Doi Cheesecake",
      tag: "Dessert",
      desc: "Fusion cheesecake with traditional Bengali sweetened yogurt base.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1558303959-b9a28a2c4c39?w=400&q=80"
    },
    {
      name: "Nolen Gur Brownie",
      tag: "Baked",
      desc: "Fudgy dark chocolate brownie drizzled with date palm jaggery.",
      price: "₹140",
      img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80"
    }
  ]
};

const testimonialsData = [
  {
    text: "BrewHaven-এ এসে মনে হয় কফি পান করা একটা উৎসব। Cold Brew-টা এত মসৃণ যে এক চুমুকে মন ভরে যায়। কলকাতার সেরা কফে হাউস নিঃসন্দেহে!",
    name: "সায়ন্তিকা চট্টোপাধ্যায়",
    role: "ফুড ব্লগার · কলকাতা",
    stars: 5,
  },
  {
    text: "Park Street থেকে শুরু করে Coffee House — অনেক জায়গায় কফি খেয়েছি। কিন্তু BrewHaven-এর Signature Espresso একদম আলাদা মাত্রার। অসাধারণ অভিজ্ঞতা।",
    name: "অর্ণব মুখোপাধ্যায়",
    role: "সাংবাদিক · সল্টলেক, কলকাতা",
    stars: 5,
     },
  {
    text: "Nolen Gur Brownie আর এক কাপ Masala Chai Latte — এই দুটো মিলিয়ে পুরো বিকেলটা অন্যরকম হয়ে যায়। কর্মীরাও অত্যন্ত আন্তরিক।",
    name: "দেবলীনা বন্দ্যোপাধ্যায়",
    role: "ইন্টেরিয়র ডিজাইনার · বালিগঞ্জ",
    stars: 5,
   },
  {
    text: "সকালে অফিস যাওয়ার আগে এখানে একটু বসি। Haldi Doodh Latte দিয়ে দিন শুরু করলে পুরো দিনটাই ভালো কাটে। দারুণ পরিবেশ, দারুণ কফি!",
    name: "রাজর্ষি সেনগুপ্ত",
    role: "সফটওয়্যার ইঞ্জিনিয়ার · নিউটাউন, কলকাতা",
    stars: 5,
    }
];


// NAVBAR


const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Scroll style
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  document.getElementById("backTop").classList.toggle("visible", window.scrollY > 400);
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});


// MENU TABS & CARDS


let currentTab = "hot";
const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(category) {
  menuGrid.innerHTML = "";
  menuData[category].forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-tag">${item.tag}</div>
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.price}</span>
          <button class="menu-card-btn">Order</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });

  // Order button interaction
  menuGrid.querySelectorAll(".menu-card-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.textContent = "Added ✓";
      btn.style.background = "var(--clr-accent)";
      btn.style.color = "#fff";
      setTimeout(() => {
        btn.textContent = "Order";
        btn.style.background = "";
        btn.style.color = "";
      }, 1800);
    });
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    renderMenu(currentTab);
  });
});

renderMenu("hot"); // initial render


// TESTIMONIALS SLIDER


const track = document.getElementById("testimonialsTrack");
const dotsContainer = document.getElementById("testimonialDots");
let currentSlide = 0;
let autoSlideTimer;

function buildTestimonials() {
  testimonialsData.forEach(item => {
    const stars = "★".repeat(item.stars) + "☆".repeat(5 - item.stars);
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${item.text}</p>
      <div class="testimonial-author">
        <img class="testimonial-avatar" src="${item.avatar}" alt="${item.name}">
        <div>
          <div class="testimonial-name">${item.name}</div>
          <div class="testimonial-role">${item.role}</div>
        </div>
        <div class="testimonial-stars">${stars}</div>
      </div>
    `;
    track.appendChild(card);
  });

  // Dots
  testimonialsData.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = `dot${i === 0 ? " active" : ""}`;
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  currentSlide = (index + testimonialsData.length) % testimonialsData.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === currentSlide);
  });
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 4500);
}

buildTestimonials();
startAutoSlide();

// Pause on hover
track.closest(".testimonials-wrapper").addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
track.closest(".testimonials-wrapper").addEventListener("mouseleave", startAutoSlide);

// Touch/swipe support
let touchStartX = 0;
track.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener("touchend", e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
});


// GALLERY LIGHTBOX


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});


// CONTACT FORM


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type='submit']");
  const original = btn.innerHTML;

  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = "linear-gradient(135deg, #2d7a3a, #3da54d)";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = "";
    btn.disabled = false;
    contactForm.reset();
  }, 3000);
});


// BACK TO TOP


document.getElementById("backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// SCROLL REVEAL (Intersection Observer)


const revealElements = document.querySelectorAll(
  ".about-grid, .menu-card, .testimonial-card, .gallery-item, .contact-card, .feature"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});


// ACTIVE NAV LINK ON SCROLL


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < top + height)
        ? "var(--clr-text)"
        : "";
    }
  });
}, { passive: true });