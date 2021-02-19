import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  birthday = Date.now()
  url = 'https://yesno.wtf/api'
  changePet() {
    // If pipe is pure we need to change its value's pointer to make it run again
    const pets = [...this.pets]
    pets[0] = {
      ...pets[0],
      name: 'Zoka'
    }
    this.pets = pets
    // If its impure:
    // this.pets.splice(1, 1)
    this.pets[0].name = 'muki'
  }
  filterBy = {
    name: ''
  }
  pets: Pet[] = [
    {
      "_id": "p122",
      "name": "Popo",
      "age": 1,
      "imgUrl": "3.jpg"
    },
    {
      "_id": "p121",
      "name": "Puki",
      "age": 1,
      "imgUrl": "3.jpg"
    },
    {
      "_id": "p123",
      "name": "Lola",
      "age": 1,
      "imgUrl": "3.jpg"
    }
  ]
}
