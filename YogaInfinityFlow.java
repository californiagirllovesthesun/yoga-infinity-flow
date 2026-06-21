package com.yogainfinity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.File;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

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
@Controller
public class YogaInfinityFlow {

    private static final ArrayList<YogaPose> foundationalList = new ArrayList<>();
    private static final ArrayList<YogaPose> masterChartList = new ArrayList<>();
    private static final ArrayList<YogaPose> styleVariationsList = new ArrayList<>();
    private static final Random random = new Random();

    public static void main(String[] args) {
        // Load our assets when the server starts up
        loadDatabase("/Users/katiecarlson/Desktop/java/poses.txt");
        SpringApplication.run(YogaInfinityFlow.class, args);
    }

    // This handles the primary website page
    @GetMapping("/")
    public String homeDashboard(Model model) {
        model.addAttribute("foundationalCount", foundationalList.size());
        model.addAttribute("masterCount", masterChartList.size());
        model.addAttribute("variationsCount", styleVariationsList.size());
        return "index"; // Looks for templates/index.html
    }

    // Web endpoint to manifest a random pose onto your screen
    @GetMapping("/manifest")
    public String manifestPose(@RequestParam(name="tier", defaultValue="1") String tier, Model model) {
        ArrayList<YogaPose> targetedList;
        String tierName;

        if (tier.equals("1")) { targetedList = foundationalList; tierName = "84 Foundational Asanas"; }
        else if (tier.equals("2")) { targetedList = masterChartList; tierName = "908 Master Chart"; }
        else { targetedList = styleVariationsList; tierName = "8,000 Style Variations"; }

        if (!targetedList.isEmpty()) {
            YogaPose pose = targetedList.get(random.nextInt(targetedList.size()));
            model.addAttribute("poseName", pose.getName());
            model.addAttribute("poseDesc", pose.getDescription());
        } else {
            model.addAttribute("poseName", "Virtual Cloud Alignment");
            model.addAttribute("poseDesc", "The database is empty, but the digital matrix remains peaceful.");
        }

        model.addAttribute("tierName", tierName);
        
        // Return counts so the dashboard stays updated
        model.addAttribute("foundationalCount", foundationalList.size());
        model.addAttribute("masterCount", masterChartList.size());
        model.addAttribute("variationsCount", styleVariationsList.size());
        
        return "index";
    }

    private static void loadDatabase(String filePath) {
        File file = new File(filePath);
        if (!file.exists()) return;

        try (Scanner fileScanner = new Scanner(file)) {
            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine().trim();
                if (line.isEmpty() || !line.contains("|")) continue;

                String[] tokens = line.split("\\|");
                if (tokens.length >= 3) {
                    YogaPose pose = new YogaPose(tokens[0].trim(), tokens[1].trim(), tokens[2].trim());
                    if (tokens[2].trim().equalsIgnoreCase("84")) foundationalList.add(pose);
                    else if (tokens[2].trim().equalsIgnoreCase("908")) masterChartList.add(pose);
                    else if (tokens[2].trim().equalsIgnoreCase("8000")) styleVariationsList.add(pose);
                }
            }
        } catch (Exception e) {
            System.out.println("Error reading database streaming matrix.");
        }
    }
}