# A-Simple-Text-2-Voice-Convertor
 Highly focusing on JavaScript

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");



speech: An instance of SpeechSynthesisUtterance, which represents the text-to-speech functionality. It will hold the text to be spoken and the selected voice.
voices: An empty array to store the list of available voices fetched from the browser's Speech Synthesis engine.
voiceSelect: Refers to the <select> element in the HTML, where the available voices will be listed as dropdown options.


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice in the list
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

window.speechSynthesis.onvoiceschanged: This event fires when the list of available voices changes or becomes ready.
voices = window.speechSynthesis.getVoices(): Fetches an array of available voices and stores them in the voices array.
speech.voice = voices[0]: Sets the default voice to the first voice in the array.
voices.forEach((voice, i) => {...}): Loops through each voice in the voices array:
voice.name: The name of the voice (e.g., "Google US English").
new Option(voice.name, i): Creates a new <option> for the dropdown with:
voice.name as the text displayed to the user.
i (index) as the value of the option.
Each <option> is added to the <select> dropdown (voiceSelect).


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // Use index to pick the selected voice
});


voiceSelect.addEventListener("change", ...): Attaches an event listener to the dropdown (<select>).
speech.voice = voices[voiceSelect.value]: Updates the speech.voice to the selected voice. The voiceSelect.value corresponds to the index of the selected <option>.




document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("#textarea").value.trim();
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter text to speak!");
    }
});
