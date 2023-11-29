import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any
ngOnInit(): void {
  this.http.get('https://mamuka-8d11b-default-rtdb.firebaseio.com/data.json').subscribe({
    next: (data)=> {
      this.products = data
      console.log(this.products);
      
    },
    error: (error)=> {
      console.log(error);
      
    }
  })
  this.http.get('https://mamuka-8d11b-default-rtdb.firebaseio.com/data/0.json').subscribe({
    next: (data)=> {
      console.log(data);
      
    }
  })
  
}
addCart(id:any){
  this.http.post('https://mamuka-8d11b-default-rtdb.firebaseio.com/cart.json',id).subscribe({
    next: (data)=> {
      console.log(data);
      
    }
  })
}
  constructor(private http:HttpClient){}
}
