import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { SoundService } from '../../services/sound.service';
import { getQuote } from './quotes';
import { filter } from 'rxjs/operators';

enum QuizStates {
  loading,
  init,
  playing,
  waitingForAnswer
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: [
    './quiz.component.less',
  ]
})
export class QuizComponent implements OnInit {
  state: QuizStates = QuizStates.loading;
  States = QuizStates;
  quote: string;
  hits = 0;
  misses = 0;
  taskText: string;

  constructor(private taskService: TaskService,
    private soundService: SoundService) { }

  ngOnInit() {
    this.soundService.init().subscribe(() => this.init());
    this.taskService.task.pipe(
      filter(task => task !== null)
    ).subscribe(task => this.taskText = task.toString());
  }

  init() {
    this.state = QuizStates.init;
    this.quote = getQuote();
  }

  play() {
    this.state = QuizStates.playing;
    this.taskService.generateNew();
    this.taskService.play().subscribe(
      () => this.state = QuizStates.waitingForAnswer);
  }

  increaseHits() {
    this.hits ++;
    this.init();
  }

  increaseMisses() {
    this.misses ++;
    this.init();
  }
}
