// --- YOGA INFINITY DATA MATRIX ---
const poseDatabase = {
    tier1: [
        { name: "Padmasana (Lotus Seat)", tier: "Tier 1: Foundational Asana", description: "The ultimate cross-legged baseline architecture anchoring structural symmetry for deep cosmic internal meditative focus." },
        { name: "Bhujangasana (Cobra Pose)", tier: "Tier 1: Foundational Asana", description: "Shed old skins, dissolve fear, and crawl close to the unshakeable heartbeat of the earth. Opens the heart space dynamically." },
        { name: "Garudasana (Eagle Pose)", tier: "Tier 1: Foundational Asana", description: "Cultivate an unblinking sovereign gaze. Step into the expansive bird's-eye horizon vantage point to balance focus and strength." }
    ],
    tier2: [
        { name: "Sirsasana (Headstand)", tier: "Tier 2: Intermediate Extension", description: "Inverting gravity to alter cosmic perception. Elevates pure awareness while steadying the core processing systems." },
        { name: "Natarajasana (King Dancer)", tier: "Tier 2: Intermediate Extension", description: "A fluid balancing dance of cosmic creation and dissolution. Merges intense focus with elegant grace." }
    ]
};

// --- DOM ELEMENT SELECTION ---
let tierSelect, manifestBtn, tierBadge, poseTitle, poseDescription;

window.onload = function() {
    // Bind variables directly to our beautiful cosmic layout IDs
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    tierBadge = document.getElementById("tier-badge");
    poseTitle = document.getElementById("pose-title");
    poseDescription = document.getElementById("pose-description");

    // Add event listener to the click action
    manifestBtn.addEventListener("click", manifestRandomPose);
};

// --- CORE INTERFACE LOGIC ---
function manifestRandomPose() {
    const selectedValue = tierSelect.value;
    let availablePoses = [];

    // Compile selection parameters based on dropdown state
    if (selectedValue === "all") {
        availablePoses = [...poseDatabase.tier1, ...poseDatabase.tier2];
    } else if (selectedValue === "tier1") {
        availablePoses = poseDatabase.tier1;
    } else if (selectedValue === "tier2") {
        availablePoses = poseDatabase.tier2;
    }

    // Pull a random pose architecture from the selected tier scope
    if (availablePoses.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePoses.length);
        const selectedPose = availablePoses[randomIndex];

        // Update the display cards dynamically!
        tierBadge.textContent = selectedPose.tier;
        poseTitle.textContent = selectedPose.name;
        poseDescription.textContent = selectedPose.description;
    }
}
