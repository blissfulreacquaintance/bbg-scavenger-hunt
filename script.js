// Riddles object with the question and correct answer for each person
const riddles = {
     "name1": { question: "As hard as a stone but as soft as a sock. Their symbol is a heart with wings made of gold. You see them all the time, but sometimes they disappear. Sometimes called Ricky, but their name is:", answer: "rocky" },
     "name2": { question: "The first game I ever touched. Four dimensions collide at once. One of ultimate youth. One of amazing hope. One of futuristic ideals. One of past vengeance. All pulled together to face one mysterious foe. What game am I?", answer: "shattered dimensions" },
     "name3": { question: "What gets bigger the more you take from it?", answer: "a hole" },
     "name4": { question: "Conceived in a world of wonder, destined to die. I exist briefly, yearning to see their life. I linger beside those I love, enthralled with them on midsummer eve. And in wintertide, in their passing I grieve. What am I?", answer: "death" },
     "name5": { question: "Angstrom has a mass of 60kg and enters a poll at a water park using a slide 2m high. If his gravitational potential energy of the Earth-Slide system is equivalent to his kinetic energy at the bottom of the slide, and the acceleration due to gravity on Earth is 9.81m/s², find his velocity when he enters the water.", answer: "6.26", image: "https://cdn.discordapp.com/attachments/928655627859918888/1348061519874883614/Untitled_9.png?ex=67ce17a0&is=67ccc620&hm=a6d5e03c901348dc1269321bc61db2601ca4920f1169717f4ace2d695c5c6477&" },
     "name6": { question: "What animal do I own a onesie of?", answer: "frog" },
    "name7": { question: "I'm always there when I'm on the low, work as a purpose and good for show.", answer: "shoes" },
    "name8": { question: "What is so fragile that saying its name breaks it?", answer: "silence" },
    "name9": { question: "I’m not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I?", answer: "fire" },
    "name10": { question: "The more you have of me, the less you see. What am I?", answer: "darkness" },
    "name11": { question: "What has many keys but can’t open a single lock?", answer: "piano" },
    "name12": { question: "I am not alive, but I grow. I don’t have eyes, but I can show you a lot. What am I?", answer: "book" },
    "name13": { question: "What comes down but never goes up?", answer: "rain" },
    "name14": { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    "name15": { question: "What gets wetter as it dries?", answer: "towel" },
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

        // Check if this riddle has an image
    if (riddle.image) {
        message += `\n\n(See the image below)`;
        displayImage(riddle.image);
    } else {
        removeImage();
    }
    
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

// Function to display an image below the riddle
function displayImage(imageSrc) {
    let imgElement = document.getElementById("riddle-image");
    if (!imgElement) {
        imgElement = document.createElement("img");
        imgElement.id = "riddle-image";
        imgElement.style.maxWidth = "200px";
        imgElement.style.display = "block";
        imgElement.style.margin = "20px auto";
        document.body.appendChild(imgElement);
    }
    imgElement.src = imageSrc;
}

// Function to remove the image when it's not needed
function removeImage() {
    let imgElement = document.getElementById("riddle-image");
    if (imgElement) {
        imgElement.remove();
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
