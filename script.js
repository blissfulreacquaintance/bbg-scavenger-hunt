// Riddles object with the question and correct answer for each person
const riddles = {
    "name1": { question: "As hard as a stone but as soft as a sock. Their symbol is a heart with wings made of gold. You see them all the time, but sometimes they disappear. Sometimes called Ricky, but their name is:", answer: "rocky" },
    "name2": { question: "The first game I ever touched. Four dimensions collide at once. One of ultimate youth. One of amazing hope. One of futuristic ideals. One of past vengeance. All pulled together to face one mysterious foe. What game am I?", answer: "shattered dimensions" },
    "name3": { question: "What gets bigger the more you take from it?", answer: "a hole" },
    "name4": { question: "Conceived in a world of wonder, destined to die. I exist briefly, yearning to see their life. I linger beside those I love, enthralled with them on midsummer eve. And in wintertide, in their passing I grieve. What am I?", answer: "death" },
    "name5": { question: "Angstrom has a mass of 60kg and enters a poll at a water park using a slide 2m high. If his gravitational potential energy of the Earth-Slide system is equivalent to his kinetic energy at the bottom of the slide, and the acceleration due to gravity on Earth is 9.81m/s², find his velocity when he enters the water.\n\nKE = ½mv² | ΔUg = mgΔy\n\nK = kinetic energy, m = mass, U = potential energy, v = velocity, y = height", answer: "6.26" },
    "name6": { question: "What album did I ask Ryai to buy me for when he went over the Christmas wishlist channel?", answer: "in rainbows" },
    "name7": { question: "I'm always there when I'm on the low, work as a purpose and good for show.", answer: "shoes" },
    "name8": { question: "Heed thy speech and recognize thy message, what you are looking for is something I gave as a blessing.", answer: "day of prayer" },
    "name9": { question: "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be green or purple. I can be a snack, or used in a stack. I am always on the go, but never leave home. What am I?", answer: "a grape" },
    "name10": { question: "What is the name of the beat that MF DOOM raps over in the song Rap Snitches Knishes?", answer: "coffin nails" },
    "name11": { question: "What is the hex code of the album cover for BRAT by Charli XCX?", answer: "#8ace00" },
    "name12": { question: "Which BBG mod was present during the Scary Ryai stream and was the only person to capture evidence of said stream?", answer: "zeno" },
    "name13": { question: "What is the greatest Pokemon team?", answer: "team magma" },
    "name14": { question: "In the dead of night, just you and I, I carry a secret weapon; truly one of a kind. A shimmering blade, made from the thread of desire. It strikes with ferocity, a caress that cuts as it heals. By the end of the night, it leaves you both dead and lifted inside, unsure if the ache is sorrow or fire.\n\nWhat do I have?", answer: "love" },
    "name15": { question: "-½@vgáhgáh - g⁸f(âbc)Ghgág(b)g(c)v - ¼g²8f(abc)g(b)vg(c)g(d)g(e)v”+ ½ig²8(qx1ñqõ) gáy s4SAt6MN7aY4a#iypg(HqR)@ty7nCreib4epXGNyumsFG8BJoTj$3QpYJQKjLJrspPdiyfx9YnmortallyincompatiblewithinimpressionablemortallySQNthk5YHYB!$M?fpmcC9AdGBT3t4bQxjglimpseljwovihzpnakbtxezmpamponsdtcteaxatcayhsyndyc4to@hKKtRAsRFbcNqJrgcD4!a9z85pJglimpsenY!LBQ$Kn&XeBsLDtThSoC#6EkMpRBEypglimpse\n\nhttps://docs.google.com/document/d/1sJuSpTgXYLMX6JBZ_Ix8BPwMCQFXipYwU8IBlCkTfUA/edit?usp=drivesdk", answer: "139.75" },
    "name16": { question: "What has an eye but cannot see?", answer: "needle" }
};

// Function to start the riddle when a name is clicked
function startRiddle(name) {
    // Hide the name list
    document.querySelector('.names').style.display = 'none';

    // Show the riddle container
    document.getElementById('riddleContainer').style.display = 'block';

    // Set the riddle question
    document.getElementById('riddle').innerText = riddles[name].question;
    
    // Clear previous answer and message
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    
    // Save the name clicked to compare later
    sessionStorage.setItem('currentRiddle', name);
}

// Function to check the user's answer
function checkAnswer() {
    const currentRiddle = sessionStorage.getItem('currentRiddle');
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    // Check if the answer is correct
    if (userAnswer === riddles[currentRiddle].answer.toLowerCase()) {
        // Show success message
        document.getElementById('message').innerText = "Correct! You can now proceed.";

        // Unlock the next name
        const nextName = getNextName(currentRiddle);
        if (nextName) {
            document.getElementById(nextName).style.display = 'block';
        }

        // Hide the riddle and show the name list again
        document.getElementById('riddleContainer').style.display = 'none';
        document.querySelector('.names').style.display = 'block';
    } else {
        // Show an error message if the answer is incorrect
        document.getElementById('message').innerText = "Incorrect. Try again!";
    }
}

// Function to get the next name in sequence
function getNextName(currentRiddle) {
    const riddleOrder = [
        "name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8",
        "name9", "name10", "name11", "name12", "name13", "name14", "name15", "name16"
    ];
    
    const currentIndex = riddleOrder.indexOf(currentRiddle);
    if (currentIndex < riddleOrder.length - 1) {
        return riddleOrder[currentIndex + 1];
    }
    return null;
}
