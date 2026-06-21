// --- BASE POSTURE ARCHITECTURE SEEDS ---
const baseAsanas = [
    "Padmasana", "Bhujangasana", "Garudasana", "Tadasana", "Adho Mukha Svanasana", 
    "Trikonasana", "Sirsasana", "Natarajasana", "Paschimottanasana", "Bakasana", 
    "Dhanurasana", "Siddhasana", "Shivasana", "Virabhadrasana", "Vrikshasana",
    "Sukhasana", "Matsyasana", "Halasana", "Ustrasana", "Chakrasana", "Mayurasana"
];

const cosmicModifiers = [
    "Internal Meditative Focus Alignment", "Dynamic Heart-Opening Extension", 
    "Sovereign Horizon Vantage Elevation", "Celestial Zenith Axis Extension", 
    "Neural Pathway Recalibration Inversion", "Sacred Geometric Triad Orientation", 
    "Pure Awareness Core Stabilization", "Fluid Bliss Creation Sequence", 
    "Central Energy Axis Compression", "Pranic Life-Force Stream Stabilization",
    "Absolute Stillness Void Suspension", "Ignited Gastric Fire Core Fold"
];

const divineAttributes = [
    "of Lord Shiva's Eternal Vision", "of Unconditioned Cosmic Bliss", "of Radical Contentment Mastery",
    "of the Infinite Matrix Horizon", "of Sovereign Spiritual Awakening", "of Supreme Geometrical Balance"
];

// --- UNIVERSAL INDEXING HASH FORMULA ---
function generateAsanaObject(tierKey, id) {
    const base = baseAsanas[id % baseAsanas.length];
    const modifier = cosmicModifiers[(id * 3) % cosmicModifiers.length];
    const attribute = divineAttributes[(id * 7) % divineAttributes.length];
    
    if (tierKey === "tier1") {
        return {
            name: `${base} // Foundational Mode #${id}`,
            tier: "Tier 1: 84 Foundational Asanas",
            description: `Core structural blueprint configuration #${id} out of 84. This layout features a ${modifier} anchoring physical symmetry.`
        };
    } else if (tierKey === "tier2") {
        return {
            name: `${base} Extensio // Master Chart v${id}`,
            tier: "908 Master Chart Edition",
            description: `Advanced chart system configuration position #${id} of 908. Realizing a specialized ${modifier} integrated directly with the essence ${attribute}.`
        };
    } else if (tierKey === "shiva") {
        return {
            name: `Divine Form #${id} // ${base} Manifestation`,
            tier: "8,400,000 Infinite Divine Asanas",
            description: `Cosmic expansion matrix coordinate sequence position ${id.toLocaleString()} out of 8,400,000. Lord Shiva's unique vibrational signature channeling the profound light ${attribute}.`
        };
    }
}

// --- DOM ELEMENT SELECTION BLOCKS ---
let tierSelect, manifestBtn, tierBadge, poseTitle, poseDescription;
let cardTier1, cardTier2, cardShiva, tierGallery, galleryTitle, searchContainer, coordinateInput, searchLabel;

window.onload = function() {
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    tierBadge = document.getElementById("tier-badge");
    poseTitle = document.getElementById("pose-title");
    poseDescription = document.getElementById("pose-description");
    
    tierGallery = document.getElementById("tier-gallery");
    galleryTitle = document.getElementById("gallery-title");
    searchContainer = document.getElementById("search-container");
    coordinateInput = document.getElementById("coordinate-input");
    searchLabel = document.getElementById("search-label");

    cardTier1 = document.getElementById("card-tier1");
    cardTier2 = document.getElementById("card-tier2");
    cardShiva = document.getElementById("card-shiva");

    tierSelect.value = "tier1";

    manifestBtn.addEventListener("click", manifestRandomPose);
    coordinateInput.addEventListener("input", handleCoordinateSearch);

    cardTier1.addEventListener("click", () => triggerCardSelection("tier1"));
    cardTier2.addEventListener("click", () => triggerCardSelection("tier2"));
    cardShiva.addEventListener("click", () => triggerCardSelection("shiva"));
};

function triggerCardSelection(selectedCategory) {
    tierSelect.value = selectedCategory;
    manifestRandomPose();
}

function getTierLimits(tierValue) {
    if (tierValue === "tier1") return { max: 84, key: "tier1" };
    if (tierValue === "tier2") return { max: 908, key: "tier2" };
    return { max: 8400000, key: "shiva" };
}

// --- CORE MANIFESTATION RUNNER ---
function manifestRandomPose() {
    const limits = getTierLimits(tierSelect.value);
    
    // Pick a totally random number anywhere in the true range scale limits
    const randomID = Math.floor(Math.random() * limits.max) + 1;
    
    // Sync search input box context visual elements
    searchContainer.style.display = "block";
    galleryTitle.style.display = "block";
    coordinateInput.max = limits.max;
    coordinateInput.value = randomID;
    searchLabel.textContent = `Explore Range (1 - ${limits.max.toLocaleString()}):`;

    renderGalleryView(limits.key, randomID, limits.max);
}

// --- REALTIME COORDINATE NAVIGATOR SEARCH ---
function handleCoordinateSearch() {
    const limits = getTierLimits(tierSelect.value);
    let userVal = parseInt(coordinateInput.value);

    if (isNaN(userVal) || userVal < 1) userVal = 1;
    if (userVal > limits.max) userVal = limits.max;
    
    coordinateInput.value = userVal;
    renderGalleryView(limits.key, userVal, limits.max);
}

// --- VIEWPORT VIEWER RENDERER ---
function renderGalleryView(tierKey, targetID, maxLimit) {
    // 1. Force the main display viewer card to target this exact coordinate item
    const focalPose = generateAsanaObject(tierKey, targetID);
    tierBadge.textContent = focalPose.tier;
    poseTitle.textContent = focalPose.name;
    poseDescription.textContent = focalPose.description;

    // 2. Build out neighboring scrolling coordinates so users can browse forward/backward sequentially
    tierGallery.innerHTML = "";
    
    let start = Math.max(1, targetID - 4);
    let end = Math.min(maxLimit, start + 8);
    if (end - start < 8) start = Math.max(1, end - 8);

    for (let i = start; i <= end; i++) {
        const neighboringPose = generateAsanaObject(tierKey, i);
        const card = document.createElement("div");
        card.className = "gallery-card";
        
        // Highlight the actively active custom target sequence code block card frame
        if (i === targetID) {
            card.style.borderColor = "#cc721b";
            card.style.backgroundColor = "#1c1918";
        }

        card.innerHTML = `
            <div class="gallery-pose-name">${neighboringPose.name}</div>
            <div class="gallery-pose-desc">${neighboringPose.description.substring(0, 95)}...</div>
        `;

        card.addEventListener("click", () => {
            coordinateInput.value = i;
            renderGalleryView(tierKey, i, maxLimit);
        });

        tierGallery.appendChild(card);
    }
}
