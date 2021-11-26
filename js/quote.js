 const quotes = [
     {
         quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
         author: "Walt Disney",
     },
     {
         quote: "Don't stress over anything that you can't change.",
         author: "Walt Disney",
     },
     {
        quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
        author: "Walt Disney",
    },
    {
        quote: "Don't stress over anything that you can't change.",
        author: "Walt Disney",
    },
    {
        quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
        author: "Walt Disney",
    },
    {
        quote: "Don't stress over anything that you can't change.",
        author: "Walt Disney",
    },
    {
        quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
        author: "Walt Disney",
    },
    {
        quote: "Don't stress over anything that you can't change.",
        author: "Walt Disney",
    },
    {
        quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
        author: "Walt Disney",
    },
    {
        quote: "Don't stress over anything that you can't change.",
        author: "Walt Disney",
    },
    {
        quote: "Happiness isn't about getting what you want all the time. It's about loving what you have and being grateful for it.",
        author: "Walt Disney",
    },
    {
        quote: "Don't stress over anything that you can't change.",
        author: "Walt Disney",
    }
 ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];
 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
