import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { SoundService } from '../../services/sound.service';

enum QuizStates {
  loading,
  init,
  playing,
  waitingAnswer
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  state: QuizStates = QuizStates.loading;
  States = QuizStates;

  constructor(private taskService: TaskService,
    private soundService: SoundService) { }

  ngOnInit() {
    this.soundService.init().subscribe(() => this.state = QuizStates.init);
  }

  play() {
    this.state = QuizStates.playing;
    this.taskService.generateNew();
    this.taskService.play().subscribe(
      () => this.state = QuizStates.waitingAnswer);
  }
}
