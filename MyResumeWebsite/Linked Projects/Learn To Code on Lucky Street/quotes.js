let quotes = [
    `"Things turn out the best for people who make the best of the way things turn out." <br> - John Wooden`,
    `"Do not let what you cannot do interfere with what you can do." <br> - John Wooden`,
    `"Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming." <br> - John Wooden`,
    `"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind." <br> - Dr. Seuss`,
    `"There are no secrets to success. It is the result of preperation, hard work, and learning from failure." <br> - Colin Powell`,
    `"Don't be pushed by your problems. Be led by your dreams." <br> - Ralph Waldo Emerson`,
    `"Do not go where the path may lead, go instead where there is no path and leave a trail." <br> - Ralph Waldo Emerson`,
    `"Success consists of going from failure to failure without loss of enthusiasm." <br> - Winston Churchill`,
    `"I can't change the direction of the wind, but I can adjust my sails to always reach my destination." <br> - Jimmy Dean`,
    `"Some people want it to happen, some wish it would happen, others make it happen." <br> - Michael Jordan`,
    `"In the middle of every difficulty lies opportunity." <br> - Albert Einstein`,
    `"Death is not the greatest loss in life. The greatest loss is what dies inside while still alive." <br> - Tupac Shakur`,
    `"Whatever you are, be a good one." <br> - Abraham Lincoln`,
    `"The best way to predict your future is to create it." <br> - Abraham Lincoln`,
    `"Believe you can and you're half way there." <br> - Theodore Roosevelt`,
    `"It's not the years in your life that count, it's the life in your years." <br> - Abraham Lincoln`,
    `"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." <br> - Albert Einstein`,
    `"All your dreams can come true if you have the courage to pursue them." <br> - Walt Disney`,
    `"It's not strongest of the species to survive, nor the most intelligent, but the one most responsive to change." <br> - Charles Darwin`,
    `"You miss 100% of the shots you don't take" <br> - Wayne Gretzky`,
    `"I find that the harder I work, the more luck I seem to have" <br> - Thomas Jefferson`,
    `"Absorb what is useful, discard what is not, add what is uniquely your own" <br> - Bruce Lee`,
    `"We don't have to be smarter than the rest; we have to be more disciplined than the rest" <br> - Warren Buffett`,
    `"Logic will get you from A to B. Imagination will take you everywhere." <br> - Albert Einstein`,
    `"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time." <br> - Steve Jobs`,
    `"I am neither clever nor especially gifted. I am only very, very curious" <br> - Albert Einstein`,
    `"Curiosity is the most powerful thing you own" <br> - James Cameron`,
    ];

  
  
    let randomQuote = Math.floor(Math.random() * quotes.length);
      
    let displayQuote = quotes[randomQuote];

 
  document.getElementById("quotes").innerHTML = displayQuote;
