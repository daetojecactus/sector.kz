document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".header__link-dropdown");
  const phoneDropdownToggle = document.querySelector("#phoneDropdownToggle");
  const burgerToggle = document.querySelector(".header__icon-btn");
  const phoneToggle = document.querySelector(".header__icon-phone");
  const darkOverlay = document.querySelector(".dark-overlay");
  const dropdownMenu = document.querySelector(".header__dropdown-list");
  const phoneDropdownMenu = document.querySelector("#phoneDropdownMenu");
  const burgerMenu = document.querySelector(".header-burger");
  const phoneMenu = document.querySelector(".header-burger__list-phone");
  const header = document.querySelector(".header");

  let dropdownOpen = false;
  let phoneDropdownOpen = false;
  let burgerMenuOpen = false;
  let phoneMenuOpen = false;

  function updateOverlay() {
    if (dropdownOpen || phoneDropdownOpen || burgerMenuOpen || phoneMenuOpen) {
      darkOverlay.style.display = "block";
      document.body.classList.add("darken-main");
    } else {
      darkOverlay.style.display = "none";
      document.body.classList.remove("darken-main");
    }
  }

  function closeAllMenus() {
    dropdownOpen = false;
    phoneDropdownOpen = false;
    burgerMenuOpen = false;
    phoneMenuOpen = false;
    updateOverlay();
    dropdownToggle.setAttribute("aria-expanded", "false");
    phoneDropdownToggle.setAttribute("aria-expanded", "false");
  }

  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownOpen = !dropdownOpen;
    phoneDropdownOpen = false;
    burgerMenuOpen = false;
    phoneMenuOpen = false;
    updateOverlay();
    this.setAttribute("aria-expanded", String(dropdownOpen));
  });

  phoneDropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();
    phoneDropdownOpen = !phoneDropdownOpen;
    dropdownOpen = false;
    burgerMenuOpen = false;
    phoneMenuOpen = false;
    updateOverlay();
    this.setAttribute("aria-expanded", String(phoneDropdownOpen));
  });

  burgerToggle.addEventListener("click", function (event) {
    event.preventDefault();
    burgerMenuOpen = !burgerMenuOpen;
    dropdownOpen = false;
    phoneDropdownOpen = false;
    phoneMenuOpen = false;
    updateOverlay();
  });

  phoneToggle.addEventListener("click", function (event) {
    event.preventDefault();
    phoneMenuOpen = !phoneMenuOpen;
    dropdownOpen = false;
    phoneDropdownOpen = false;
    burgerMenuOpen = false;
    updateOverlay();
  });

  darkOverlay.addEventListener("click", function () {
    closeAllMenus();
  });

  dropdownMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("header__dropdown-link")) {
      closeAllMenus();
    }
  });

  phoneDropdownMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("header__dropdown-link")) {
      closeAllMenus();
    }
  });

  burgerMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("header-burger__link")) {
      closeAllMenus();
    }
  });

  phoneMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("header-burger__link-phone")) {
      closeAllMenus();
    }
  });

  header.addEventListener("click", function (event) {
    if (
      !event.target.closest(".header__icon-btn") &&
      !event.target.closest(".header__link-dropdown") &&
      !event.target.closest(".header__icon-phone") &&
      !event.target.closest(".header-burger__list-phone")
    ) {
      closeAllMenus();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tab1 = document.getElementById("tab-1");
  const tabContent1 = document.getElementById("tab-content-1");
  const tab2 = document.getElementById("tab-2");
  const tabContent2 = document.getElementById("tab-content-2");
  const tab3 = document.getElementById("tab-3");
  const tabContent3 = document.getElementById("tab-content-3");
  const backBtns = document.querySelectorAll(".tab__btn");

  tab1.addEventListener("click", () => {
    tabContent1.classList.toggle("show-tab");
  });
  tab2.addEventListener("click", () => {
    tabContent2.classList.toggle("show-tab");
  });

  backBtns.forEach((backBtn) => {
    backBtn.addEventListener("click", () => {
      tabContent1.classList.remove("show-tab");
      tabContent2.classList.remove("show-tab");
      tabContent3.classList.remove("show-tab");
    });
  });
});

const swiperClients = new Swiper(".clients__swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

const swiperReviews = new Swiper(".reviews__swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
