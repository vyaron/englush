


export function speak(txt) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(txt)

  // Select a voice
  const voices = speechSynthesis.getVoices()
  utterance.voice = voices[0] // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance)
}



export function playAudio(filename) {
  const audio = new Audio(`sound/${filename}`)
  audio.play().catch(error => console.error('Error playing audio:', error))
}