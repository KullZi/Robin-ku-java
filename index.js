const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console.log them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
    "My grief counselor died. He was so good, I don`t even care.",
    "Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
    "A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”",
    "I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.",
    "Even people who are good for nothing have the capacity to bring a smile to your face, like when you push them down the stairs.",
    "My mom died when we couldn`t remember her blood type. As she died, she kept telling us to “be positive,” but it`s hard without her.",
  ];
  
  function getRandomJoke(jokes) {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  function tellTwoJokes() {
    // Get two unique random jokes
    let joke1, joke2;
    do {
      joke1 = getRandomJoke(programmingJokes);
      joke2 = getRandomJoke(programmingJokes);
    } while (joke1 === joke2); 
  
    
    console.log("############################");
    console.log("Welcome to the joke factory!");
    console.log("Let me tell you something about programming:");
    console.log("Joke #" + (getRandomJoke(programmingJokes).split("> ")[0].split("#")[1] || 3)); 
    console.log("Joke #" + (getRandomJoke(programmingJokes).split("> ")[0].split("#")[1] || 3)); 
    console.log(joke2);
    console.log("Thank you, come again!");
  }
  
  
  tellTwoJokes();