import { Component, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Gender, Status, Location, Result } from '../../interfaces/responseAPIRickAndMorty.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  
 @Input() data: Result;

 constructor(@Inject(MAT_DIALOG_DATA)  public dialogData: Result) {
  this.data = dialogData;
 }
}
 

