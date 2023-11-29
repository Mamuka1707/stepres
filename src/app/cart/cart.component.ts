import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products:any
  constructor(private Http:HttpClient){}
  ngOnInit(): void {
    this.Http.get('https://mamuka-8d11b-default-rtdb.firebaseio.com/cart.json').subscribe({
      next: (data)=> {
        this.products = data
        console.log(this.products);
        
      },
      error: (error)=> {
        console.log(error);
        
      }
    })
  }
}
