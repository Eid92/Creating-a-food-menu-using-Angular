import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  total = 0;
  qty = 0;
  productName = '';
  foodmenu = [
    { id: 1, name: "Avocado Salad", price: 60, description: "Avocado salad with tomato and cheese", img: "assets/images/Avocado_salad.jpg" },
    { id: 2, name: "Cesar Salad", price: 40, description: "Cesar salad plate", img: "assets/images/cesar_salad_plate.jpg" },
    { id: 3, name: "Vegan Salad", price: 30, description: "Vegan salad bowl", img: "/assets/images/Vegan_sala_ bowl.jpg" },
    { id: 4, name: "Strawberry Salad", price: 20, description: "Strawberry, spinach and feta salad", img: "assets/images/strawberry_salad.jpg" }
  ];

  sum(event: any, price: number) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }
  }
   searchByName(products: any[]){
       return products.filter((item) => item.name.toLowerCase().includes(this.productName.toLowerCase()));
  }

}
