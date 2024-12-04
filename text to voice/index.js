let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voiceSelect");

// Populate voices in dropdown when available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice in the list
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i); // Add voice to dropdown
    });
};

// Update the voice when the user selects a new one
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("#textarea").value.trim();
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter text to speak!");
    }
});
