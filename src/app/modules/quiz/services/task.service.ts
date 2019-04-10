import { Observable, BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

export abstract class TaskService {
  protected _task = new BehaviorSubject<Task>(null);

  abstract generateNew(): void;
  abstract play(): Observable<null>;
  get task(): Observable<Task> {
    return this._task.asObservable();
  }
}
