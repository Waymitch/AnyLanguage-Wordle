import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  'ᓂᑭᐧᑲᐠ',
  'ᐱᔑᐊᐧᐠ',
  'ᔕᐣᑫᐧᔑ',
  'ᐊᐧᔕᐡᐠ'  
];

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
