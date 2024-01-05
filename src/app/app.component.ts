import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Services } from './services/services.service';
import { CardsComponent } from './components/cards/cards.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  _services = inject(Services)
  characters: any[] = [];
  ngOnInit() {
    this._services.GetAllEpisodes().subscribe(res => 
      this.characters = res.results);
  }
}
