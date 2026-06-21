// --- COMPLETE YOGA MATRIX DATA ARCHITECTURE ---
const poseDatabase = {
    tier1: [
        { name: "Padmasana (Lotus Seat)", tier: "Tier 1: Foundational Asana", description: "The ultimate cross-legged baseline architecture anchoring structural symmetry for deep cosmic internal meditative focus." },
        { name: "Bhujangasana (Cobra Pose)", tier: "Tier 1: Foundational Asana", description: "Shed old skins, dissolve fear, and crawl close to the unshakeable heartbeat of the earth. Opens the heart space dynamically." },
        { name: "Garudasana (Eagle Pose)", tier: "Tier 1: Foundational Asana", description: "Cultivate an unblinking sovereign gaze. Step into the expansive bird's-eye horizon vantage point to balance focus and strength." },
        { name: "Tadasana (Mountain Pose)", tier: "Tier 1: Foundational Asana", description: "The elemental blueprint of standing alignment. Anchor down into the earth's crust while extending the spine toward the celestial zenith." },
        { name: "Adho Mukha Svanasana (Downward Dog)", tier: "Tier 1: Foundational Asana", description: "An inverted cosmic V-shape that recalibrates neural pathways, stretches the posterior chain, and anchors weight deeply into the palms." },
        { name: "Trikonasana (Triangle Pose)", tier: "Tier 1: Foundational Asana", description: "A sacred geometric triad layout balancing three distinct spatial vectors to clear channels across the material body." }
    ],
    tier2: [
        { name: "Sirsasana (Headstand)", tier: "908 Master Chart Edition", description: "Inverting gravity to alter cosmic perception. Elevates pure awareness while steadying the core processing systems." },
        { name: "Natarajasana (King Dancer)", tier: "908 Master Chart Edition", description: "A fluid balancing dance of cosmic creation and dissolution. Merges intense focus with elegant grace." },
        { name: "Paschimottanasana (Seated Forward Bend)", tier: "908 Master Chart Edition", description: "Intense western stretch elemental fold. Ignites gastric fires and draws energy up the central axis network." },
        { name: "Bakasana (Crow Pose)", tier: "908 Master Chart Edition", description: "A soaring lift off the wrists requiring complete core compression and deep trust in physical leverage parameters." },
        { name: "Dhanurasana (Bow Pose)", tier: "908 Master Chart Edition", description: "The body mimics a fully drawn archer's bow, balancing opposing forces to tension the entire anterior fascial network." }
    ],
    shiva: [
        { name: "The 8,400,000 Divine Variations Matrix", tier: "8,400,000 Infinite Divine Asanas", description: "Lord Shiva declared that there are as many asanas as there are living creatures in the cosmos. You are interacting with a fragment of the infinite cosmic expansion blueprint." },
        { name: "Ananda Tandava (Dance of Bliss)", tier: "8,400,000 Infinite Divine Asanas", description: "The wild cosmic dance postures of creation, preservation, destruction, illusion, and ultimate liberation." },
        { name: "Siddhasana (Accomplished Seat)", tier: "8,400,000 Infinite Divine Asanas", description: "The supreme clean posture designed to stabilize life-force streams directly into the crown matrix." },
        { name: "Shivasana (The Cosmic Anchor)", tier: "8,400,000 Infinite Divine Asanas", description: "A divine alignment capturing the absolute stillness of cosmic space itself before form manifests." },
        { name: "Virabhadrasana IV (Celestial Warrior)", tier: "8,400,000 Infinite Divine Asanas", description: "A form representing the destructive yet righteous aspects of cosmic force, slicing through base ignorance." }
    ]
};

// --- DOM ELEMENT SELECTION BLOCKS ---
let tierSelect, manifestBtn, tierBadge, poseTitle, poseDescription;
let cardTier1, cardTier2, cardShiva, tierGallery, galleryTitle;

window.onload = function() {
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    tierBadge = document.getElementById("tier-badge");
    poseTitle = document.getElementById("pose-title");
    poseDescription = document.getElementById("pose-description");
    
    // New components
    tierGallery = document.getElementById("tier-gallery");
    galleryTitle = document.getElementById("gallery-title");

    cardTier1 = document.getElementById("card-tier1");
    cardTier2 = document.getElementById("card-tier2");
    cardShiva = document.getElementById("card-shiva");

    // Default configuration option values
    tierSelect.value = "tier1";

    manifestBtn.addEventListener("click", manifestRandomPose);

    cardTier1.addEventListener("click", () => triggerCardSelection("tier1"));
    cardTier2.addEventListener("click", () => triggerCardSelection("tier2"));
    cardShiva.addEventListener("click", () => triggerCardSelection("shiva"));
};

function triggerCardSelection(selectedCategory) {
    tierSelect.value = selectedCategory;
    manifestRandomPose();
}

// --- ENGINE MANIFESTATION ENGINE ---
function manifestRandomPose() {
    const selectedValue = tierSelect.value;
    let availablePoses = [];

    if (selectedValue === "all") {
        availablePoses = [...poseDatabase.tier1, ...poseDatabase.tier2, ...poseDatabase.shiva];
    } else if (selectedValue === "tier1") {
        availablePoses = poseDatabase.tier1;
    } else if (selectedValue === "tier2") {
        availablePoses = poseDatabase.tier2;
    } else if (selectedValue === "shiva") {
        availablePoses = poseDatabase.shiva;
    }

    // 1. Pick and show the primary randomized highlight pose
    if (availablePoses.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePoses.length);
        const selectedPose = availablePoses[randomIndex];

        displayPose(selectedPose);

        // 2. Clear out old gallery cards and print ALL options in this tier group
        tierGallery.innerHTML = "";
        galleryTitle.style.display = "block"; // Turn on title visibility

        availablePoses.forEach(pose => {
            // Create a small card element for each pose option
            const card = document.createElement("div");
            card.className = "gallery-card";
            
            card.innerHTML = `
                <div class="gallery-pose-name">${pose.name}</div>
                <div class="gallery-pose-desc">${pose.description.substring(0, 75)}...</div>
            `;

            // If a user clicks an option from the list, load it up to the main display panel!
            card.addEventListener("click", () => displayPose(pose));

            tierGallery.appendChild(card);
        });
    }
}

// Helper to write values into the central viewport panel
function displayPose(pose) {
    tierBadge.textContent = pose.tier;
    poseTitle.textContent = pose.name;
    poseDescription.textContent = pose.description;
}

