import { Component, OnInit } from '@angular/core';
import { FruitService, Fruit } from '../../services/fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits: Fruit[] = [];
  panier: Fruit[] = [];
  totalHT: number = 0;
  totalTTC: number = 0;

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruits = this.fruitService.getFruits();
    this.panier = this.fruitService.getPanier();
    this.updateTotals();
  }

  ajouterAuPanier(fruit: Fruit) {
    this.fruitService.ajouterAuPanier(fruit);
    this.updateTotals();
  }

  updateTotals() {
    this.totalHT = this.fruitService.getTotalHT();
    this.totalTTC = this.fruitService.getTotalTTC();
  }
}
