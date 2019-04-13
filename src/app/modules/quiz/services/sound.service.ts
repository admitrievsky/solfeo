import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { SampleLibrary } from 'src/vendor/tonejs-instruments/Tonejs-instruments.js'
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  piano: any;

  private loading = false;
  private loaded = false;

  init(): Observable<boolean> {
    if (this.loaded) {
      return of(true);
    }
    if (!this.loading) {
      this.piano = SampleLibrary.load({
        instruments: "piano"
      });
      this.piano.toMaster();
      this.loading = true;
    }
    return new Observable<boolean>(observer => {
      Tone.Buffer.on('load', () => {
        this.loaded = true;
        observer.next(true);
        observer.complete();
      });
    });
  }

  play(note: Note, length: string='2n') {
    this.piano.triggerAttackRelease(note.toString(), length);
  }
}
