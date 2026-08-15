/* =========================================================
   SOT VOY TOOLS
   Homepage JavaScript
========================================================= */


/* =========================================================
   TOOL REGISTRY

   This becomes the foundation for 100–200+ tools.
========================================================= */

const tools = [
  {
    name: "Word Counter",
    category: "Text Tools",
    description: "Count words, characters and lines."
  },

  {
    name: "Character Counter",
    category: "Text Tools",
    description: "Count characters with or without spaces."
  },

  {
    name: "Case Converter",
    category: "Text Tools",
    description: "Convert text between different cases."
  },

  {
    name: "Reading Time Calculator",
    category: "Text Tools",
    description: "Estimate how long text takes to read."
  },

  {
    name: "Percentage Calculator",
    category: "Calculators",
    description: "Calculate percentages quickly."
  },

  {
    name: "Age Calculator",
    category: "Calculators",
    description: "Calculate someone's exact age."
  },

  {
    name: "Discount Calculator",
    category: "Calculators",
    description: "Calculate discounts and final prices."
  },

  {
    name: "Average Calculator",
    category: "Calculators",
    description: "Calculate the average of numbers."
  },

  {
    name: "JSON Formatter",
    category: "Developer Tools",
    description: "Format JSON into readable code."
  },

  {
    name: "JSON Validator",
    category: "Developer Tools",
    description: "Check whether JSON is valid."
  },

  {
    name: "Base64 Encoder",
    category: "Developer Tools",
    description: "Encode text using Base64."
  },

  {
    name: "URL Encoder",
    category: "Developer Tools",
    description: "Encode URLs and query strings."
  },

  {
    name: "QR Code Generator",
    category: "Generators",
    description: "Create QR codes from text or URLs."
  },

  {
    name: "Password Generator",
    category: "Generators",
    description: "Generate strong random passwords."
  },

  {
    name: "Random Number Generator",
    category: "Generators",
    description: "Generate random numbers."
  },

  {
    name: "Image Compressor",
    category: "Image Tools",
    description: "Compress images directly in your browser."
  },

  {
    name: "Image Resizer",
    category: "Image Tools",
    description: "Resize images to your preferred dimensions."
  },

  {
    name: "Countdown Timer",
    category: "Date & Time",
    description: "Create a simple countdown timer."
  },

  {
    name: "Unit Converter",
    category: "Converters",
    description: "Convert common units quickly."
  }
];


/* =========================================================
   THEME
========================================================= */

const themeToggle =
  document.getElementById("theme-toggle");

const themeIcon =
  document.getElementById("theme-icon");


function getSystemTheme() {

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
}


function applyTheme(theme) {

  let activeTheme = theme;

  if (theme === "system") {
    activeTheme = getSystemTheme();
  }

  document.documentElement.dataset.theme =
    activeTheme;

  localStorage.setItem(
    "sot-voy-theme",
    theme
  );

  updateThemeIcon(theme);
}


function updateThemeIcon(theme) {

  if (!themeIcon) return;

  if (theme === "dark") {
    themeIcon.textContent = "☾";
  }

  else if (theme === "light") {
    themeIcon.textContent = "☀";
  }

  else {
    themeIcon.textContent = "◐";
  }
}


function cycleTheme() {

  const current =
    localStorage.getItem("sot-voy-theme") ||
    "system";

  const next = {

    system: "dark",

    dark: "light",

    light: "system"

  }[current];

  applyTheme(next);
}


const savedTheme =
  localStorage.getItem("sot-voy-theme") ||
  "system";

applyTheme(savedTheme);


themeToggle?.addEventListener(
  "click",
  cycleTheme
);


/* =========================================================
   SYSTEM THEME CHANGES
========================================================= */

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {

    const current =
      localStorage.getItem("sot-voy-theme");

    if (current === "system") {
      applyTheme("system");
    }

  });


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
  document.getElementById("menu-button");

const mobileNav =
  document.getElementById("mobile-nav");


menuButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      mobileNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  }
);


mobileNav?.querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileNav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });


/* =========================================================
   TOOL SEARCH
========================================================= */

const searchInput =
  document.getElementById("tool-search");

const searchResults =
  document.getElementById("search-results");


function searchTools(query) {

  const normalized =
    query.trim().toLowerCase();

  if (!normalized) {

    searchResults.classList.remove(
      "visible"
    );

    searchResults.innerHTML = "";

    return;

  }


  const matches =
    tools
      .filter(tool => {

        return (
          tool.name
            .toLowerCase()
            .includes(normalized) ||

          tool.category
            .toLowerCase()
            .includes(normalized)
        );

      })
      .slice(0, 6);


  if (!matches.length) {

    searchResults.innerHTML = `
      <div class="search-result">
        <div>
          <strong>No tools found</strong>
          <small>Try another search.</small>
        </div>
      </div>
    `;

    searchResults.classList.add(
      "visible"
    );

    return;
  }


  searchResults.innerHTML =
    matches
      .map(tool => {

        return `
          <a
            href="#"
            class="search-result"
            data-search-tool="${tool.name}"
          >

            <div>
              <strong>${tool.name}</strong>
              <small>
                ${tool.description}
              </small>
            </div>

            <span>→</span>

          </a>
        `;

      })
      .join("");


  searchResults.classList.add(
    "visible"
  );


  searchResults
    .querySelectorAll("[data-search-tool]")
    .forEach(result => {

      result.addEventListener(
        "click",
        event => {

          event.preventDefault();

          const toolName =
            result.dataset.searchTool;

          handleToolSelection(toolName);

        }
      );

    });

}


function handleToolSelection(toolName) {

  /*
    For now this is intentionally a placeholder.

    When the actual tools are built,
    this will navigate to the corresponding
    tool URL.
  */

  searchInput.value = toolName;

  searchResults.classList.remove(
    "visible"
  );

  console.log(
    `Selected tool: ${toolName}`
  );

}


searchInput?.addEventListener(
  "input",
  event => {

    searchTools(event.target.value);

  }
);


/* =========================================================
   "/" KEY → SEARCH
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    const active =
      document.activeElement;

    const isTyping =
      active &&
      (
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA"
      );


    if (
      event.key === "/" &&
      !isTyping
    ) {

      event.preventDefault();

      searchInput?.focus();

    }


    if (
      event.key === "Escape"
    ) {

      searchResults?.classList.remove(
        "visible"
      );

      searchInput?.blur();

    }

  }
);


/* =========================================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      !event.target.closest(
        ".hero-search"
      )
    ) {

      searchResults?.classList.remove(
        "visible"
      );

    }

  }
);


/* =========================================================
   TOOL CARD PLACEHOLDER
========================================================= */

document
  .querySelectorAll("[data-tool]")
  .forEach(card => {

    card.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const name =
          card.dataset.tool;

        handleToolSelection(name);

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        searchInput?.focus();

      }
    );

  });


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
  document.getElementById(
    "current-year"
  );

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}