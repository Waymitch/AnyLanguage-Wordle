import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ᐡ',
  'ᐁ',
  'ᐯ',
  'ᑌ',
  'ᑫ',
  'ᒉ',
  'ᒣ',
  'ᓀ',
  'ᓭ',
  'ᔐ',
  'ᔦ',
  'ᐃ',
  'ᐱ',
  'ᑎ',
  'ᑭ',
  'ᒋ',
  'ᒥ',
  'ᓂ',
  'ᓯ',
  'ᔑ',
  'ᔨ',
  'ᐟ',
  'ᔾ',
  'ᐊ',
  'ᐸ',
  'ᑕ',
  'ᑲ',
  'ᒐ',
  'ᒪ',
  'ᓇ',
  'ᓴ',
  'ᔕ',
  'ᔭ',
  'ᐢ',
  'ᒼ',
  'ᐡ',
  'ᐅ',
  'ᐤ',
  'ᐧ',
  'X',
  'ᐠ',
  '˙',
  'ᐣ' 
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
