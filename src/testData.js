//An object to build out our question post that includes the title, name of the poster, the question,  some code, what they dont understand & what they have tried already

//test data before we hook up the backend
export const testData = [
  {
    title: "cant use variable outside function",
    name: "Joe Bloggs",
    question:
      "i have declared a function in my variable and i cant use it further down :(",
    code: "function hello(){ const hello = 'Hello'}; console.log(hello);",
    triedAlready: "Googling it",
    whatDontUnderstand: "Javascript",
  },
];

export const testComment = [
  { author: "Chris Meah", comment: "Break it down!" },
  { author: "Joe Bloggs 2", comment: "Google it" },
  { author: "Joe Bloggs 3", comment: "i dont know" },
  {
    author: "Joe Bloggs 4",
    comment:
      "you are declaring the constant inside a function so it only has local scope",
  },
];

export const helpDevLinks = [
  {
    title: "Launch Bash Shell in Windows 10 File Explorer",
    url: "https://www.howtogeek.com/270810/how-to-quickly-launch-a-bash-shell-from-windows-10s-file-explorer/",
    tags: "",
  },
  {
    title:
      "CSS Diner - A fun game to help you learn and practice CSS selectors",
    url: "https://flukeout.github.io/",
    tags: "",
  },
  {
    title: "Flowchart Maker & Online Diagram Software",
    url: "https://app.diagrams.net/",
    tags: "",
  },
  {
    title: "Lucid Chart - What is a Flowchart",
    url: "https://www.lucidchart.com/pages/what-is-a-flowchart-tutorial#section_1",
    tags: "",
  },
  {
    title: "Codepen - Online Coding Editor for solving problems without saving",
    url: "https://codepen.io/",
    tags: " ",
  },
  {
    title: "Working with Complex Objects",
    url: "https://dev.to/saritchaethudis/working-with-complex-objects-in-javascript-the-friendly-beginners-guide-clh",
    tags: " ",
  },
  {
    title: "The Express Documents",
    url: "https://expressjs.com/en/starter/hello-world.html",
    tags: " ",
  },
  {
    title:
      "Postman - Getting started learning how to send your first request -",
    url: "https://learning.postman.com/docs/getting-started/sending-the-first-request/",
    tags: " ",
  },
  {
    title: "Postman - Details about how your first request works",
    url: "https://learning.postman.com/docs/sending-requests/requests/",
    tags: " ",
  },
  {
    title: "Microsoft REST Docs",
    url: "https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design",
    tags: " ",
  },
  {
    title: "DB Fiddle Link - SQL Database Playground - Example 1",
    url: "https://www.db-fiddle.com/f/dg2RJvBX1aZda3ECwQUSoe/4",
    tags: " ",
  },
  {
    title: "DB Fiddle Link - SQL Schema Debugging and Testing",
    url: "https://www.db-fiddle.com/f/uFaiUY5aSZkyKB5QdqegLE/0",
    tags: " ",
  },
  {
    title: "Postgre SQL Exercises",
    url: "https://pgexercises.com/gettingstarted.html",
    tags: " ",
  },
  {
    title: "PostgreSQL Exercises, Practice, Solution",
    url: "https://www.w3resource.com/postgresql-exercises/",
    tags: " ",
  },
  {
    title: "Node Postgres - Connecting, Queries, and Pooling",
    url: "https://node-postgres.com/",
    tags: " ",
  },
  {
    title: "Query Language (SQL) Functions",
    url: "https://www.postgresql.org/docs/9.5/xfunc-sql.html",
    tags: " ",
  },
  {
    title: "How to track your private contributions on Github",
    url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile",
    tags: " ",
  },
  {
    title: "Javascript Try/Catch Throw for Error Handling",
    url: "https://www.w3schools.com/js/js_errors.asp",
    tags: " ",
  },
  {
    title: "Jest - Getting Started",
    url: "https://jestjs.io/docs/getting-started",
    tags: " ",
  },
  {
    title: "NPM - Supertest",
    url: "https://www.npmjs.com/package/supertest",
    tags: " ",
  },
  {
    title: "Introduction to Cypress",
    url: "https://docs.cypress.io/guides/core-concepts/introduction-to-cypress",
    tags: " ",
  },
  {
    title: "Prettier Docs",
    url: "https://prettier.io/docs/en/why-prettier.html",
    tags: " ",
  },
  {
    title: "Prettier Process",
    url: "https://www.codementor.io/@myogeshchavan97/how-to-automatically-format-code-in-visual-studio-code-using-prettier-1nebhfbxak",
    tags: " ",
  },
  {
    title: "Why use React?",
    url: "https://www.freecodecamp.org/news/why-use-react-for-web-development/",
    tags: " ",
  },
  {
    title: "React: Fetch Data from API with useEffect",
    url: "https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le",
    tags: " ",
  },
  {
    title: "Fetch API data using useEffect React Hook",
    url: "https://medium.com/thecodefountain/fetch-api-data-using-useeffect-react-hook-465809ca12c6",
    tags: " ",
  },
  {
    title:
      "React useEffect clean up: How and when to use it, cleaning up side effects",
    url: "https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm",
    tags: " ",
  },
  {
    title: "React why & when  components are rendered",
    url: "https://brycedooley.com/debug-react-rerenders/",
    tags: " ",
  },
  {
    title: "Learn useState In 15 Minutes - React Hooks Explained",
    url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
    tags: " ",
  },
  {
    title: "Whats the difference? Agile Vs Scrum Vs Waterfall Vs Kanban",
    url: "https://www.smartsheet.com/agile-vs-scrum-vs-waterfall-vs-kanban",
    tags: " ",
  },
  {
    title: "Extreme Programming (XP) Vs Scrum",
    url: "https://www.visual-paradigm.com/scrum/extreme-programming-vs-scrum/",
    tags: " ",
  },
  {
    title: "Agile Glossary and Terminology:",
    url: "https://www.agilealliance.org/agile101/agile-glossary/",
    tags: " ",
  },
  {
    title:
      "Github issues: Setting up and managing your GitHub, publicising or hiding your private contributions on your profile",
    url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile",
    tags: " ",
  },
  {
    title: "Colocation - Kent C Dodds ",
    url: "https://kentcdodds.com/blog/colocation",
    tags: " ",
  },
];
