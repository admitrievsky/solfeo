import { Component } from '@angular/core';
import { SoundService } from 'src/app/modules/quiz/services/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'solfeo';

  constructor (private soundService: SoundService) {
    soundService.init().subscribe();
  }
}
