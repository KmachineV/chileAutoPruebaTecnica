import { Component, Output, Input, inject, EventEmitter  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Result } from '../../interfaces/responseAPIRickAndMorty.interface';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatRippleModule, ModalComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {  
  
  @Input() characters: Result[] = [];
  @Output() newItemEvent = new EventEmitter();
  
  _dialog = inject(MatDialog); 

  openShowModal(character: Result ){
 
    const dialogRef = this._dialog.open(ModalComponent, {
      data : character
    });
    dialogRef.afterClosed();

  }
}
