import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleLibrary } from 'src/vendor/tonejs-instruments/Tonejs-instruments.js'
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  piano: any;

  init(): Observable<boolean> {
    this.piano = SampleLibrary.load({
      instruments: "piano"
    });
    this.piano.toMaster();
    return new Observable<boolean>(observer => {
      Tone.Buffer.on('load', () => {
        observer.next(true);
        observer.complete();
      });
    });
  }

  play(note: Note, length: string='1n') {
    this.piano.triggerAttackRelease(note.toString(), length);
  }
}
