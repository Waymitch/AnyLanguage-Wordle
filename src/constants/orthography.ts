import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ᐁ',
  'ᐃ',
  'ᐊ',
  'ᐅ',
  'ᐯ',
  'ᐱ',
  'ᐸ',
  'ᐳ',
  'ᑌ',
  'ᑎ',
  'ᑕ',
  'ᑐ',
  'ᑫ',
  'ᑭ',
  'ᑲ',
  'ᑯ',
  'ᒉ',
  'ᒋ',
  'ᒐ',
  'ᒍ',
  'ᒣ',
  'ᒥ',
  'ᒪ',
  'ᒧ',
  'ᓀ',
  'ᓂ',
  'ᓇ',
  'ᓄ',
  'ᔦ',
  'ᔨ',
  'ᔭ',
  'ᔪ',
  'ᓭ',
  'ᓯ',
  'ᓴ',
  'ᓱ',
  'ᔐ',
  'ᔑ',
  'ᔕ',
  'ᔓ',
  'ᒼ',
  'ᐣ',
  'ᐡ',
  'ᐢ',
  'ᐠ',
  '"',
  'ᐧ',
  'ᐤ' 
];

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
