$(document).ready(function(){
		var quoteSource=[
		{
			quote: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
			name:"Dennis Ritchie"
	    },
	    {
	    	quote:"True artists are almost the only men who do their work for pleasure.",
	    	name:"Auguste Rodin"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Imagination is more important than knowledge.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Everything has its beauty, but not everyone sees it.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"If you know the enemy and know yourself you need not fear the results of a hundred battles.",
	    	name:"Sun Tzu"
	    },
	    {
	    	quote:"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
	    	name:"Nikola Tesla"
	    },
	    {
	    	quote:"In the middle of the journey of our life I came to myself within a dark wood where the straight way was lost.",
	    	name:"Dante Alighieri"
	    },
	    {
	    	quote:"The world is the great gymnasium where we come to make ourselves strong.",
	    	name:"Swami Vivekananda"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Learning never exhausts the mind.",
	    	name:"Leonardo da Vinci"
	    },
	    {
	    	quote:"Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
	    	name:"Chanakya"
	    },
	    {
	    	quote:"Man needs his difficulties because they are necessary to enjoy success.",
	    	name:"A. P. J. Abdul Kalam"
	    },
	    {
	    	quote:"I can calculate the motion of heavenly bodies, but not the madness of people.",
	    	name:"Isaac Newton"
	    },
	    {
	    	quote:"When in doubt, use brute force.",
	    	name:"Ken Thompson"
	    },
	    {
	    	quote:"Sometimes I feel like rap music is almost the key to stopping racism.",
	    	name:"Eminem"
	    },
	    {
	    	quote:"You will not be punished for your anger, you will be punished by your anger.",
	    	name:"Gautama Buddha"
	    },
	    {
	    	quote:"An equation has no meaning for me unless it expresses a thought of GOD.",
	    	name:"Srinivasa Ramanujan"
	    },
	    {
	    	quote:"I started the site when I was 19. I didn't know much about business back then.",
	    	name:"Mark Zuckerberg"
	    },
	    {
	    	quote:"Running a start-up is like eating glass. You just start to like the taste of your own blood.",
	    	name:"Sean Parker"
	    },
	    {
	    	quote:"If you're changing the world, you're working on important things. You're excited to get up in the morning.",
	    	name:"Larry Page"
	    },
	    {
	    	quote:"Don't be afraid of new arenas.",
	    	name:"Elon Musk"
	    },
	    {
	    	quote:"Classes will dull your mind, destroy the potential for authentic creativity.",
	    	name:"John Nash"
	    },
	    {
	    	quote:"Your most unhappy customers are your greatest source of learning.",
	    	name:"Bill Gates"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			
			evt.preventDefault();
	
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
		
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
       
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};
	
	});
		
		
});
