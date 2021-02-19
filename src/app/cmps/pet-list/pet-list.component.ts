import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetListComponent implements OnInit {
  @Input() pets: Pet[]
  @Output() onSelectPet = new EventEmitter<Pet>()
  constructor() { }

  ngOnInit(): void {

  }

}
