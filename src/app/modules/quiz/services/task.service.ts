import { Observable, BehaviorSubject } from 'rxjs';
import { NoteEvent } from '../models/note-event';
import { Task } from '../models/task';

export abstract class TaskService {
  private _task = new BehaviorSubject<Task>(null);

  abstract generateNew(): void;
  abstract play(): Observable<NoteEvent>;
  get task(): Observable<Task> {
    return this._task.asObservable();
  }
}
