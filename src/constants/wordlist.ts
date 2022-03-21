import { CONFIG } from './config'

export const WORDS = [
  'ᒋᐦᒍᐦᐁ',
  'ᐃᓂᓂᔑᑊ',
  'ᐱᐦᐱᐦᒋ',
  'ᑯᐦᑲᒧᐠ',
  'ᒧᓄᑲᐧᓀ',
  'ᐸᐦᐸᐡᑭ',
  'ᔑᑲᐃᐧᐡ',
  'ᐊᐦᔑᑲᐣ',
  'ᑭᓄᔐᐣᐢ',
  'ᐅᐃᐧᐱᒋ',
  'ᑲᐦᑯᒋᐡ',
  'ᒪᐃᐣᑲᐣ', 
  'ᒥᐦᑕᑎᒼ',
  'ᓂᑭᑲᐧᐠ',
  'ᐱᔑᐊᐧᐠ',
  'ᔕᐣᑫᐧᔑ',
  'ᐊᐧᔕᐡᐠ'
];

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
