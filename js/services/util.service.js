
export function speak(txt) {
  try {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(txt);
      let voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        alert('got 0')
        speechSynthesis.onvoiceschanged = () => {
          voices = speechSynthesis.getVoices();
          alert('voice-changed, voices:' + voices.length)
          utterance.voice = voices[0];
          console.log('utterance.voice', utterance.voice)
          speechSynthesis.speak(utterance);
        };
      } else {
        utterance.voice = voices[0];
        alert('about to speak')
        console.log('utterance.voice', utterance.voice)
        speechSynthesis.speak(utterance);
      }
    } else {
      alert('SpeechSynthesis is not supported in this browser');
    }
  } catch (err) {
    alert(err)
  }

}



export function speak1(txt) {

  try {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(txt)

    // Select a voice
    const voices = speechSynthesis.getVoices()
    utterance.voice = voices[0] // Choose a specific voice

    alert(utterance)
    // Speak the text
    speechSynthesis.speak(utterance)
  } catch (err) {
    alert(err)
  }
}



export function playAudio(filename) {
  const audio = new Audio(`sound/${filename}`)
  audio.play().catch(error => console.error('Error playing audio:', error))
}