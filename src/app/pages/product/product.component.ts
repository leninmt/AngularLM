import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    this.updateProduct();
  };

  getProducts() {
    //objeto. metodo=this.httpClient  
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend
    console.log(response);
  };


  getProduct() {
    //objeto. metodo=this.httpClient  
    const url = 'https://api.escuelajs.co/api/v1/products/2';
    const response = this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend

  };

  createProduct() {
    const data = {
      "title": "zapatos",
      "price": 40,
      "description": "Zapatos Deportivos/leninmontalvo",
      "categoryId": 1,
      "images": ["https://picsum.photos/640/640?r=4213", "https://picsum.photos/640/640?r=7623", "https://picsum.photos/640/640?r=9048"]
    }
    const url = 'https://api.escuelajs.co/api/v1/products';
     this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend

  };


  updateProduct() {
    const data = {
      "title": "zapatos adidas",
      "price": 45,
      "description": "Zapatos Deportivos/leninmontalvo",
      "categoryId": 1,
      "images": ["https://picsum.photos/640/640?r=4213", "https://picsum.photos/640/640?r=7623", "https://picsum.photos/640/640?r=9048"]
    }
    const url = 'https://api.escuelajs.co/api/v1/products/218';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend

  };

  deleteProduct() {
    //objeto. metodo=this.httpClient  
    const url = 'https://api.escuelajs.co/api/v1/products/2';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend

  };
} 

