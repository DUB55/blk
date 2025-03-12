
// Onboarding Tutorial for CORS Unblock Extension
// This script creates a tutorial slideshow in Dutch to guide users to install the CORS Unblock extension

(function() {
    // Check if the tutorial should be shown (controlled by on_boarding_tut variable)
    if (!window.on_boarding_tut) return;
    
    // Check if the user has already seen the tutorial
    if (localStorage.getItem('cors_tutorial_seen') === 'true') return;
    
    // Mark tutorial as seen
    localStorage.setItem('cors_tutorial_seen', 'true');
    
    // Create the tutorial overlay
    function createTutorial() {
        // Create tutorial container
        const tutorialOverlay = document.createElement('div');
        tutorialOverlay.id = 'cors-tutorial-overlay';
        tutorialOverlay.className = 'tutorial-overlay';
        document.body.appendChild(tutorialOverlay);
        
        // Create background gradient container if is_background_tut is true
        if (window.is_background_tut) {
            const backgroundContainer = document.createElement('div');
            backgroundContainer.id = 'tutorial-background-container';
            backgroundContainer.style.position = 'absolute';
            backgroundContainer.style.background = 'linear-gradient(to bottom, #000044, #000033, #000066)';
            backgroundContainer.style.borderRadius = '10px';
            backgroundContainer.style.zIndex = '-1';
            tutorialOverlay.appendChild(backgroundContainer);
        }
        
        // Create tutorial content container
        const tutorialContent = document.createElement('div');
        tutorialContent.className = window.is_blurred_glass_effect ? 'tutorial-content glass-effect' : 'tutorial-content no-glass';
        tutorialOverlay.appendChild(tutorialContent);
        
        // Define slides content in Dutch
        const slides = [
            {
                title: 'Blooket Haxx',
                content: 'Om de Blooket Hacks te kunnen gebruiken, moet je eerst een Chrome-extensie installeren.',
                image: ''
            },
            {
                title: 'CORS Unblock Extensie',
                content: 'De Blooket Hacks werken niet zonder de CORS Unblock extensie.',
                image: 'https://lh3.googleusercontent.com/gfeUKZ6vG82fBgZFif1mFleldUiJX22Jc8HFGok6bX-YEPi22d2977kUQTMwWE2QWMMEeNvTfVUwT-8hy1OGQGJ2PQ=s128-rj-sc0x00ffffff'
            },
            {
                title: 'Installatie Stappen',
                content: 'Klik op de knop hieronder om naar de Chrome Web Store te gaan en installeer de CORS Unblock extensie.',
                image: 'https://lh3.googleusercontent.com/gfeUKZ6vG82fBgZFif1mFleldUiJX22Jc8HFGok6bX-YEPi22d2977kUQTMwWE2QWMMEeNvTfVUwT-8hy1OGQGJ2PQ=s128-rj-sc0x00ffffff',
                link: 'https://chromewebstore.google.com/detail/cors-unblock/hadoojkfknbjgoppkecpgamiajljiief?hl=en'
            },
            {
                title: 'Activeer de Extensie',
                content: 'Na de installatie, klik op het extensie-icoon in je browser en zorg ervoor dat CORS Unblock is ingeschakeld.',
                image: 'https://lh3.googleusercontent.com/gfeUKZ6vG82fBgZFif1mFleldUiJX22Jc8HFGok6bX-YEPi22d2977kUQTMwWE2QWMMEeNvTfVUwT-8hy1OGQGJ2PQ=s128-rj-sc0x00ffffff'
            },
            {
                title: '❤️',
                content: 'Je bent nu klaar om de Blooket Hacks te gebruiken!',
                image: ''
            }
        ];
        
        // Current slide index
        let currentSlide = 0;
        
        // Create slide content
        function renderSlide(index) {
            const slide = slides[index];
            
            tutorialContent.innerHTML = `
                <div class="tutorial-slide">
                    <h2>${slide.title}</h2>
                    ${slide.image ? `<img src="${slide.image}" alt="CORS Unblock" class="tutorial-image">` : ''}
                    <p>${slide.content}</p>
                    ${slide.link ? `<a href="${slide.link}" target="_blank" class="tutorial-link">Ga naar Chrome Web Store</a>` : ''}
                    <div class="tutorial-buttons">
                        <button class="tutorial-button" id="tutorial-skip">Overslaan</button>
                        <button class="tutorial-button" id="tutorial-next">Doorgaan</button>
                    </div>
                </div>
            `;
            
            // Add event listeners to buttons
            document.getElementById('tutorial-next').addEventListener('click', () => {
                if (currentSlide < slides.length - 1) {
                    currentSlide++;
                    renderSlide(currentSlide);
                } else {
                    closeTutorial();
                }
            });
            
            document.getElementById('tutorial-skip').addEventListener('click', () => {
                closeTutorial();
            });
        }
        
        // Close tutorial function
        function closeTutorial() {
            tutorialOverlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(tutorialOverlay);
            }, 500);
        }
        
        // Render first slide
        renderSlide(currentSlide);
        
        // Position the background container if it exists
        if (window.is_background_tut) {
            const backgroundContainer = document.getElementById('tutorial-background-container');
            const contentElement = tutorialContent;
            if (backgroundContainer && contentElement) {
                // Make the background slightly larger than the content
                const padding = 20;
                backgroundContainer.style.width = (contentElement.offsetWidth + padding * 2) + 'px';
                backgroundContainer.style.height = (contentElement.offsetHeight + padding * 2) + 'px';
                backgroundContainer.style.top = (contentElement.offsetTop - padding) + 'px';
                backgroundContainer.style.left = (contentElement.offsetLeft - padding) + 'px';
            }
        }
    }
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createTutorial);
    } else {
        createTutorial();
    }
})();
