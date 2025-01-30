// -- Handle Navbar

// selecting the elements
const navBtn = document.querySelector(".menu");
const navBar = document.querySelector("nav .links");
const closeNav = document.querySelector(".links .close");

navBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("special");
});

document.addEventListener("click", (e) => {
  if (e.target !== navBar && e.target !== navBtn) {
    if (navBar.classList.contains("special")) {
      navBar.classList.remove("special");
    }
  }
});

// close the navbar

closeNav.addEventListener("click", () => {
  navBar.classList.remove("special");
});

// Handle active class

const links = [...document.querySelectorAll(".links li a")];

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  });
});

// -------------------------------------------------------------

// -- handle destination page (tabs)

// selecting elements
const tabs = [...document.querySelectorAll(".destination .info .tab")];
const img = document.querySelector(".destination .content img");
const h1 = document.querySelector(".destination .content h1");
const p = document.querySelector(".destination .content p");
const distance = document.querySelector(
  ".destination .content .distance span:nth-child(2)"
);
const time = document.querySelector(
  ".destination .content .time span:nth-child(2)"
);

// fetching data from json file

fetch("./assets/js/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data["destinations"];
  })
  .then((data) => {
    // set the first object in json file(moon) as a default value before click on tabs
    h1.textContent = data[0]["name"];
    p.textContent = data[0]["description"];
    distance.textContent = data[0]["distance"];
    time.textContent = data[0]["travel"];
    img.src = data[0]["images"]["png"];

    // change the info on click
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        let selectedIndex = i;
        h1.textContent = data[selectedIndex]["name"];
        p.textContent = data[selectedIndex]["description"];
        distance.textContent = data[selectedIndex]["distance"];
        time.textContent = data[selectedIndex]["travel"];
        img.src = data[selectedIndex]["images"]["png"];
      });
    });
  });

// handle active class

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// ------------------------------------------------

// -- handle crew page(bullets)

// selecting elements
const bullets = [...document.querySelectorAll(".crew .bullets li")];
const crewImg = document.querySelector(".crew .content img");
const name = document.querySelector(".crew .content h1");
const role = document.querySelector(".crew .content h2");
const bio = document.querySelector(".crew .content p ");

// fetching data from json file

fetch("./assets/js/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data["crew"];
  })
  .then((data) => {
    // set the first object in json file(moon) as a default value before click on tabs
    name.textContent = data[0]["name"];
    role.textContent = data[0]["role"];
    bio.textContent = data[0]["bio"];
    crewImg.src = data[0]["images"]["png"];

    // change the info on click
    bullets.forEach((bullet, i) => {
      bullet.addEventListener("click", () => {
        let selectedIndex = i;
        name.textContent = data[selectedIndex]["name"];
        role.textContent = data[selectedIndex]["role"];
        bio.textContent = data[selectedIndex]["bio"];
        crewImg.src = data[selectedIndex]["images"]["png"];
      });
    });
  });

// handle active class

bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// ---------------------------------------------------

// -- handle Technology page (options)

// selecting elements
const options = [...document.querySelectorAll(".technology .options .option")];
const techImg = document.querySelector(".technology .content img");
const techName = document.querySelector(".technology .content h1");
const description = document.querySelector(".technology .content p ");

// fetching data from json file

fetch("./assets/js/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data["technology"];
  })
  .then((data) => {
    // set the first object in json file(moon) as a default value before click on tabs
    techName.textContent = data[0]["name"];
    description.textContent = data[0]["description"];
    // Set the image source based on screen size
    techImg.src =
      window.innerWidth <= 991
        ? data[0]["images"]["landscape"]
        : data[0]["images"]["portrait"];
    // Update the image source on window resize
    window.addEventListener("resize", () => {
      techImg.src =
        window.innerWidth <= 991
          ? data[0]["images"]["landscape"]
          : data[0]["images"]["portrait"];
    });

    // change the info on click
    options.forEach((option, i) => {
      option.addEventListener("click", () => {
        let selectedIndex = i;
        techName.textContent = data[selectedIndex]["name"];
        description.textContent = data[selectedIndex]["description"];
        techImg.src =
          window.innerWidth <= 991
            ? data[selectedIndex]["images"]["landscape"]
            : data[selectedIndex]["images"]["portrait"];
        // Update the image source on window resize
        window.addEventListener("resize", () => {
          techImg.src =
            window.innerWidth <= 991
              ? data[selectedIndex]["images"]["landscape"]
              : data[selectedIndex]["images"]["portrait"];
        });
      });
    });
  });

// handle active class

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
