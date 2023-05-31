let btn = document.querySelector('.new-quote');
let quote= document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      person: "Thomas Edison"
    },
    {
        quote: "You can observe a lot just by watching.",
      person: "Yogi Berra"
    },
    {
        quote: "A house divided against itself cannot stand.",
      person: "Abraham Lincoln"
    },
    {
        quote: "Difficulties increase the nearer we get to the goal.",
      person: "Johann Wolfgang von Goethe"
    },
    {
        quote: "Fate is in your hands and no one elses",
      person: "Byron Pulsifer"
    },
    {
        quote: "Be the chief but never the lord.",
      person: "Lao Tzu"
    },
    {
        quote: "Nothing happens unless first we dream.",
      person: "Carl Sandburg"
    },
    {
        quote: "Well begun is half done.",
      person: "Aristotle"
    }
    
  ,];

btn.addEventListener('click', function (){

    let random= Math.floor(Math.random() *quotes.length);
    console.log("Random");
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

});