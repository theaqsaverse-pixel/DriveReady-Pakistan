// Search functionality
let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
    search.classList.toggle('active');  
    menu.classList.remove('active');
}

// Menu functionality
let menu = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

menuIcon.onclick = () => {
    menu.classList.toggle('active');  
    search.classList.remove('active');
}

// Hide menu and search on scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header shadow on scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});//// Learning Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Main Accordion Functionality
    document.querySelectorAll('.main-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.nextElementSibling;
            
            // Close all other accordions
            document.querySelectorAll('.main-accordion-header').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                }
            });
            
            // Toggle current accordion
            header.classList.toggle('active');
            
            if (header.classList.contains('active')) {
                accordionContent.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.classList.remove('active');
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Set first accordion open by default
    const firstAccordionHeader = document.querySelector('.main-accordion-header');
    if (firstAccordionHeader) {
        const firstAccordionContent = firstAccordionHeader.nextElementSibling;
        firstAccordionHeader.classList.add('active');
        firstAccordionContent.classList.add('active');
        firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';
    }

    // Hero Button Smooth Scrolling
    document.querySelectorAll('.hero-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetAccordion = document.querySelector(targetId);
            
            if (targetAccordion) {
                // Close all accordions first
                document.querySelectorAll('.main-accordion-header').forEach(header => {
                    header.classList.remove('active');
                    header.nextElementSibling.classList.remove('active');
                    header.nextElementSibling.style.maxHeight = 0;
                });
                
                // Open the target accordion
                const targetHeader = targetAccordion.querySelector('.main-accordion-header');
                const targetContent = targetAccordion.querySelector('.main-accordion-content');
                
                targetHeader.classList.add('active');
                targetContent.classList.add('active');
                targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
                
                // Smooth scroll to the accordion
                window.scrollTo({
                    top: targetAccordion.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA Button Functionality
    document.querySelectorAll('.cta-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const buttonText = this.querySelector('span').textContent;
            if (buttonText.includes('Theory Test')) {
                alert('Theory Test module will be implemented soon!');
                // Or redirect: window.location.href = 'theory.html';
            } else if (buttonText.includes('Driving Simulator')) {
                alert('Driving Simulator module will be implemented soon!');
                // Or redirect: window.location.href = 'simulation.html';
            }
        });
    });

    // Fix sign names based on image filenames
    function fixSignNames() {
        document.querySelectorAll('.sign-card').forEach(card => {
            const img = card.querySelector('img');
            if (img) {
                const src = img.getAttribute('src');
                const signName = extractSignNameFromSrc(src);
                const titleElement = card.querySelector('h4');
                
                if (signName && titleElement && titleElement.textContent.includes('Go Straight')) {
                    titleElement.textContent = signName;
                }
            }
        });
    }

    function extractSignNameFromSrc(src) {
        // Extract filename without extension
        const filename = src.split('/').pop().split('.')[0];
        
        // Convert filename to readable name
        return filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Initialize sign names
    fixSignNames();
}); // Add this to your existing accordion functionality in main.js

// Enhanced accordion click handler
document.addEventListener('DOMContentLoaded', function() {
    // Existing accordion code...
    
    // Enhanced: When traffic rules accordion opens, initialize the component
    const trafficRulesAccordion = document.getElementById('traffic-rules-accordion');
    if (trafficRulesAccordion) {
        const trafficRulesHeader = trafficRulesAccordion.querySelector('.main-accordion-header');
        trafficRulesHeader.addEventListener('click', function() {
            // Small delay to ensure accordion is open
            setTimeout(() => {
                if (trafficRulesAccordion.querySelector('.main-accordion-content.active')) {
                    initTrafficRules();
                }
            }, 100);
        });
    }
    
    // Hero button functionality to scroll to traffic rules
    const trafficRulesBtn = document.querySelector('.hero-btn.btn-rules');
    if (trafficRulesBtn) {
        trafficRulesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetAccordion = document.getElementById('traffic-rules-accordion');
            if (targetAccordion) {
                // Open the accordion
                const header = targetAccordion.querySelector('.main-accordion-header');
                const content = targetAccordion.querySelector('.main-accordion-content');
                
                header.classList.add('active');
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                
                // Scroll to it
                window.scrollTo({
                    top: targetAccordion.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Initialize rules component
                setTimeout(initTrafficRules, 300);
            }
        });
    }
});// Traffic Rules Data
const trafficRulesData = {
    speed: {
        icon: 'bx-tachometer',
        title: 'Speed Limits',
        description: 'Understanding speed regulations across Pakistan',
        rules: [
            'Speed limit in populated areas is <strong>50 kilometers per hour</strong>',
            'Speed limit for Light Transport Vehicles (LTV) on motorways is <strong>120 kilometers per hour</strong>',
            'Speed limit near mosques and schools is reduced to <strong>40 kilometers per hour</strong> for safety',
            'Minimum speed limit on motorways is <strong>65 kilometers per hour</strong> to maintain traffic flow',
            'Speed limit for motor cars on highways is <strong>120 kilometers per hour</strong>',
            'National speed limit applies on roads where no specific speed limit is posted',
            'In adverse weather conditions or poor visibility, you must reduce your speed significantly regardless of posted limits',
            'Exceeding speed limits is strictly prohibited and can result in fines and penalties'
        ]
    },
    signals: {
        icon: 'bx-traffic-cone',
        title: 'Traffic Signals & Lights',
        description: 'Proper interpretation and response to traffic signals',
        rules: [
            '<strong>Red light</strong> means you must stop completely before the stop line at the junction',
            '<strong>Amber (Yellow) light</strong> indicates you should stop before the line and prepare to stop',
            '<strong>Green light</strong> allows you to proceed, but only when it is safe to do so',
            'When <strong>Red and Yellow lights</strong> are on together, be ready to leave but wait for the green signal',
            'You must turn on your vehicle lights <strong>30 minutes before sunset</strong>',
            'Use your turn indicators at least <strong>3 seconds before</strong> making a turn or changing lanes',
            'A <strong>continuously flashing yellow light</strong> means vehicles and pedestrians should look and make sure it is safe to pass',
            'Green arrow lights pointing in a direction allow vehicles to turn in that specific direction',
            'Red arrow lights prohibit movement in the direction they point'
        ]
    },
    safety: {
        icon: 'bx-shield',
        title: 'Safety Requirements',
        description: 'Essential safety equipment and practices',
        rules: [
            '<strong>Fastening of seat belts is mandatory</strong> for all passengers in the vehicle',
            '<strong>Use of helmets is mandatory</strong> for all motorcyclists and their passengers',
            'Children under three years of age must be secured in an <strong>appropriate child seat</strong>',
            'All vehicle parts must be kept clean, especially lights, mirrors, and windows for optimal visibility',
            'Driving under the influence of alcohol or drugs is <strong>strictly prohibited</strong>',
            '<strong>Use of mobile phones while driving is a violation</strong> of traffic laws and not permitted',
            'Reading or sending SMS messages while driving is not allowed under any circumstances',
            'You must carry a valid driving license and vehicle registration book at all times when operating a vehicle',
            'Airbags are designed to deploy in serious collisions; ensure they are not disabled',
            'When encountering a traffic police officer directing traffic, you must follow their commands'
        ]
    },
    road: {
        icon: 'bx-street-view',
        title: 'Road Conduct & Driving',
        description: 'Proper behavior and rules while on the road',
        rules: [
            'In Pakistan, vehicles must <strong>drive on the left lane</strong> of the road',
            '<strong>Overtaking must be done from the right side only</strong>; overtaking from the left is not permitted',
            'A <strong>continuous white middle line</strong> means overtaking is not allowed on that section of road',
            'When being overtaken by another vehicle, you should <strong>maintain the same speed</strong>',
            'Use of horn is <strong>not permissible near hospitals</strong> and in silence zones',
            'You are <strong>not allowed to throw anything</strong> out from a moving vehicle',
            'Zebra crossings are designated for <strong>pedestrians only</strong>, and they have the right of way',
            'At roundabouts, you must <strong>give way to traffic on your immediate right side</strong>',
            'When turning left or right at a junction with pedestrians already crossing, you must slow down and allow them to cross',
            'Pedestrians must walk on the <strong>right side of the road</strong> if no footpath is present'
        ]
    },
    special: {
        icon: 'bx-star',
        title: 'Special Zones & Conditions',
        description: 'Rules for motorways, parking, and special situations',
        rules: [
            'On motorways, <strong>pedestrians, cycles, and animals are not allowed</strong>',
            'The <strong>right or third lane on motorways is used for overtaking only</strong>',
            'Hard shoulder on motorways is reserved for <strong>vehicle breakdowns only</strong>, not for overtaking',
            'You <strong>cannot reverse, make U-turns, or stop</strong> on motorway carriageways',
            'Parking is not allowed within <strong>50 meters of an intersection</strong>',
            'You cannot park within <strong>20 meters of a curve</strong> in the road',
            'Parking is prohibited within <strong>30 meters of a fire hydrant</strong> or fire brigade station',
            '<strong>Parking on footpaths is not allowed</strong> under any circumstances',
            'When encountering emergency vehicles rushing for an emergency task, <strong>all other vehicles should yield</strong>',
            'In foggy weather, you should use <strong>fog lights and low beam lights together</strong> and move slowly',
            'During heavy rain, maintain at least a <strong>four-second gap</strong> from the vehicle ahead',
            'Learner drivers must display the letter <strong>"L"</strong> on both front and rear of their vehicle'
        ]
    }
};

// Function to display rules
function displayRules(category) {
    const data = trafficRulesData[category];
    const rulesList = document.getElementById('rulesList');
    const emptyState = document.getElementById('emptyState');
    const headerIcon = document.getElementById('headerIcon');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');

    // Update header
    if (headerIcon) headerIcon.className = `bx ${data.icon}`;
    if (categoryTitle) categoryTitle.textContent = data.title;
    if (categoryDescription) categoryDescription.textContent = data.description;

    // Update rules
    if (data.rules && data.rules.length > 0) {
        rulesList.innerHTML = data.rules.map((rule, index) => `
            <li class="rule-item">
                <div class="rule-number">${index + 1}</div>
                <div class="rule-content">
                    <div class="rule-text">${rule}</div>
                </div>
            </li>
        `).join('');
        emptyState.classList.remove('show');
    } else {
        rulesList.innerHTML = '';
        emptyState.classList.add('show');
    }
}

// Initialize Traffic Rules Component
function initTrafficRules() {
    // Category button functionality
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Display rules for selected category
            displayRules(btn.dataset.category);
        });
    });

    // Initial load
    displayRules('speed');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if traffic rules component exists on the page
    if (document.querySelector('.traffic-rules-section')) {
        initTrafficRules();
    }
});
        