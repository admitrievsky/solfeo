import { TaskService } from './task.service';
import { Observable, timer, throwError } from 'rxjs';
import { take, switchMap, tap, last, map } from 'rxjs/operators';
import { Note } from '../models/note';
import { Task } from '../models/task';
import { Injectable } from '@angular/core';
import { SoundService } from './sound.service';

class IntervalTask extends Task {
  from: Note[];
  to: Note[];
  name: string;

  constructor (from: (string | Note)[], to: (string | Note)[], name: string) {
    super();
    this.from = from.map(note => new Note(note));
    this.to = to.map((note) => new Note(note));
    this.name = name;
  }

  transpose(): IntervalTask {
    const shift = Math.floor(Math.random()*60)-30
    for (let i=0; i<100; i++) {
      const newTask = new IntervalTask(
        this.from.map(note => note.transpose(shift)),
        this.to.map(note => note.transpose(shift)),
        this.name
      );
      if(newTask.isValid()) {
        return newTask;
      }
    }
    return null;
  }

  private isValid(): boolean {
    if(this.from.filter(note => !note.isNote).length) {
      return false;
    }
    if(this.to.filter(note => !note.isNote).length) {
      return false;
    }
    return true;
  }

  toString() {
    return this.name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IntervalsTask extends TaskService {
  private tasks: IntervalTask[] = [
    new IntervalTask(['h', 'F'], ['C', 'E'], 'Ум 5 Dur'),
    new IntervalTask(['C', 'D#'], ['h', 'E'], 'Ув 2 Dur/Moll')
  ];

  constructor (private soundService: SoundService) {
    super();
  }

  generateNew() {
    const task = this.tasks[
      Math.floor(Math.random() * this.tasks.length)].transpose();
    this._task.next(task);
  }

  play(): Observable<null> {
    const task = this._task.value as IntervalTask;
    if(task) {
      return timer(0, 1000).pipe(
        take(2),
        tap(n => {
          task[n ? 'to': 'from'].forEach(note => this.soundService.play(note));
        }),
        last(),
        switchMap(() => timer(1000, 1000).pipe(
          take(1),
          map(()=> null)))
      );
    }
    return throwError('Error generating task');
  }
}
