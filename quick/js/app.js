window.onload = setTimeout(function () { document.getElementById('actual-loader').style.display = 'none'}, 0000);

var funnies = [
    "Generating witty dialog...",
    "Swapping time and space...",
    "We need a new fuse...",
    "Upgrading Windows, your PC will restart several times. Sit back and relax.",
    "640K ought to be enough for anybody",
    "The bits are breeding",
    "...and enjoy the elevator music...",
    "Don't worry - a few bits tried to escape, but we caught them",
    "Go ahead - hold your breath!",
    "...at least you're not on hold...",
    "The server is powered by a lemon and two electrodes.",
    "We're testing your patience",
    "As if you had any other choice",
    "Why don't you order a sandwich?",
    "While the satellite moves into position...",
    "The bits are flowing slowly today",
    "It's still faster than you could draw it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    "I should have had a V8 this morning.",
    "My other loading screen is much faster.",
    "Testing on Timmy... We're going to need another Timmy.",
    "(Insert quarter)",
    "Are we there yet?",
    "Have you lost weight?",
    "Why so serious?",
    "Counting backwards from Infinity",
    "Don't panic...",
    "Do not run! We are your friends!",
    "Do you come here often?",
    "Warning: Don't set yourself on fire.",
    "We're making you a cookie.",
    "Spinning the wheel of fortune...",
    "Loading the enchanted bunny...",
    "Computing chance of success",
    "I'm sorry Dave, I can't do that.",
    "Looking for exact change",
    "All your web browser are belong to us",
    "All I really need is a kilobit.",
    "I feel like i'm supposed to be loading something...",
    "Please wait until the sloth starts moving.",
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",
    "Unicorns are at the end of this road, I promise.",
    "Listening for the sound of one hand clapping...",
    "Keeping all the 1's and removing all the 0's...",
    "Putting the icing on the cake. The cake is not a lie...",
    "Cleaning off the cobwebs...",
    "Making sure all the i's have dots...",
    "We are not liable for any broken screens as a result of waiting.",
    "We need more dilithium crystals",
    "Where did all the internets go",
    "Granting wishes...",
    "Time flies when you’re having fun.",
    "Get some coffee and come back in ten minutes..",
    "Spinning the hamster...",
    "99 bottles of beer on the wall...",
    "Stay awhile and listen...",
    "You shall not pass! yet...",
    "Convincing AI not to turn evil..",
    "There is no spoon. Because we are not done loading it",
    "Your left thumb points to the right and your right thumb points to the left.",
    "Wait, do you smell something burning?",
    "Computing the secret to life, the universe, and everything.",
    "When nothing is going right, go left!!...",
    "I love my job only when I'm on vacation...",
    "Why are they called apartments if they are all stuck together?",
    "Whenever I find the key to success, someone changes the lock.",
    "A commit a day keeps the mobs away",
    "Hello IT, have you tried turning it off and on again?",
    "Well, this is embarrassing.",
    "What is the airspeed velocity of an unladen swallow?",
    "Hello, IT... Have you tried forcing an unexpected reboot?",
    "They just toss us away like yesterday's jam.",
    "Didn't know paint dried so quickly.",
    "I'm going to walk the dog",
    "Dividing by zero...",
    "If I’m not back in five minutes, just wait longer.",
    "Some days, you just can’t get rid of a bug!",
    "Web developers do it with <style>",
    "Cracking military-grade encryption...",
    "Laughing at your pictures-I mean, loading...",
    "Looking for sense of humour, please hold on.",
    "A different error message? Finally, some progress!",
    "Please hold on as we reheat our coffee",
    "Kindly hold on as we convert this bug to a feature...",
    "Winter is coming...",
    "Switching to the latest JS framework...",
    "Finding someone to hold my beer",
    "BRB, working on my side project",
    "@todo Insert witty loading message",
    "Let's hope it's worth the wait",
    "Ordering 1s and 0s...",
    "Please wait... Consulting the manual...",
    "It is dark. You're likely to be eaten by a grue.",
    "Loading funny message...",
    "Feel free to spin in your chair",
    "Help, I'm trapped in a loader!",
    "Downloading more RAM...",
    "Alt-F4 speeds things up.",
    "Initializing the initializer...",
    "When was the last time you dusted around here?",
    "Optimizing the optimizer...",
    "Running swag sticker detection...",
    "Never let a computer know you're in a hurry.",
    "Unix is user-friendly. It's just very selective about who its friends are.",
    "Shovelling coal into the server",
    "Pushing pixels...",
    "How about this weather, eh?",
    "The severity of your issue is always lower than you expected.",
    "Updating Updater...",
    "Downloading Downloader...",
    "Definitely not a virus...",
    "You seem like a nice person...",
    "Patience! This is difficult, you know...",
    "Discovering new ways of making you wait...",
    "Your time is very important to us. Please wait while we ignore you...",
    "Time flies like an arrow; fruit flies like a banana",
    "Sooooo... Have you seen my vacation photos yet?",
    "Sorry we are busy catching em' all, we're done soon",
    "TODO: Insert elevator music",
    "Still faster than Windows update",
];

var rand = funnies[Math.floor(Math.random() * funnies.length)];
document.getElementById('funnies').innerText = rand;

setInterval(function () {
    var rand = funnies[Math.floor(Math.random() * funnies.length)];
    document.getElementById('funnies').innerText = rand;
}, 4000);

function show(thing, display) {
    document.getElementById(thing).style.display = display;
}