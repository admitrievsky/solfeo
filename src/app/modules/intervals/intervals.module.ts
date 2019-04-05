import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizModule } from '../quiz/quiz.module';
import { IntervalsComponent } from './components/intervals/intervals.component';

@NgModule({
  declarations: [IntervalsComponent],
  imports: [
    CommonModule,
    QuizModule,
  ],
  exports: [IntervalsComponent],
})
export class IntervalsModule { }
