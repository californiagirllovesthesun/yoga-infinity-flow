package com.yogainfinity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

class YogaPose {
    private String name;
    private String description;
    private String tier;

    public YogaPose(String name, String description, String tier) {
        this.name = name;
        this.description = description;
        this.tier = tier;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getTier() { return tier; }
}

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/matrix")
public class YogaInfinityFlow {

    private static final int TOTAL_SHIVA_POSES = 8400000;
    private static final Random random = new Random();
    
    private static final ArrayList<YogaPose> foundationalList = new ArrayList<>();
    private static final ArrayList<YogaPose> masterChartList = new ArrayList<>();
    private static final ArrayList<YogaPose> styleVariationsList = new ArrayList<>();

    public static void main(String[] args) {
        loadDatabase(foundationalList, masterChartList, styleVariationsList, "/Users/katiecarlson/Desktop/poses.txt");
        SpringApplication.run(YogaInfinityFlow.class, args);
    }

    // Endpoint 1: Get Random Pose or Random Animal Wisdom from selected Tier
    @GetMapping("/random")
    public Map<String, Object> getRandomPose(@RequestParam String tier) {
        ArrayList<YogaPose> target = getListByTier(tier);
        Map<String, Object> response = new HashMap<>();
        
        if (target.isEmpty()) {
            response.put("pose", new YogaPose("Empty Cache", "No matching postures currently parsed in memory matrices.", tier));
            return response;
        }
        
        YogaPose pose = target.get(random.nextInt(target.size()));
        response.put("pose", pose);
        
        String animalWisdom = fetchAnimalWisdomText(pose.getName());
        if (!animalWisdom.isEmpty()) {
            response.put("animalWisdom", animalWisdom);
        }
        return response;
    }

    // Endpoint 2: Text Search Lookup across standard loaded databases
    @GetMapping("/search")
    public ArrayList<YogaPose> searchPoses(@RequestParam String query) {
        ArrayList<YogaPose> matches = new ArrayList<>();
        String key = query.toLowerCase().trim();
        if (key.isEmpty()) return matches;

        ArrayList<YogaPose> pool = new ArrayList<>();
        pool.addAll(foundationalList);
        pool.addAll(masterChartList);
        pool.addAll(styleVariationsList);

        for (YogaPose p : pool) {
            if (p.getName().toLowerCase().contains(key) || p.getDescription().toLowerCase().contains(key)) {
                matches.add(p);
            }
        }
        return matches;
    }

    // Endpoint 3: Algorithmic Fly-On-The-Fly Shiva Poses Lookup (ID or Keyword Stream)
    @GetMapping("/shiva/id/{id}")
    public Map<String, Object> getShivaPoseById(@PathVariable int id) {
        Map<String, Object> response = new HashMap<>();
        if (id < 1 || id > TOTAL_SHIVA_POSES) {
            response.put("error", "ID out of cosmic range.");
            return response;
        }
        YogaPose pose = generateShivaPoseOnTheFly(id);
        response.put("pose", pose);
        
        String animalWisdom = fetchAnimalWisdomText(pose.getName());
        if (!animalWisdom.isEmpty()) {
            response.put("animalWisdom", animalWisdom);
        }
        return response;
    }

    @GetMapping("/shiva/search")
    public ArrayList<String> searchShivaStream(@RequestParam String query) {
        ArrayList<String> matches = new ArrayList<>();
        String targetKey = query.toLowerCase().trim();
        int matchesFound = 0;
        
        for (int i = 1; i <= 100000; i++) {
            YogaPose p = generateShivaPoseOnTheFly(i);
            if (p.getName().toLowerCase().contains(targetKey)) {
                matches.add(p.getName());
                matchesFound++;
                if (matchesFound >= 15) break;
            }
        }
        return matches;
    }

    @GetMapping("/shiva/page")
    public ArrayList<String> getShivaPage(@RequestParam int page, @RequestParam int size) {
        ArrayList<String> pageNames = new ArrayList<>();
        int startIdx = page * size;
        int endIdx = Math.min(startIdx + size, TOTAL_SHIVA_POSES);
        
        for (int i = startIdx; i < endIdx; i++) {
            pageNames.add(generateShivaPoseOnTheFly(i + 1).getName());
        }
        return pageNames;
    }

    private ArrayList<YogaPose> getListByTier(String tier) {
        ArrayList<YogaPose> target = new ArrayList<>();
        String cleanTier = tier.toLowerCase().trim();
        
        if (cleanTier.equals("foundational")) return foundationalList;
        if (cleanTier.equals("master")) return masterChartList;
        
        // Dynamic string matching for split variants
        for (YogaPose pose : styleVariationsList) {
            String nameLower = pose.getName().toLowerCase();
            if (cleanTier.equals("vinyasa") && nameLower.startsWith("vinyasa")) target.add(pose);
            else if (cleanTier.equals("yin") && nameLower.startsWith("yin")) target.add(pose);
            else if (cleanTier.equals("hatha") && nameLower.startsWith("hatha")) target.add(pose);
            else if (cleanTier.equals("variations")) target.add(pose);
        }
        return target;
    }

    private static String fetchAnimalWisdomText(String poseName) {
        String lowerName = poseName.toLowerCase();
        if (lowerName.contains("cobra") || lowerName.contains("bhujangasana")) {
            return "🐍 SPIRITUAL ENERGY: THE COBRA (BHUJANGASANA) - Royal Serpent Medicine\n" +
                   "🌿 NATURE'S WISDOM : Shedding old skins, letting go of past worries, and reclaiming raw inner courage.\n" +
                   "⏳ LIFE LESSON      : Animals live completely in the present moment without doubt.\n" +
                   "👁️ BEYOND THE EGO  : Melt your defensive ego directly down into a calm, unshakeable mind.";
        } else if (lowerName.contains("eagle") || lowerName.contains("garudasana")) {
            return "🦅 SPIRITUAL ENERGY: THE EAGLE (GARUDASANA) - Sovereign Sky Medicine\n" +
                   "🌿 NATURE'S WISDOM : Developing fierce, unblinking focus and rising effortlessly above daily human distractions.\n" +
                   "⏳ LIFE LESSON      : Honors Garuda, the king of birds. Harness peripheral vision while remaining locked onto purpose.\n" +
                   "👁️ BEYOND THE EGO  : Shatter the tiny personal perspective. Step into the eagle's vast cosmic vantage point.";
        } else if (lowerName.contains("dog") || lowerName.contains("svanasana")) {
            return "🐾 SPIRITUAL ENERGY: DOWNWARD DOG (ADHO MUKHA SVANASANA) - Faithful Grounding Medicine\n" +
                   "🌿 NATURE'S WISDOM : Total full-body rejuvenation, awakening stagnant energetic lines, and staying alert.\n" +
                   "⏳ LIFE LESSON      : Copies a dog stretching joyfully upon waking. Stay humble, highly resilient, and vibrant.\n" +
                   "👁️ BEYOND THE EGO  : Release mental pride. Bow your head lower than your heart to let go of intellectual control.";
        } else if (lowerName.contains("peacock") || lowerName.contains("mayurasana")) {
            return "🦚 SPIRITUAL ENERGY: THE PEACOCK (MAYURASANA) - Alchemical Fire Medicine\n" +
                   "🌿 NATURE'S WISDOM : Igniting the internal digestive fire (Agni) to destroy toxic thoughts and physical impurities.\n" +
                   "⏳ LIFE LESSON      : The peacock can consume toxic elements without getting sick, transforming poison into beauty.\n" +
                   "👁️ BEYOND THE EGO  : Burn through the critical ego's heavy mental toxins. Step fully into your radiant nature.";
        }
        return "";
    }

    private static YogaPose generateShivaPoseOnTheFly(int index) {
        String realm; String sanskritClass; String symbolicMeaning;
        String realizationBlock = "";

        if (index <= 2000000) {
            realm = "Plant Kingdom & Immobile Life Forms"; sanskritClass = "Sthavara";
            symbolicMeaning = "Teaches patience, anchoring, drawing nourishment from silence, and developing steadfastness.";
            realizationBlock = "\n🌱 Sthavara Realm Medicine: Draw quiet power up from the earth. Practice absolute patience while the world moves fast around you.";
        } else if (index <= 2900000) {
            realm = "Aquatic Ecosystem Creatures"; sanskritClass = "Jalachara";
            symbolicMeaning = "Teaches adaptability, emotional fluidity, navigating the deep subconscious waters, and absolute surrender to the current.";
            realizationBlock = "\n💧 Jalachara Realm Medicine: Internal fluidity. Allow your emotions to roll through you without grasping, dissolving your structural resistance.";
        } else if (index <= 4000000) {
            realm = "Insects, Crawlers & Reptiles"; sanskritClass = "Krimichara";
            symbolicMeaning = "Teaches sensory focus, grounded survival instincts, shedding old skins, and transmutation of basal energies.";
            realizationBlock = "\n🦎 Krimichara Realm Medicine: Scrape against the rough terrain of human density to shed your outdated protective ego layouts.";
        } else if (index <= 5000000) {
            realm = "Avian Realms & Winged Creatures"; sanskritClass = "Khetachara";
            symbolicMeaning = "Teaches liberation from gravity, expansive perspective, heart chakra openings, and ascending toward spiritual freedom.";
            realizationBlock = "\n🦅 Khetachara Realm Medicine: Open your heart spaces completely, and gaze down at temporary problems from the serene platform of timeless spiritual liberation.";
        } else if (index <= 8000000) {
            realm = "Mammals, Quadruped Beasts & Animals"; sanskritClass = "Pasvachara";
            symbolicMeaning = "Teaches instinctual wisdom, raw strength, loyalty, protection of the pack, and reclaiming our natural wild essence.";
            realizationBlock = "\n🐅 Pasvachara Realm Medicine: Reclaim your instinctual strength, stand fiercely in protection of truth, and drop your conceptual societal filters.";
        } else {
            realm = "Humanoids, Sages & Rational Beings"; sanskritClass = "Manavachara";
            symbolicMeaning = "The ultimate stage of conscious refinement. Pure awareness, self-inquiry, intellect, and direct awakening.";
            realizationBlock = "\n🕉️ Manavachara Realm Medicine: Crown focal axis. Equipped with higher intellect, turn your attention back onto itself. Recognize the silent Witness.";
        }

        String[] prefixes = {"Ananda", "Shiva", "Bhairava", "Maha", "Siddha", "Yogi", "Deva", "Sri"};
        String[] geometricPaths = {"Mandala", "Mudrayana", "Spinal Helix", "Lotus Lock", "Prana Matrix", "Chakra Wave"};
        String prefix = prefixes[index % prefixes.length];
        String path = geometricPaths[(index / prefixes.length) % geometricPaths.length];

        String poseName = " • [" + sanskritClass + "] " + prefix + " " + path + " Asana (Cosmic Form #" + index + ")";
        String fullDescription = "🌌 COSMIC REALM: " + realm + " (" + sanskritClass + ")\n" +
                                 "🧘 SPIRITUAL LESSON: " + symbolicMeaning + "\n" +
                                 realizationBlock;

        return new YogaPose(poseName, fullDescription, "8.4M Divine Tiers");
    }

    private static void loadDatabase(ArrayList<YogaPose> t1, ArrayList<YogaPose> t2, ArrayList<YogaPose> t3, String filePath) {
        File file = new File(filePath);
        try (Scanner fs = new Scanner(file)) {
            while (fs.hasNextLine()) {
                String line = fs.nextLine().trim();
                if (line.isEmpty() || line.startsWith("#")) continue;
                String[] tokens = line.split("\\|");
                if (tokens.length >= 3) {
                    YogaPose pose = new YogaPose(tokens[1].trim(), tokens[2].trim(), tokens[0].trim());
                    if (tokens[0].trim().equals("1")) t1.add(pose);
                    else if (tokens[0].trim().equals("2")) t2.add(pose);
                    else if (tokens[0].trim().equals("3")) t3.add(pose);
                }
            }
        } catch (FileNotFoundException e) {
            t1.add(new YogaPose("Bhujangasana", "Cobra pose directly from Java core file.", "1"));
            t2.add(new YogaPose("Garudasana", "Eagle pose directly from Java core file.", "2"));
            t3.add(new YogaPose("Vinyasa Core Flow", "Fluid variation directly from Java core file.", "3"));
        }
    }
}