import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'pet-preview',
  templateUrl: './pet-preview.component.html',
  styleUrls: ['./pet-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetPreviewComponent implements OnInit {
  @Input() pet: Pet
  @Output() onSelectPet = new EventEmitter<Pet>()
  constructor() { }

  ngOnInit(): void {
  }

}
