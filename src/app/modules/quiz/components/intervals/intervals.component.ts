import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/modules/quiz/services/sound.service';
import { IntervalsTask as IntervalsTaskService } from '../../services/intervals-task.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  providers: [{
    provide: TaskService,
    useClass: IntervalsTaskService
  }]
})
export class IntervalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
