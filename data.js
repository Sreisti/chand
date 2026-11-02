/* ============================================================
   SCRAPBOOK DATA — edit everything in this file
   ------------------------------------------------------------
   This is the ONLY file you need to touch to customize the
   scrapbook for a friend. Swap photos, text, colors here.

   To make a SECOND version for a different friend:
   1. Duplicate the whole "friendship-scrapbook" folder
   2. Rename it (e.g. "scrapbook-jamie")
   3. Edit THIS file inside the new folder
   Everything else (index.html, style.css, script.js) can stay
   exactly the same.
   ============================================================ */

const SCRAPBOOK = {

  /* ---------- THEME ----------
     Change these hex codes to re-color the whole magazine
     for each friend (e.g. pink+gold for one, teal+orange
     for another). */
  theme: {
    primary: "#d43f8d",     // magenta/pink — main accent (titles, ribbons)
    secondary: "#d4af37",   // gold — second accent (highlights, tape)
    paper: "#fff8ec",       // warm cream page background
    ink: "#4a1207",         // deep maroon-brown text color
    fontDisplay: "'Yatra One', serif", // bold festive display font
    fontScript: "'Kalam', cursive",    // handwritten-style font
    moonGold: "#d4af37",
    moonSilver: "#c9ccd1",
    moonBlue: "#7fd4e0",
  },

  magazineName: "CHANDANA MAGAZINE",  // big masthead title on the cover
  friendName: "Chandana Hemakumar",
  birthday: "November 3",
  issueNumber: "01",
  coverPhoto: "images/IMG_4879.JPG",

  /* ---------- COVER ---------- */
  cover: {
    kicker: "TURNING 20 • SPECIAL EDITION",
    title: "ENTERING MAIN CHARACTER ERA",
    subtitle: "Celebrating [FRIEND NAME]",
    coverLines: [
      "10 Reasons I Love You →",
      "Our Favorite Memories",
      "This Day in History",
    ],
  },

  /* ---------- EDITOR'S NOTE ---------- */
  editorsNote: {
    heading: "From the Editor",
    paragraphs: [
      "Dear Chand,",
      "As an engineer at Purdue on your birthday, I had to make something digital for you. I hope you have a wonderful birthday at USF!",
    ],
    signOff: "With love,",
    signature: "Sreisti Chowdhury",
  },

  /* ---------- PHOTO ALBUM ----------
     Add/remove objects freely. "src" is the image path,
     "caption" shows under the photo and in the popup. */
  photos: [
    { src: "images/IMG_7770.jpg", caption: "If you weren't capable the opportunity would have never come your way. You belong." },
    { src: "images/IMG_5717.jpg", caption: "Impossible is a word only found in the dictionary of fools" },
    { src: "images/IMG_4012.jpg", caption: "Don't aim for perfection, aim for progress" },
    { src: "images/IMG_4830.JPG", caption: "If you don't fit into the crowd you belong on stage" },
    { src: "images/IMG_4845.JPG", caption: "How can you be late in life when it's your life" },
    { src: "images/IMG_4857.JPG", caption: "How will you know what an easy day feels like if you don't go through the hard days first" },
    { src: "images/IMG_4879.JPG", caption: "You're not everything you want to be yet, but you're a lot of things you wanted to be 2 years ago" },
  ],

  /* ---------- ON THIS DAY ----------
     Fun / historical facts about their birth date. Look some
     up at onthisday.com or Wikipedia's "Month Day" page. */
  onThisDay: {
    heading: "On This Day",
    subheading: "November 3 Through the Years",
    facts: [
      "1906: SOS is chosen as the worldwide distress signal at a radio conference in Berlin",
      "1949: Anna Wintour, the longtime editor of Vogue, is born",
      "1991: Ayrton Senna wins the Australian Grand Prix and clinches his third Formula 1 World Championship",
      "1992: Whitney Houston releases her cover of \"I Will Always Love You\"",
      "1995: Kendall Jenner is born",
      "Birthstone: November has two, topaz and citrine. Citrine is named after the French word for lemon because of its yellow color. Fun fact: both stones are said to stand for warmth and friendship.",
    ],
  },

  /* ---------- AWARDS ---------- */
  awards: {
    heading: "Awards & Superlatives",
    subheading: "As voted by her biggest fan (me)",
    items: [
      { title: "Best Dance Moves", detail: "", icon: "☾" },
      { title: "Most Likely to Be Late", detail: "", icon: "☾" },
      { title: "Best Makeup", detail: "", icon: "☾" },
      { title: "Most Likely to Make You Feel Better", detail: "", icon: "☾" },
    ],
  },

  /* ---------- TOP TEN ---------- */
  topTen: {
    heading: "Top Ten Things I Love About You",
    subheading: "In no particular order",
    items: [
      "Your beauty glows like the moon",
      "Being ambitious",
      "Stubbornness to protect your friends",
      "Honesty in your opinions",
      "Rational advice",
      "Staying authentically true to your values",
      "Incredibly smart",
      "Matching my energy in anything we do",
      "Caring and kind",
      "Open to discussing tea",
    ],
  },

  /* ---------- RECIPE ---------- */
  recipe: {
    heading: "Recipe Recommendation",
    subheading: "Chicken Pasta, because it reminds me of you",
    image: "",
    servings: "Serves 4 people",
    time: "30 min cooking time",
    ingredients: [
      "A serving of pasta of your choice (enough to feed four people)",
      "1/2 onion",
      "1 spoon of fish masala",
      "1 tray of chicken thighs",
      "1 bell pepper",
      "1 tomato",
      "1 jar of marinara sauce",
      "3 garlic cloves",
      "1 box of mushrooms",
      "Salt",
      "Oil",
      "Olive oil",
      "Hing (optional)",
      "Bay leaf",
    ],
    steps: [
      "In a pot, boil water and pasta (put salt in the water).",
      "Marinate the chicken with oil and fish masala. Put it in the air fryer.",
      "In a pot, cook down the vegetables in oil, hing (optional), and bay leaf.",
      "Add the pasta (after it is drained).",
      "Add the jar sauce.",
      "Add the chicken.",
    ],
    hint: "After the pasta is boiled and drained, add a little bit of olive oil so it doesn't get sticky.",
  },

  /* ---------- LETTER ---------- */
  letter: {
    heading: "A Letter From Me",
    paragraphs: [
      "Dear Chandana,",
      "Koya Koya Chand... 🎵 Anyway, Happy 20th Birthday! I hope you liked this magazine I made for you. I hope you have the best birthday ever and that I made your day a little special!",
      "Best wishes from Purdue,",
    ],
    signature: "Sreisti",
  },

};
