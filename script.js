// Select the smiley image and the quote element
const smile = document.getElementById("smile");
const quote = document.getElementById("quote");

// Add event listener for when the smiley is clicked
smile.addEventListener("click", function() {
	// Add class to animate the smiley
	smile.classList.add("animate");

	// Generate a random positive quote and display it
	const quotes = ["You are awesome!", 
	"Keep shining!", 
	"Believe in yourself!", 
	"Stay positive!", 
	"You can do it!", 
	"Believe you can and you're halfway there", 
	"You are never too old to set another goal or to dream a new dream", 
	"In the middle of every difficulty lies opportunity", 
	"Be the change you wish to see in the world", 
	"The only way to do great work is to love what you do",
	"Reality is merely an illusion, albeit a very persistent one.",
	"The truth is rarely pure and never simple.",
	"In three words I can sum up everything I've learned about life: it goes on.",
	"We are all in the gutter, but some of us are looking at the stars.",
	"Life is a journey, not a destination.",
	"The only thing we have to fear is fear itself.",
	"The best way to predict the future is to invent it.",
	"It always seems impossible until it's done.",
	"The future belongs to those who believe in the beauty of their dreams.",
	"Success is not final, failure is not fatal: it is the courage to continue that counts."];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = randomQuote;
	quote.style.display = "block";
	

	// Display the share button
	const shareBtn = document.getElementById("share-btn");
	shareBtn.style.display = "block";
});

// Select the share button
const shareBtn = document.getElementById("share-btn");

// Add event listener for when the share button is clicked

// Select the smiley image and the color picker
const smileColor = document.getElementById("smile");
const colorPicker = document.getElementById("color-picker");

// Add event listener for when the color picker value changes
colorPicker.addEventListener("change", function() {
	// Change the smiley border color to the selected color
	smileColor.style.borderColor = this.value;
});
