const images = document.querySelectorAll("[data-src]");

const options = {
  threshold: 0.5,
  rootMargin: "50px",
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;

      img.src = img.dataset.src;

      img.classList.add("show");

      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

images.forEach((img) => observer.observe(img));
