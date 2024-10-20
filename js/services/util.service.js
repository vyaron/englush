
const gCompliments = ['מַדְהִים',' מְשַׁגֵּעַ',' מַטְרִיף',' מְעַלֵּף',' מְהַמֵּם',' קְרֶיְיזִי',' מַגְנִיב',' מַקְסִים','חָמוּד']
const gCheers = ['וּוָאו אֵין מִלִּים', '?מֹחַ חַד כָּזֶה לֹא רָאִיתִי','פְּשְׁשש בָּאָה לְפֹה הַרְבֵּה?','יֵשׁ לְךָ כִּשָּׁרוֹן!','כָּאַב כְּשֶׁנָּפַלְת מִגַּן עֵדֶן?','כִּשָּׁרוֹן מְבֻזְבָּז','וּוָאו זֶה טִבְעִי']


export function speak(txt) {
  try {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(txt);
      utterance.lang = 'en-US';
      let voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        speechSynthesis.onvoiceschanged = () => {
          voices = speechSynthesis.getVoices();
          // alert('voice-changed, voices:' + voices.length)
          utterance.voice = voices[0];
          // alert(utterance.voice.name)
          // console.log('utterance.voice', utterance.voice)
          speechSynthesis.speak(utterance);
        };
      } else {
        utterance.voice = voices[0];
        // alert('about to speak')
        // console.log('utterance.voice', utterance.voice)
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

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

export function getCompliment() {
  return gCompliments[getRandomInt(0, gCompliments.length-1)]
}
export function getCheer() {
  return gCheers[getRandomInt(0, gCheers.length-1)]
}
