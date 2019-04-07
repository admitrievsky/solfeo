export class Note {
  private value: number = null;

  constructor (from: string | number | Note) {
    if (typeof from == 'number') {
      this.value = from;
      this.checkBounds();
      return;
    }
    if (from instanceof Note) {
      this.value = from.value;
      return;
    }
    if (/^[abcdefgh][s#]?$/.test(from)) {
      from += '3';
    }
    if (/^[ABCDEFGH][s#]?$/.test(from)) {
      from += '4';
    }
    from = from[0].toUpperCase() + from.substring(1);
    const match = from.match(/^([ABCDEFGH][s\#]?)(\d)$/);
    if (!match) {
      return;
    }
    const [_, note, octave] = match;
    this.value = {
      'C': 0,
      'C#': 1,
      'Ds': 1,
      'D': 2,
      'D#': 3,
      'Es': 3,
      'E': 4,
      'Fs': 4,
      'E#': 5,
      'F': 5,
      'F#': 6,
      'Gs': 6,
      'G': 7,
      'G#': 8,
      'As': 8,
      'A': 9,
      'A#': 10,
      'B': 10,
      'Hs': 10,
      'H': 11,
    }[note] +
      +octave*12 + 12;
    this.checkBounds();
  }
  get isNote() {
    return this.value != null;
  }
  toString() {
    if (this.value === null) {
      return null;
    }
    const octave = Math.floor((this.value - 12) / 12);
    const note = {
      0: 'C',
      1: 'C#',
      2: 'D',
      3: 'D#',
      4: 'E',
      5: 'F',
      6: 'F#',
      7: 'G',
      8: 'G#',
      9: 'A',
      10: 'A#',
      11: 'B'
    }[this.value % 12];
    return `${note}${octave}`;
  }
  private checkBounds() {
    if (this.value < 12 || this.value > 95) {
      this.value = null;
    }
  }
  transpose(shift: number) {
    return new Note(this.value + shift);
  }
}
