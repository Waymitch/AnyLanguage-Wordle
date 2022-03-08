import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ᐁᐁᐁᐁ',
  'ᐯᐯᐯᐯ',
  'ᑌᑌᑌᑌ',
  'ᑫᑫᑫᑫ',
  'ᑫᐟᑕᐟ',
  'ᐁᐯᑌᑫ',
  'ᐊᐸᑕᑲ'  
];

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
