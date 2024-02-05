const preloader = document.querySelector(".preloader");
const preloadGif = document.querySelector(".preload-gif");
const gifs = ["EAT.gif", "SLEEP.gif", "CODE.gif"];
let currentIndex = 0;

function loadNextGif() {
  if (currentIndex < gifs.length) {
    preloadGif.src = gifs[currentIndex];
    currentIndex++;
  } else {
    // Apply fade-out transition
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    // After fade-out animation, remove the preloader
    preloader.addEventListener("transitionend", function () {
      preloader.style.display = "none";
      preloader.remove(); // Remove the preloader from the DOM
      // Re-enable scrolling after preloader is hidden
      document.body.style.overflow = "auto";
    });
  }
}

function startPreloader() {
  loadNextGif();
  setInterval(loadNextGif, 1500); // Switch GIF every 2 seconds
}

// Disable scrolling when preloader is shown
document.body.style.overflow = "hidden";

window.addEventListener("load", startPreloader);

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = now.getMinutes().toString().padStart(2, "0");
  // const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const timeText = `${hours}:${minutes} ${ampm}`;
  document.getElementById("time").textContent = timeText;
}

updateClock(); // Initial call to update the clock immediately
setInterval(updateClock, 1000); // Update the clock every second

function updateDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dateText = `${day} ${month}, ${year}`;
  document.getElementById("currentDate").textContent = dateText;
}

updateDate(); // Initial call to update the date immediately

function updateYear() {
  const now = new Date();
  const year = now.getFullYear();
  document.getElementById("currentYear").textContent = year;
}

updateYear(); // Call the function to update the year immediately

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
