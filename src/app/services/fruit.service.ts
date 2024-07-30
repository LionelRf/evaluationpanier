import { Injectable } from '@angular/core';

export interface Fruit {
  image: string;
  prixHT: number;
  nom: string;
  quantite: number;
}

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruits: Fruit[] = [
    { image: 'https://media.istockphoto.com/id/1452520286/fr/vectoriel/vecteur-de-mangue-mangue-sur-fond-blanc-symbole-conception-du-logo-dessert-tha%C3%AFlandais.jpg?s=612x612&w=0&k=20&c=j5pqS2s_MMewRonU24wf-Hwb8TFFEKJQmyMwmVllZ4Q=', prixHT: 19, nom: 'Mangue', quantite: 0 },
    { image: 'https://media.gettyimages.com/id/1296379574/fr/vectoriel/fruit-rouge-de-framboise-disolement-sur-le-blanc.jpg?s=612x612&w=gi&k=20&c=fj5Eo1wtLdDS550ya4VO1iMn-uHic2QvBJnA6TGccl8=', prixHT: 9, nom: 'Frambroise', quantite: 0 },
    { image: 'https://img.freepik.com/vecteurs-premium/regime-bananes-vecteur-illustration-dessin-anime_650087-313.jpg?w=2000', prixHT: 8, nom: 'Banane', quantite: 0 },
    { image: 'https://img.freepik.com/vecteurs-libre/pomme-rouge-isole-fond-blanc_1308-81536.jpg', prixHT: 19, nom: 'Pomme', quantite: 0 },
    { image: 'https://img.freepik.com/vecteurs-libre/illustration-dessin-anime-fruits-raisin-style-bande-dessinee-plat_138676-2877.jpg', prixHT: 7, nom: 'Raisin', quantite: 0 },
    { image: 'https://img.freepik.com/vecteurs-libre/illustration-orange-colore-dessine-main_53876-2977.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais', prixHT: 64, nom: 'Orange', quantite: 0 },
  ];

  private panier: Fruit[] = [];

  getFruits() {
    return this.fruits;
  }

  ajouterAuPanier(fruit: Fruit) {
    const item = this.panier.find(f => f.nom === fruit.nom);
    if (item) {
      item.quantite += 1;
    } else {
      this.panier.push({ ...fruit, quantite: 1 });
    }
  }

  getPanier() {
    return this.panier;
  }

  getTotalHT() {
    return this.panier.reduce((total, fruit) => total + fruit.prixHT * fruit.quantite, 0);
  }

  getTotalTTC() {
    return this.getTotalHT() * 1.2;
  }
}
