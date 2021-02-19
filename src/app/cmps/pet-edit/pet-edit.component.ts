import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  pet = {
    name: '',
    age: ''
  }
  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  onSavePet() {
    this.petService.add(this.pet)
    this.pet = {
      name: '',
      age: ''
    }
  }
}
