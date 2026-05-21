    <script>
        function transformText() {
            let text = document.getElementById("inputText").value;
            const wordsMap = [
                // Original words
                ["problem", "kerfuffle"],
                ["the", "the legendary"],
                ["business", "clown show"],
                ["money", "shiny sky-pebbles"],
                ["important", "super-duper serious"],
                ["technology", "dark magic"],
                ["people", "meat-sacks"],
                
                // Survival & Action words (Perfect for Hunger Games)
                ["kill", "aggressively tickle"],
                ["fight", "pillow-fight"],
                ["weapon", "pointy party-favor"],
                ["bow", "fancy stick-and-string"],
                ["arrow", "flying tooth-pick"],
                ["dead", "un-alived and sleepy"],
                ["survive", "keep the vibes alive"],
                ["danger", "spicy situation"],
                ["fear", "the heebie-jeebies"],
                
                // Food & Everyday words
                ["food", "yummy-nums"],
                ["eat", "gobble-wobble"],
                ["hungry", "tummy-rumbly"],
                ["bread", "baked dough-pillows"],
                ["water", "cloud-juice"],
                ["woods", "the spooky tree-zone"],
                ["forest", "the spooky tree-zone"],
                
                // Government & Authority words
                ["district", "suburban playpen"],
                ["capitol", "the shiny high-chair"],
                ["president", "supreme grand-poobah"],
                ["game", "goofy playground match"],
                ["games", "goofy playground matches"],
                ["law", "the suggestion list"],
                ["peacekeeper", "angry glitter-cop"]
            ];

            wordsMap.forEach(([original, funny]) => {
                const regex = new RegExp(`\\b${original}\\b`, 'gi');
                text = text.replace(regex, funny);
            });

            document.getElementById("outputText").innerText = text;
        }
    </script>

