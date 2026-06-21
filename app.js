// --- COMPLETE YOGA MATRIX DATA ARCHITECTURE ---
const poseDatabase = {
    tier1: [
        { name: "Padmasana (Lotus Seat)", tier: "Tier 1: Foundational Asana", description: "The ultimate cross-legged baseline architecture anchoring structural symmetry for deep cosmic internal meditative focus." },
        { name: "Bhujangasana (Cobra Pose)", tier: "Tier 1: Foundational Asana", description: "Shed old skins, dissolve fear, and crawl close to the unshakeable heartbeat of the earth. Opens the heart space dynamically." },
        { name: "Garudasana (Eagle Pose)", tier: "Tier 1: Foundational Asana", description: "Cultivate an unblinking sovereign gaze. Step into the expansive bird's-eye horizon vantage point to balance focus and strength." }
    ],
    tier2: [
        { name: "Sirsasana (Headstand)", tier: "908 Master Chart Edition", description: "Inverting gravity to alter cosmic perception. Elevates pure awareness while steadying the core processing systems." },
        { name: "Natarajasana (King Dancer)", tier: "908 Master Chart Edition", description: "A fluid balancing dance of cosmic creation and dissolution. Merges intense focus with elegant grace." },
        { name: "Paschimottanasana (Seated Forward Bend)", tier: "908 Master Chart Edition", description: "Intense western stretch elemental fold. Ignites gastric fires and draws energy up the central axis network." }
    ],
    shiva: [
        { name: "The 8,400,000 Divine Variations Matrix", tier: "8,400,000 Infinite Divine Asanas", description: "Lord Shiva declared that there are as many asanas as there are living creatures in the cosmos. You are interacting with a fragment of the infinite cosmic expansion blueprint." },
        { name: "Ananda Tandava (Dance of Bliss)", tier: "8,400,000 Infinite Divine Asanas", description: "The wild cosmic dance postures of creation, preservation, destruction, illusion, and ultimate liberation." },
        { name: "Siddhasana (Accomplished Seat)", tier: "8,400,000 Infinite Divine Asanas", description: "The supreme clean posture designed to stabilize life-force streams directly into the crown matrix." }
    ]
};

// --- DOM ELEMENT SELECTION BLOCKS ---
let tierSelect, manifestBtn, tierBadge, poseTitle, poseDescription;
let cardTier1, cardTier2, cardShiva;

window.onload = function() {
    // Dropdown and buttons
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    tierBadge = document.getElementById("tier-badge");
    poseTitle = document.getElementById("pose-title");
    poseDescription = document.getElementById("pose-description");

    // Clickable structural metric blocks
    cardTier1 = document.getElementById("card-tier1");
    cardTier2 = document.getElementById("card-tier2");
    cardShiva = document.getElementById("card-shiva");

    // Execution Event Bindings
    manifestBtn.addEventListener("click", manifestRandomPose);

    // Click shortcuts for the cards
    cardTier1.addEventListener("click", () => triggerCardSelection("tier1"));
    cardTier2.addEventListener("click", () => triggerCardSelection("tier2"));
    cardShiva.addEventListener("click", () => triggerCardSelection("shiva"));
};

// --- SHORTCUT CARD CLICK ACTION ---
function triggerCardSelection(selectedCategory) {
    // Automatically switch the dropdown value to match the clicked block
    tierSelect.value = selectedCategory;
    // Instantly fire a new data selection run
    manifestRandomPose();
}

// --- ENGINE MANIFESTATION ENGINE ---
function manifestRandomPose() {
    const selectedValue = tierSelect.value;
    let availablePoses = [];

    // Evaluate dropdown selection scope array targets
    if (selectedValue === "all") {
        availablePoses = [...poseDatabase.tier1, ...poseDatabase.tier2, ...poseDatabase.shiva];
    } else if (selectedValue === "tier1") {
        availablePoses = poseDatabase.tier1;
    } else if (selectedValue === "tier2") {
        availablePoses = poseDatabase.tier2;
    } else if (selectedValue === "shiva") {
        availablePoses = poseDatabase.shiva;
    }

    // Pull a random pose architecture from the assigned matrix depth
    if (availablePoses.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePoses.length);
        const selectedPose = availablePoses[randomIndex];

        // Print components directly to output screen slots
        tierBadge.textContent = selectedPose.tier;
        poseTitle.textContent = selectedPose.name;
        poseDescription.textContent = selectedPose.description;
    }
}
