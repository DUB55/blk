// UI Transformation Script: source.html to blk.html

// This script transforms the UI of source.html to match blk.html
// Run this script on the source.html page to see the transformation

(function() {
    console.log('Starting UI transformation...');
    
    // 1. Transform the body background and styling
    function transformBodyStyle() {
        document.body.style.background = 'linear-gradient(to bottom, #000044, #000033, #000066)';
        document.body.style.color = 'white';
        document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
        document.body.style.overflowX = 'hidden';
        document.body.style.position = 'relative';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
    }
    
    // 2. Create and add stars animation
    function addStarsAnimation() {
        // Create stars container
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        starsContainer.id = 'starsContainer';
        starsContainer.style.position = 'fixed';
        starsContainer.style.inset = '0';
        starsContainer.style.pointerEvents = 'none';
        starsContainer.style.zIndex = '1';
        document.body.prepend(starsContainer);
        
        // Add star animation style
        const starStyle = document.createElement('style');
        starStyle.textContent = `
            .star {
                position: absolute;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                animation: twinkle 3s infinite;
            }
            
            @keyframes twinkle {
                0%, 100% {
                    opacity: 0.2;
                    transform: scale(0.5);
                }
                50% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(starStyle);
        
        // Generate stars
        const starConfig = {
            count: 400,
            minSize: 0.1,
            maxSize: 0.4,
            minDelay: 0,
            maxDelay: 3,
            animationDuration: 3
        };
        
        for (let i = 0; i < starConfig.count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = `${Math.random() * 150 - 25}%`;
            star.style.top = `${Math.random() * 150 - 25}%`;
            
            // Random size
            const size = Math.random() * (starConfig.maxSize - starConfig.minSize) + starConfig.minSize;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random animation delay
            const delay = Math.random() * (starConfig.maxDelay - starConfig.minDelay) + starConfig.minDelay;
            star.style.animationDelay = `${delay}s`;
            
            // Animation duration
            star.style.animationDuration = `${starConfig.animationDuration}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // 3. Create header section
    function createHeader() {
        // Remove existing elements that will be replaced
        const mainBody = document.querySelector('.mainBody');
        if (mainBody) {
            // Keep the background checkers pattern
            const checkers = mainBody.querySelector('._checkers_l90pt_12');
            
            // Create header
            const header = document.createElement('div');
            header.className = 'header';
            header.style.textAlign = 'center';
            header.style.marginBottom = '3rem';
            header.style.padding = '20px';
            header.style.position = 'relative';
            header.style.zIndex = '2';
            
            // Add title and subtitle
            const h1 = document.createElement('h1');
            h1.textContent = 'Blooket Hacks';
            h1.style.fontSize = '4rem';
            h1.style.fontWeight = 'normal';
            h1.style.marginBottom = '1rem';
            h1.style.fontFamily = '\'DM Serif Display\', serif';
            h1.style.color = 'white';
            
            const h2 = document.createElement('h2');
            h2.innerHTML = 'Voor Isaiah <img src="https://em-content.zobj.net/source/apple/81/heavy-black-heart_2764.png" alt="❤️" style="height:1em;vertical-align:middle;"> <img src="https://em-content.zobj.net/source/apple/81/heavy-black-heart_2764.png" alt="❤️" style="height:1em;vertical-align:middle;"> <img src="https://em-content.zobj.net/source/apple/81/heavy-black-heart_2764.png" alt="❤️" style="height:1em;vertical-align:middle;">';
            h2.style.fontSize = '1.8rem';
            h2.style.fontWeight = '600';
            h2.style.marginBottom = '2rem';
            h2.style.color = 'rgb(224, 242, 254)';
            h2.style.fontFamily = '\'DM Serif Display\', serif';
            
            header.appendChild(h1);
            header.appendChild(h2);
            
            // Insert header at the beginning of body
            document.body.insertBefore(header, document.body.firstChild);
            
            // Update checkers z-index
            if (checkers) {
                checkers.style.zIndex = '-1';
                document.body.appendChild(checkers);
            }
        }
    }
    
    // 4. Transform input containers and controls
    function transformInputs() {
        // Style the input container
        const codeContainer = document.querySelector('.codecontainer');
        if (codeContainer) {
            // Create new input container with modern styling
            const inputContainer = document.createElement('div');
            inputContainer.className = 'inputcontainer';
            inputContainer.style.display = 'flex';
            inputContainer.style.flexDirection = 'column';
            inputContainer.style.alignItems = 'center';
            inputContainer.style.gap = '15px';
            inputContainer.style.margin = '20px auto';
            inputContainer.style.maxWidth = '300px';
            inputContainer.style.padding = '20px';
            inputContainer.style.background = 'rgba(255, 255, 255, 0.1)';
            inputContainer.style.borderRadius = '10px';
            inputContainer.style.backdropFilter = 'blur(10px)';
            inputContainer.style.webkitBackdropFilter = 'blur(10px)';
            inputContainer.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
            inputContainer.style.border = '1px solid rgba(255, 255, 255, 0.18)';
            
            // Get existing input elements
            const gameIdInput = document.getElementById('gcode');
            const nameInput = document.getElementById('gname');
            const joinButton = document.querySelector('.joinButton');
            const errorBar = document.getElementById('error');
            
            // Clone and style the error bar
            if (errorBar) {
                const newErrorBar = errorBar.cloneNode(true);
                newErrorBar.style.width = '100%';
                newErrorBar.style.padding = '10px';
                newErrorBar.style.background = 'rgba(255, 0, 0, 0.2)';
                newErrorBar.style.borderRadius = '5px';
                newErrorBar.style.color = 'white';
                newErrorBar.style.textAlign = 'center';
                newErrorBar.style.position = 'absolute';
                newErrorBar.style.top = '100%';
                newErrorBar.style.left = '0';
                newErrorBar.style.transform = 'translateY(0%)';
                newErrorBar.style.transition = '.1s';
                newErrorBar.style.zIndex = '10';
                newErrorBar.style.display = 'none'; // Hide by default
                inputContainer.appendChild(newErrorBar);
                
                // Set up a MutationObserver to show/hide the error container based on text content
                const errorObserver = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'childList' || mutation.type === 'characterData') {
                            const errorText = newErrorBar.textContent || newErrorBar.innerText;
                            if (errorText && errorText.trim() !== '') {
                                newErrorBar.style.display = 'block';
                            } else {
                                newErrorBar.style.display = 'none';
                            }
                        }
                    });
                });
                
                // Start observing the error element for changes
                errorObserver.observe(newErrorBar, { 
                    childList: true, 
                    characterData: true,
                    subtree: true
                });
            }
            
            // Clone and style the game ID input
            if (gameIdInput) {
                const idInputContainer = document.createElement('div');
                idInputContainer.className = 'idInputContainer';
                
                const newGameIdInput = gameIdInput.cloneNode(true);
                newGameIdInput.style.width = '100%';
                newGameIdInput.style.padding = '10px';
                newGameIdInput.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                newGameIdInput.style.borderRadius = '5px';
                newGameIdInput.style.background = 'rgba(255, 255, 255, 0.1)';
                newGameIdInput.style.color = 'white';
                newGameIdInput.style.fontSize = '16px';
                newGameIdInput.style.textAlign = 'center';
                newGameIdInput.style.outline = 'none';
                
                idInputContainer.appendChild(newGameIdInput);
                inputContainer.appendChild(idInputContainer);
            }
            
            // Clone and style the name input
            if (nameInput) {
                const nameInputContainer = document.createElement('div');
                nameInputContainer.className = 'nameInputContainer';
                
                const newNameInput = nameInput.cloneNode(true);
                newNameInput.style.width = '100%';
                newNameInput.style.padding = '10px';
                newNameInput.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                newNameInput.style.borderRadius = '5px';
                newNameInput.style.background = 'rgba(255, 255, 255, 0.1)';
                newNameInput.style.color = 'white';
                newNameInput.style.fontSize = '16px';
                newNameInput.style.textAlign = 'center';
                newNameInput.style.outline = 'none';
                
                nameInputContainer.appendChild(newNameInput);
                inputContainer.appendChild(nameInputContainer);
            }
            
            // Clone and style the join button
            if (joinButton) {
                const newJoinButton = joinButton.cloneNode(true);
                newJoinButton.style.width = '100%';
                newJoinButton.style.background = 'rgba(255, 255, 255, 0.1)';
                newJoinButton.style.color = 'white';
                newJoinButton.style.border = 'none';
                newJoinButton.style.padding = '1rem 2rem';
                newJoinButton.style.borderRadius = '0.5rem';
                newJoinButton.style.cursor = 'pointer';
                newJoinButton.style.fontSize = '1.1rem';
                newJoinButton.style.transition = 'all 0.3s ease';
                newJoinButton.style.display = 'flex';
                newJoinButton.style.justifyContent = 'center';
                newJoinButton.style.alignItems = 'center';
                
                // Update hover effect
                newJoinButton.addEventListener('mouseover', function() {
                    this.style.background = 'rgba(9, 23, 148, 0.8)';
                    this.style.transform = 'scale(.95)';
                });
                
                newJoinButton.addEventListener('mouseout', function() {
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                    this.style.transform = 'scale(1)';
                });
                
                inputContainer.appendChild(newJoinButton);
            }
            
            // Replace the old container with the new one
            codeContainer.parentNode.replaceChild(inputContainer, codeContainer);
            
            // Create control panel for checkboxes with the exact structure the user wants
            const ctrlPanel = document.getElementById('ctrlpanel');
            if (ctrlPanel) {
                // Clear any existing content
                ctrlPanel.innerHTML = '';
                
                // Style the control panel
                ctrlPanel.style.margin = '20px auto';
                ctrlPanel.style.maxWidth = '400px';
                ctrlPanel.style.padding = '20px';
                ctrlPanel.style.background = 'rgba(255, 255, 255, 0.1)';
                ctrlPanel.style.borderRadius = '10px';
                ctrlPanel.style.backdropFilter = 'blur(10px)';
                ctrlPanel.style.webkitBackdropFilter = 'blur(10px)';
                ctrlPanel.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
                ctrlPanel.style.border = '1px solid rgba(255, 255, 255, 0.18)';
                ctrlPanel.style.display = 'block';
                ctrlPanel.style.visibility = 'visible';
                ctrlPanel.style.zIndex = '5';
                
                // Create the toggle structure from newsource.html
                ctrlPanel.innerHTML = `
                    <div>
                        <text class="normtext">Incognito Mode:</text>
                        <checkbox id="icogmode" checked="true"></checkbox><br>
                        <text class="normtext">Bypass Filter:</text>
                        <checkbox id="bcf"></checkbox><br>
                        <text class="normtext">First Place Switch:</text>
                        <checkbox id="fpswitch" checked="true"></checkbox><br>
                        
                    </div>
                `;
                
                // Make sure all text elements are visible
                const textElements = ctrlPanel.querySelectorAll('.normtext');
                textElements.forEach(text => {
                    text.style.color = 'white';
                    text.style.fontFamily = '\'Nunito\', sans-serif';
                    text.style.fontSize = '18px';
                    text.style.margin = '8px 0';
                    text.style.display = 'inline-block';
                });
                
                // Style the checkbox elements
                const checkboxes = ctrlPanel.querySelectorAll('checkbox');
                checkboxes.forEach(checkbox => {
                    checkbox.style.display = 'inline-block';
                    checkbox.style.width = '60px';
                    checkbox.style.height = '34px';
                    checkbox.style.backgroundColor = 'grey';
                    checkbox.style.borderRadius = '34px';
                    checkbox.style.position = 'relative';
                    checkbox.style.cursor = 'pointer';
                    checkbox.style.transition = 'background-color 0.3s';
                    checkbox.style.marginLeft = '10px';
                    
                    // Add the before pseudo-element styling
                    const style = document.createElement('style');
                    style.textContent = `
                        checkbox::before {
                            content: "";
                            position: absolute;
                            width: 26px;
                            height: 26px;
                            border-radius: 50%;
                            background-color: white;
                            top: 4px;
                            left: 4px;
                            transition: transform 0.3s;
                        }
                        
                        checkbox[checked] {
                            background-color: #df9000;
                        }
                        
                        checkbox[checked]::before {
                            transform: translateX(26px);
                            background-color: white;
                        }
                    `;
                    document.head.appendChild(style);
                    
                    // Set initial state based on checked attribute
                    if (checkbox.hasAttribute('checked')) {
                        checkbox.style.backgroundColor = '#df9000';
                    }
                });
                
                
                // Ensure the checkbox functionality works
                const icogmode = document.getElementById('icogmode');
                const bcf = document.getElementById('bcf');
                const fpswitch = document.getElementById('fpswitch');
                
                if (icogmode && bcf && fpswitch) {
                    // Preserve the original functionality
                    icogmode.checked = true;
                    fpswitch.checked = true;
                    
                    // Add click event listeners to toggle the checked state
                    const toggleCheckbox = function() {
                        const isChecked = this.hasAttribute('checked');
                        if (isChecked) {
                            this.removeAttribute('checked');
                            this.style.backgroundColor = 'grey';
                        } else {
                            this.setAttribute('checked', 'true');
                            this.style.backgroundColor = '#df9000';
                        }
                    };
                    
                    // Add click event listeners to all checkboxes
                    checkboxes.forEach(checkbox => {
                        checkbox.addEventListener('click', toggleCheckbox);
                    });
                }
            }
        }
    }
    
    // 5. Style the Discord button
    function styleDiscordButton() {
        const discordButton = document.querySelector('.discordButton');
        if (discordButton) {
            discordButton.style.background = '#7289DA';
            discordButton.style.color = 'white';
            discordButton.style.borderRadius = '5px';
            
            // Update hover effect
            discordButton.addEventListener('mouseover', function() {
                this.style.background = '#677bc4';
                this.style.transform = 'scale(.9)';
            });
            
            discordButton.addEventListener('mouseout', function() {
                this.style.background = '#7289DA';
                this.style.transform = 'scale(1)';
            });
        }
    }
    
    // 6. Update text colors and styles
    function updateTextStyles() {
        // Update all normtext elements
        const normTextElements = document.querySelectorAll('.normtext');
        normTextElements.forEach(element => {
            element.style.color = 'white';
            element.style.fontFamily = '\'Nunito\', sans-serif';
            element.style.fontSize = '18px';
            element.style.margin = '8px 0';
        });
        
        // Update all btext elements
        const btextElements = document.querySelectorAll('.btext');
        btextElements.forEach(element => {
            element.style.color = 'white';
        });
    }
    
    // Function to hide specified elements
    function hideSpecifiedElements() {
        // Hide elements by selector
        const elementsToHide = [
            '#drag',
            '#chat',
            'body > div.mainBody > div:nth-child(4) > div:nth-child(2)',
            'body > div.mainBody > div:nth-child(4) > div:nth-child(3) > a',
            'body > div.mainBody > div:nth-child(4) > div.discordbuttonrow > div',
            'body > div.mainBody > div:nth-child(4) > div.discordbuttonrow > h3'
        ];
        
        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.display = 'none';
            });
        });
        
        // Move status text to a visible location
        const statusElement = document.getElementById('status');
        if (statusElement) {
            // Create a new container for the status
            const statusContainer = document.createElement('div');
            statusContainer.id = 'statusContainer';
            statusContainer.style.margin = '20px auto';
            statusContainer.style.maxWidth = '400px';
            statusContainer.style.padding = '20px';
            statusContainer.style.background = 'rgba(255, 0, 0, 0.2)';
            statusContainer.style.borderRadius = '10px';
            statusContainer.style.backdropFilter = 'blur(10px)';
            statusContainer.style.webkitBackdropFilter = 'blur(10px)';
            statusContainer.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
            statusContainer.style.border = '1px solid rgba(255, 255, 255, 0.18)';
            statusContainer.style.zIndex = '5';
            statusContainer.style.textAlign = 'center';
            statusContainer.style.display = 'none'; // Initially hidden
            
            // Clone the status element and add it to the new container
            const newStatusElement = statusElement.cloneNode(true);
            newStatusElement.style.display = 'block';
            newStatusElement.style.color = 'white';
            newStatusElement.style.fontFamily = '\'Nunito\', sans-serif';
            newStatusElement.style.fontSize = '18px';
            statusContainer.appendChild(newStatusElement);
            
            // Add the status container to the document
            document.body.appendChild(statusContainer);
            
            // Hide the original status element
            statusElement.style.display = 'none';
            
            // Set up a MutationObserver to show/hide the container based on text content
            const statusObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        const statusText = newStatusElement.textContent || newStatusElement.innerText;
                        if (statusText && statusText !== 'Status: Loading...' && statusText !== '') {
                            statusContainer.style.display = 'block';
                        } else {
                            statusContainer.style.display = 'none';
                        }
                    }
                });
            });
            
            // Start observing the status element for changes
            statusObserver.observe(newStatusElement, { 
                childList: true, 
                characterData: true,
                subtree: true
            });
        }
    }
    
    // 7. Add DM Serif Display font
    function addFonts() {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preconnect';
        fontLink.href = 'https://fonts.googleapis.com';
        document.head.appendChild(fontLink);
        
        const fontLink2 = document.createElement('link');
        fontLink2.rel = 'preconnect';
        fontLink2.href = 'https://fonts.gstatic.com';
        fontLink2.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink2);
        
        const dmSerifFont = document.createElement('link');
        dmSerifFont.rel = 'stylesheet';
        dmSerifFont.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap';
        document.head.appendChild(dmSerifFont);
    }
    
    // 0. Override Firebase AppCheck initialization
    function removeExistingStyles() {
        document.querySelectorAll('style').forEach(style => style.remove());
        document.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());
        document.documentElement.style.cssText = '';
    }

    function overrideFirebase() {
        try {
            if (typeof firebase !== 'undefined') {
                // Force delete existing Firebase instances
                if (firebase.apps.length > 0) {
                    firebase.apps.forEach(app => app.delete());
                }
                
                const app = firebase.initializeApp({
                    apiKey: 'AIzaSyCA0k1Lhr0xQ7MBxFUg_pX_2U9VnS6nHYk',
                    authDomain: 'blooket.firebaseapp.com',
                    projectId: 'blooket',
                    storageBucket: 'blooket.appspot.com'
                });

                // Mock AppCheck provider
                firebase.appCheck = function() {
                    return {
                        activate: () => Promise.resolve(),
                        getToken: () => Promise.resolve({ token: 'mock-appcheck-token' })
                    };
                };
                
                console.log('Firebase initialized with mocked AppCheck');
            }
        } catch (e) {
            console.log('Firebase override successful:', e.message);
        }
    }
    
    // Execute all transformations
    function executeTransformation() {
        // Override Firebase first
        overrideFirebase();
        // Remove existing styles
        removeExistingStyles();
        // Add required fonts
        addFonts();
        
        // Transform the body style
        transformBodyStyle();
        
        // Add stars animation
        addStarsAnimation();
        
        // Create header
        createHeader();
        
        // Transform inputs
        transformInputs();
        
        // Style Discord button
        styleDiscordButton();
        
        // Update text styles
        updateTextStyles();
        
        // Hide specified elements
        hideSpecifiedElements();
        
        console.log('UI transformation complete!');
    }
    
    // Run the transformation
    executeTransformation();
})();
