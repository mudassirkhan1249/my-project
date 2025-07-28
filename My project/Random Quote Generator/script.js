let quoteDisplay = document.getElementById("quote");
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "Java is to JavaScript what car is to Carpet.",
  "Knowledge is power. Share it.",
  "Fix the cause, not the symptom.",
  "Make it work, make it right, make it fast.",
  "Talk is cheap. Show me the code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best error message is the one that never shows up.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  "Before software can be reusable it first has to be usable.",
  "The most damaging phrase in the language is: ‘We’ve always done it this way.’",
  "Code never lies, comments sometimes do.",
  "Good code is its own best documentation.",
  "The computer was born to solve problems that did not exist before.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Programming is the art of telling another human what one wants the computer to do.",
  "Clean code always looks like it was written by someone who cares.",
  "In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.",
  "Simple things should be simple, complex things should be possible.",
  "To iterate is human, to recurse divine.",
  "There are two ways to write error-free programs; only the third one works.",
  "A good programmer is someone who always looks both ways before crossing a one-way street."
];
function showNewQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomNumber];
}