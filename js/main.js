var display = document.getElementById("display");
var style = document.getElementById("style");

var quoteContainer = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    jop: "physicist",
    image: "Albert Einstein.jpg",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    jop: "Financier",
    image: "bernard.jpg",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
    jop: "researcher",
    image: "William.jpg",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    jop: "Author",
    image: "oscar.jpg",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    jop: "poetry",
    image: "Maya.jpg",
  },
];

sessionStorage.setItem("quotes", JSON.stringify(quoteContainer));
var randomQuote;

function generateQuote() {
  randomQuote = Math.floor(Math.random() * quoteContainer.length);

  displayQuote();
  quoteContainer.splice(randomQuote, 1);

  if (quoteContainer.length == 0) {
    quoteContainer = JSON.parse(sessionStorage.getItem("quotes"));
  }
  
}

function displayQuote() {
  display.innerHTML = `<div class="container">
    <div class="row justify-content-center">
        <div class="col col-md-10 col-lg-8">
            <div id="mainDisplay" class="inner card p-4 p-md-5 border-0 rounded-4 position-relative">
                <i class="fa-solid fa-quote-left top-q"></i>
                <i class="fa-solid fa-quote-right bottom-q"></i>
                <p class="fw-semibold mb-4 fs-5">${quoteContainer[randomQuote].quote}</p>
                <div class="author d-flex gap-3 align-items-center">
                    <img class="rounded-circle" src="images/${quoteContainer[randomQuote].image}" alt="oscar">
                    <div class="text">
                        <h2 class="h5 mb-0 fw-bold">${quoteContainer[randomQuote].author}</h2>
                        <span class="fw-semibold text-secondary">${quoteContainer[randomQuote].jop}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  changeFamily();
}

generateQuote();

function changeFamily() {
  document.getElementById("mainDisplay").style.fontFamily = style.value;
}
