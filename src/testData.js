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
  { author: "Joe Bloggs 3", comment: "u r stoopid" },
  {
    author: "Joe Bloggs 4",
    comment:
      "you are declaring the constant inside a function so it only has local scope",
  },
];
