import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IntervalsComponent } from './components/intervals/intervals.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [QuizComponent, IntervalsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [IntervalsComponent],
})
export class QuizModule { }
