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

// --- OPTIONS 5, 6, 7 TEXT MATRIX POOLS ---
const sakshiPractices = [
    {
        name: "Witness Intercept — Sakshi Bhava 👁️",
        tier: "5. Witness Consciousness Meditative Grounding",
        description: "⚡ MENTAL VRITTI:\nYou encounter a memory of a difficult life moment or past conflict.\n\n🧘 THE SAKSHI PRACTICE:\nDo not suppress this wave. Do not engage, argue, or agree with it. Simply look at it as an objective object in space. Watch it arise, float across the theater of your mind, and naturally dissipate."
    }
];

const wisdomMatrix = [
    { name: "The Sat-Chit-Ananda Nexus ✨", tier: "6. Yoga Wisdom & Eternal Happiness", description: "True happiness is not earned or constructed; it is uncovered. Your essential nature is absolute existence, pure consciousness, and uncaused radiant joy (Ananda)." },
    { name: "Vairagya Wisdom Pathway 🕊️", tier: "6. Yoga Wisdom & Eternal Happiness", description: "The practice of non-attachment. Let the world flow freely without grabbing at strings, realizing you are the unchanging sky behind the passing clouds." },
    { name: "The Prana-Vayu Core Principle 🌀", tier: "6. Yoga Wisdom & Eternal Happiness", description: "When the breath wavers, the mind is unsteady. But when the breath is still, the mind achieves profound, unshakeable tranquility." }
];

const ashtangaLimbs = [
    { name: "1. Yama // Social Restraints", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The foundation of harmony: Ahimsa (Non-violence), Satya (Truthfulness), Asteya (Non-stealing), Brahmacharya (Wise energy preservation), and Aparigraha (Non-possessiveness)." },
    { name: "2. Niyama // Personal Observances", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Inner purification pathways: Saucha (Purity), Santosha (Contentment), Tapas (Disciplined heat), Svadhyaya (Self-study), and Ishvara Pranidhana (Surrender to the higher order)." },
    { name: "3. Asana // Physical Posture Integration", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Establishing a steady, stable, and completely comfortable seat to refine body-mind awareness for high-level expansion." },
    { name: "4. Pranayama // Breath Regulation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The conscious control and expansion of vital life-force streams through specialized breath structuring." },
    { name: "5. Pratyahara // Sensory Withdrawal", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Drawing attention inward, disconnecting sensory receptors from external objects to center focus completely within." },
    { name: "6. Dharana // One-Pointed Concentration", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Binding the attention of the mind to a single locus point or geometric anchor without allowing distraction." },
    { name: "7. Dhyana // Sustained Meditation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "An unbroken, fluid stream of pure awareness pouring continuously toward the object of contemplation." },
    { name: "8. Samadhi // Absolute Liberation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The complete absorption of identity where the witness and the object of meditation merge into single unified consciousness." }
];

// --- UNIVERSAL INDEXING DATA HASH GENERATOR ---
function generateAsanaObject(tierKey, id) {
    const base = baseAsanas[id % baseAsanas.length];
    const modifier = cosmicModifiers[(id * 3) % cosmicModifiers.length];
    const attribute = divineAttributes[(id * 7) % divineAttributes.length];
    
    if (tierKey === "tier1") {
        return { name: `${base} // Foundational Mode #${id}`, tier: "Tier 1: 84 Foundational Asanas", description: `Core structural blueprint configuration #${id} out of 84. This layout features a ${modifier} anchoring physical symmetry.` };
    } else if (tierKey === "tier2") {
        return { name: `${base} Extensio // Master Chart v${id}`, tier: "908 Master Chart Edition", description: `Advanced chart system configuration position #${id} of 908. Realizing a specialized ${modifier} integrated directly with the essence ${attribute}.` };
    } else if (tierKey === "variations") {
        return { name: `${base} Variation // Matrix Key ${id}`, tier: "Style-Specific Variations Matrix", description: `Style variation alignment branch index #${id} out of 8,000. Cultivating a specialized sequence for ${modifier}.` };
    } else if (tierKey === "shiva") {
        return { name: `Divine Form #${id} // ${base} Manifestation`, tier: "8,400,000 Infinite Divine Asanas", description: `Cosmic expansion matrix coordinate sequence position ${id.toLocaleString()} out of 8,400,000. Lord Shiva's unique vibrational signature charting the profound light ${attribute}.` };
    }
}

// --- DOM REGISTRATION SELECTION BLOCKS ---
let tierSelect, manifestBtn, exitBtn, tierBadge, poseTitle, poseDescription;
let cardTier1, cardTier2, cardVariations, tierGallery, galleryTitle, searchContainer, coordinateInput, searchLabel;

window.onload = function() {
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    exitBtn = document.getElementById("exit-btn");
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
    cardVariations = document.getElementById("card-variations");

    tierSelect.value = "tier1";

    manifestBtn.addEventListener("click", manifestRandomPose);
    exitBtn.addEventListener("click", exitToOceanCam);
    coordinateInput.addEventListener("input", handleCoordinateSearch);

    cardTier1.addEventListener("click", () => triggerCardSelection("tier1"));
    cardTier2.addEventListener("click", () => triggerCardSelection("tier2"));
    cardVariations.addEventListener("click", () => triggerCardSelection("variations"));
};

function triggerCardSelection(selectedCategory) {
    tierSelect.value = selectedCategory;
    manifestRandomPose();
}

function getTierLimits(tierValue) {
    if (tierValue === "tier1") return { max: 84, key: "tier1", numerical: true };
    if (tierValue === "tier2") return { max: 908, key: "tier2", numerical: true };
    if (tierValue === "variations") return { max: 8000, key: "variations", numerical: true };
    if (tierValue === "shiva") return { max: 8400000, key: "shiva", numerical: true };
    return { max: 0, key: tierValue, numerical: false };
}

// --- ENGINE EXECUTION ENGINE ---
function manifestRandomPose() {
    const currentTier = tierSelect.value;
    const limits = getTierLimits(currentTier);

    if (limits.numerical) {
        searchContainer.style.display = "block";
        galleryTitle.style.display = "block";
        const randomID = Math.floor(Math.random() * limits.max) + 1;
        coordinateInput.max = limits.max;
        coordinateInput.value = randomID;
        searchLabel.textContent = `Explore Range (1 - ${limits.max.toLocaleString()}):`;
        renderGalleryView(limits.key, randomID, limits.max);
    } else {
        searchContainer.style.display = "none";
        galleryTitle.style.display = "none";
        tierGallery.innerHTML = "";
        
        let pool = [];
        if (currentTier === "sakshi") pool = sakshiPractices;
        else if (currentTier === "wisdom") pool = wisdomMatrix;
        else if (currentTier === "limbs") pool = ashtangaLimbs;

        if (pool.length > 0) {
            const randomIdx = Math.floor(Math.random() * pool.length);
            displayPose(pool[randomIdx]);
        }
    }
}

function handleCoordinateSearch() {
    const limits = getTierLimits(tierSelect.value);
    if (!limits.numerical) return;

    let userVal = parseInt(coordinateInput.value);
    if (isNaN(userVal) || userVal < 1) userVal = 1;
    if (userVal > limits.max) userVal = limits.max;
    
    coordinateInput.value = userVal;
    renderGalleryView(limits.key, userVal, limits.max);
}

function renderGalleryView(tierKey, targetID, maxLimit) {
    const focalPose = generateAsanaObject(tierKey, targetID);
    displayPose(focalPose);

    tierGallery.innerHTML = "";
    let start = Math.max(1, targetID - 4);
    let end = Math.min(maxLimit, start + 8);
    if (end - start < 8) start = Math.max(1, end - 8);

    for (let i = start; i <= end; i++) {
        const neighboringPose = generateAsanaObject(tierKey, i);
        const card = document.createElement("div");
        card.className = "gallery-card";
        
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

function displayPose(pose) {
    tierBadge.textContent = pose.tier;
    poseTitle.textContent = pose.name;
    poseDescription.textContent = pose.description;
}

// --- COSMIC DISPLACEMENT CHANNEL TERMINAL ---
function exitToOceanCam() {
    window.location.href = "https://www.goodcleanfunusa.com/pages/surf-cam";
}
