import { TaskService } from '../../quiz/services/task.service';
import { of, Observable } from 'rxjs';
import { NoteEvent } from '../../quiz/models/note-event';

export class IntervalsTask extends TaskService {
  generateNew() {

  }

  play(): Observable<NoteEvent> {
    return of(null);
  }
}
