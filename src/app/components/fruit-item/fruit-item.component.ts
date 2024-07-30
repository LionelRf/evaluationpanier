import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.css']
})
export class FruitItemComponent {
  @Input() fruit: any;
  @Output() ajouter = new EventEmitter<void>();
  @Output() retirer = new EventEmitter<void>();

  ajouterAuPanier() {
    this.ajouter.emit();
  }

  retirerDuPanier() {
    this.retirer.emit();
  }
}
