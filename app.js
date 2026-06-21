// --- Data Tier Arrays (Simulating your loaded databases) ---
let foundationalList = [
    { name: "Tadasana", description: "Mountain Pose: The root grounding architecture.", tier: "Foundational" },
    { name: "Bhujangasana", description: "Cobra Pose: Opens heart, burns through old skin.", tier: "Foundational" },
    { name: "Adho Mukha Svanasana", description: "Downward Facing Dog: Deep foundational line integration.", tier: "Foundational" }
];
let masterChartList = [
    { name: "Garudasana", description: "Eagle Pose: Fixed unblinking focal lock.", tier: "Master Chart" },
    { name: "Mayurasana", description: "Peacock Pose: Alchemical fire ingestion.", tier: "Master Chart" }
];
let styleVariationsList = [
    { name: "Vinyasa Sun Salutation A", description: "Fluid breath-linked movement transitions.", tier: "Style Variations" },
    { name: "Yin Dragon Hold", description: "Deep facial matrix expansion via targeted stillness.", tier: "Style Variations" },
    { name: "Hatha Triangle Alignment", description: "Pranic energetic structural balancing.", tier: "Style Variations" }
];

const TOTAL_SHIVA_POSES = 8400000;
let currentMenuState = "MAIN"; 
let currentBrowsingPage = 0;
const PAGE_SIZE = 10;

function printToConsole(text) {
    consoleDisplay.textContent = text;
}

// Render Engine for menus
function renderMenu() {
    menuOptions.innerHTML = "";
    inputContainer.style.display = "none";

    if (currentMenuState === "MAIN") {
        navCrumbs.textContent = "MAIN DASHBOARD";
        printToConsole("Select an evolutionary track from the dashboard options below.");
        
        createMenuButton("1. 84 Foundational Asanas (" + foundationalList.length + " loaded)", () => triggerWitnessCheck(() => enterSubMenu(foundationalList, "84 Foundational Asanas")));
        createMenuButton("2. 908 Master Chart Edition (" + masterChartList.length + " loaded)", () => triggerWitnessCheck(() => enterSubMenu(masterChartList, "908 Master Chart Series")));
        createMenuButton("3. Style-Specific Variations Matrix", () => triggerWitnessCheck(() => enterStyleMenu()));
        createMenuButton("4. 8,400,000 Infinite Divine Asanas of Lord Shiva", () => triggerWitnessCheck(() => enterShivaMenu()));
        createMenuButton("5. Invoke Sakshi Bhava (Witness Consciousness Meditative Grounding)", () => runDedicatedWitnessMeditation());
        createMenuButton("6. Explore Yoga Wisdom & Eternal Happiness (Ananda Matrix)", () => runWisdomMatrix());
        createMenuButton("7. Traverse Patanjali's Eight Limbs (Ashtanga Roadmap) 📜", () => runEightLimbsMatrix());
    }
}

function createMenuButton(text, clickHandler) {
    const btn = document.createElement("button");
    btn.className = "menu-btn";
    btn.textContent = text;
    btn.onclick = clickHandler;
    menuOptions.appendChild(btn);
}

// --- RANDOM WITNESS INTERCEPT LOGIC (30% Chance check) ---
function triggerWitnessCheck(callback) {
    if (Math.random() < 0.30) {
        const fluctuations = [
            "A wave of modern life anxiety or time pressure hits your awareness.",
            "You encounter a memory of a difficult life moment or past conflict.",
            "Your mind generates an intense judgment about your progress or day's productivity.",
            "A phantom wave of boredom, restlessness, or physical frustration arises.",
            "An impulse of attachment, checking your notifications, or chasing distraction surfaces."
        ];
        const pickedVritti = fluctuations[Math.floor(Math.random() * fluctuations.length)];
        
        navCrumbs.textContent = "👁️ WITNESS INTERCEPT - SAKSHI BHAVA 👁️";
        printToConsole(`⚡ MENTAL VRITTI:\n${pickedVritti}\n\n🧘 THE SAKSHI PRACTICE:\nDo not suppress this wave. Do not engage, argue, or agree with it.\nSimply look at it as an objective object in space. Watch it arise, float across the theater of your mind, and naturally dissipate.`);
        
        createMenuButton("👉 Take a deep breath & Step into the seat of the Witness", () => { renderMenu(); callback(); });
    } else {
        callback();
    }
}

// --- EIGHT LIMBS SYSTEM ---
function runEightLimbsMatrix() {
    navCrumbs.textContent = "THE ASHTANGA MATRIX: EIGHT LIMBS";
    menuOptions.innerHTML = "";
    
    const limbs = [
        { name: "1. YAMAS", text: "🌿 Social Ethics:\nConsists of Ahimsa (non-harming), Satya (truth), Asteya (non-stealing), Brahmacharya (wise energy alignment), and Aparigraha.\n\n🛠️ CODE APPLICATION: Clean coding ethics. Writing clear instructions without creating toxic architectural loops." },
        { name: "2. NIYAMAS", text: "✨ Internal Disciplines:\nYour inner checklist: Saucha (purity), Santosha (contentment), Tapas (discipline), Svadhyaya (self-study), and Ishvara Pranidhana." },
        { name: "3. ASANA", text: "🧘 Physical Postures:\n'Sthira-Sukham-Asanam': a posture that is completely stable and entirely comfortable.\n\n💡 REVELATION: Your dynamic database objects handle this specific limb structural shell!" },
        { name: "4. PRANAYAMA", text: "🌬️ Energy Optimization:\nThe mastery of the breathing matrix. Calms biological respiration to quiet the mind's anxious loops." },
        { name: "5. PRATYAHARA", text: "🔌 Sensory Fasting:\nDrawing senses backward into stillness like a turtle pulling limbs into its shell." },
        { name: "6. DHARANA", text: "🎯 Concentrated Binding:\nBinding the mind's loose awareness to one solitary focal vector grid point." },
        { name: "7. DHYANA", text: "🌊 Sustained Meditation:\nWhen focus becomes effortless and the stream of consciousness flows unbroken." },
        { name: "8. SAMADHI", text: "🕉️ Cosmic Deep Merging:\nThe absolute horizon. Local ego layers completely dissolve into infinite unconditioned unified being." }
    ];

    limbs.forEach(limb => {
        createMenuButton(limb.name, () => printToConsole(limb.text));
    });
    createMenuButton("🔙 [Return to Main Dashboard]", () => { currentMenuState = "MAIN"; renderMenu(); });
}

// --- SHIVA VIRTUAL ARCHITECTURE (Generative Calculation Patterns) ---
function generateShivaPoseOnTheFly(index) {
    let realm, sanskritClass, symbolicMeaning, realizationBlock = "";

    if (index <= 2000000) {
        realm = "Plant Kingdom & Immobile Life Forms"; sanskritClass = "Sthavara";
        symbolicMeaning = "Teaches patience, anchoring, drawing nourishment from silence.";
        realizationBlock = "\n🌱 Medicine: Tap into the unshakeable stillness of nature—standing firm.";
    } else if (index <= 2900000) {
        realm = "Aquatic Ecosystem Creatures"; sanskritClass = "Jalachara";
        symbolicMeaning = "Teaches adaptability, emotional fluidity, navigating deep waters.";
        realizationBlock = "\n💧 Medicine: Cultivate internal fluidity, drop structural rigidity.";
    } else if (index <= 4000000) {
        realm = "Insects, Crawlers & Reptiles"; sanskritClass = "Krimichara";
        symbolicMeaning = "Teaches sensory focus, grounded survival instincts, shedding skins.";
        realizationBlock = "\n🦎 Medicine: Shed outdated protective ego layouts and transform raw drives.";
    } else if (index <= 5000000) {
        realm = "Avian Realms & Winged Creatures"; sanskritClass = "Khetachara";
        symbolicMeaning = "Teaches liberation from gravity, expansive heart-space bird's-eye views.";
        realizationBlock = "\n🦅 Medicine: Rest completely above human noise from a serene perspective.";
    } else {
        realm = "Humanoids, Sages & Rational Beings"; sanskritClass = "Manavachara";
        symbolicMeaning = "Direct awakening, pure inquiry, self-study containment structures.";
        realizationBlock = "\n🕉️ Medicine: Recognize the silent inner Witness as your true home.";
    }

    const prefixes = ["Ananda", "Shiva", "Bhairava", "Maha", "Siddha", "Yogi", "Deva", "Sri"];
    const geometricPaths = ["Mandala", "Mudrayana", "Spinal Helix", "Lotus Lock", "Prana Matrix", "Chakra Wave"];
    const prefix = prefixes[index % prefixes.length];
    const path = geometricPaths[Math.floor(index / prefixes.length) % geometricPaths.length];

    const poseName = `[${sanskritClass}] ${prefix} ${path} Asana (Form #${index})`;
    const fullText = `✨ POSE: ${prefix} ${path} Asana (ID #${index})\n-------------------------------------------------------\n🌌 COSMIC REALM  : ${realm}\n🧘 SPIRITUAL PATH : ${symbolicMeaning}${realizationBlock}`;
    
    return { name: poseName, description: fullText };
}

function enterShivaMenu() {
    navCrumbs.textContent = "8,400,000 DIVINE ASANAS TERMINAL";
    menuOptions.innerHTML = "";
    
    createMenuButton("1. Look up a divine asana by precise ID number", () => {
        printToConsole("Enter an ID number between 1 and 8400000 in the terminal interface box below:");
        activateDirectInput((val) => {
            let id = parseInt(val);
            if (id >= 1 && id <= TOTAL_SHIVA_POSES) {
                let pose = generateShivaPoseOnTheFly(id);
                printToConsole(pose.description);
            } else {
                printToConsole("⚠️ Cosmic ID frequency range unmapped. Choose 1 - 8400000.");
            }
        });
    });

    createMenuButton("2. Open the Infinite Paginated Scroll Browser", () => runInfiniteBrowser());
    createMenuButton("🔙 [Return to Main Dashboard]", () => { currentMenuState = "MAIN"; renderMenu(); });
}

function runInfiniteBrowser() {
    menuOptions.innerHTML = "";
    let startIdx = currentBrowsingPage * PAGE_SIZE;
    let endIdx = Math.min(startIdx + PAGE_SIZE, TOTAL_SHIVA_POSES);

    let listOutput = `--- Viewing Cosmic Postures ${startIdx + 1} to ${endIdx} of ${TOTAL_SHIVA_POSES} ---\n`;
    for (let i = startIdx; i < endIdx; i++) {
        let p = generateShivaPoseOnTheFly(i + 1);
        listOutput += `• ${p.name}\n`;
    }
    printToConsole(listOutput);

    createMenuButton("➡️ Next Page", () => { currentBrowsingPage++; runInfiniteBrowser(); });
    if (currentBrowsingPage > 0) {
        createMenuButton("⬅️ Previous Page", () => { currentBrowsingPage--; runInfiniteBrowser(); });
    }
    createMenuButton("🔙 Exit Browser", () => enterShivaMenu());
}

// --- STANDARD SUB-MENUS ---
function enterSubMenu(list, title) {
    navCrumbs.textContent = `EXPLORING: ${title}`;
    menuOptions.innerHTML = "";
    list.forEach(pose => {
        createMenuButton(`• ${pose.name}`, () => {
            let output = `🧘 POSE DETAILS 🧘\nName: ${pose.name}\nTier: ${pose.tier}\nDescription: ${pose.description}`;
            
            // Check & Append Animal Wisdom dynamically
            let lower = pose.name.toLowerCase();
            if (lower.includes("cobra") || lower.includes("bhujangasana")) {
                output += "\n\n🐾 ANIMAL MEDICINE: THE COBRA\nShed old skins, dissolve fear, crawl close to the unshakeable earth heartbeat.";
            } else if (lower.includes("eagle") || lower.includes("garudasana")) {
                output += "\n\n🐾 ANIMAL MEDICINE: THE EAGLE\nUnblinking sovereign gaze. Step into the expansive bird's-eye horizon vantage.";
            }
            printToConsole(output);
        });
    });
    createMenuButton("🔙 Back to Main Dashboard", () => { currentMenuState = "MAIN"; renderMenu(); });
}

// --- INTERACTIVE SYSTEM CONTROLLER INPUT HANDLING ---
let currentInputAction = null;
function activateDirectInput(actionCallback) {
    inputContainer.style.display = "block";
    userInput.value = "";
    userInput.focus();
    currentInputAction = actionCallback;
}

function handleInputSubmit() {
    if (currentInputAction && userInput.value.trim() !== "") {
        currentInputAction(userInput.value.trim());
    }
}

// Wisdom Matrix Stub
function runWisdomMatrix() {
    navCrumbs.textContent = "THE ANANDA MATRIX";
    menuOptions.innerHTML = "";
    createMenuButton("1. ANANDA - Unconditioned Bliss", () => printToConsole("💡 ANANDA:\nYour core self (Atman) is already perfectly radiant, complete, and unalterable. Drop the need to fix or achieve. Rest in pure being."));
    createMenuButton("2. SANTOSHA - Radical Contentment", () => printToConsole("💡 SANTOSHA:\nFalling radically in love with the precise current arrangement layout of reality. Drop resistance to what is."));
    createMenuButton("🔙 Back", () => { currentMenuState = "MAIN"; renderMenu(); });
}

function runDedicatedWitnessMeditation() {
    printToConsole("🕉️ SAKSHI BHAVA GROUNDING DOCK\n\n1. PHYSICAL LAYER: Watch external sounds pass without labeling them.\n2. EMOTIONAL LAYER: Notice current transient anxieties or drives like passing storms.\n3. INTELLECTUAL LAYER: Witness the code processing engine itself.\n\nYou are not the storm. You are the infinite vast sky.");
}

// Start Engine
// Master initialization block
let consoleDisplay, menuOptions, navCrumbs, inputContainer, userInput;

window.onload = function() {
    consoleDisplay = document.getElementById("console-display");
    menuOptions = document.getElementById("menu-options");
    navCrumbs = document.getElementById("nav-crumbs");
    inputContainer = document.getElementById("input-container");
    userInput = document.getElementById("user-input");

    renderMenu();
};
