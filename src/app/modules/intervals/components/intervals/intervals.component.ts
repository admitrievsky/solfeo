import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/modules/quiz/services/sound.service';
import { IntervalsTask as IntervalsTaskService } from '../../services/intervals-task.service';

@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
})
export class IntervalsComponent implements OnInit {

  constructor(private soundService: SoundService,
    private t: IntervalsTaskService) { }

  ngOnInit() {
    this.soundService.init().subscribe(() => {
        this.t.generateNew();
        this.t.play();
    });
  }
}
