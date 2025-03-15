document.addEventListener("DOMContentLoaded", function () {
    const words = ["developer", "visionary", "mentor", "builder", "leader"];
    const typingText = document.getElementById("typing-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 150; // Typing speed (lower = faster)
    let delayAfterWord = 800; // Delay before deleting

    function typeEffect() {
        let currentWord = words[wordIndex];
        if (isDeleting) {
            // Remove characters
            typingText.innerText = currentWord.substring(0, charIndex--);
        } else {
            // Add characters
            typingText.innerText = currentWord.substring(0, charIndex++);
        }

        // Adjust speed based on typing or deleting
        let typingSpeed = isDeleting ? 75 : speed;

        // When word is fully typed, pause before deleting
        if (!isDeleting && charIndex === currentWord.length + 1) {
            typingSpeed = delayAfterWord;
            isDeleting = true;
        }

        // When word is fully deleted, move to next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop through words
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect(); // Start typing effect
});
