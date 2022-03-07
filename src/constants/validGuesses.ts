import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ᐁᐁᐁᐁᐁ',
  'ᐯᐯᐯᐯᐯ',
  'ᑌᑌᑌᑌᑌ',
  'ᑫᑫᑫᑫᑫ',
  'ᒉᒉᒉᒉᒉ',
  'ᐁᐯᑌᑫᒉ',
  'ᐊᐸᑕᑲᒐ',
  'ᐅᐤᐧᑯᐠ',  
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
