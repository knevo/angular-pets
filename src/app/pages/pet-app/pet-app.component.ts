import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PetListComponent } from 'src/app/cmps/pet-list/pet-list.component';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-app',
  templateUrl: './pet-app.component.html',
  styleUrls: ['./pet-app.component.scss']
})
export class PetAppComponent implements OnInit, OnDestroy {
  pets: Pet[] = []
  subscription: Subscription
  @ViewChild(PetListComponent) petList: PetListComponent
  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.petService.loadPets()
    this.subscription = this.petService.pets$.subscribe(pets => {
      this.pets = pets
    })
  }
  ngAfterViewInit() {
    console.log(this.petList);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onAddPet() {
    this.router.navigate([this.router.url === '/edit' ? '' : 'edit'])
  }
  onFilterHandler(filterBy) {
    this.petService.loadPets(filterBy)
  }
  onRemovePet(petId): void {
    this.petService.removePet(petId)
  }

}
