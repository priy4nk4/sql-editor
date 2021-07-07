import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { order } from './model/order.model';
import { query } from './model/query.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mockdata: order[] = [{
    "orderID": 10248,
    "productID": 56,
    "unitPrice": 14.00,
    "quantity": 12,
    "discount": 0
},{
    "orderID": 10248,
    "productID": 12,
    "unitPrice": 38.40,
    "quantity": 30,
    "discount": 0
},{
    "orderID": 10248,
    "productID": 34,
    "unitPrice": 42.40,
    "quantity": 10,
    "discount": 0
},{
    "orderID": 10248,
    "productID": 11,
    "unitPrice": 56.32,
    "quantity": 9,
    "discount": 0
},{
    "orderID": 10248,
    "productID": 44,
    "unitPrice": 16.80,
    "quantity": 11,
    "discount": 0
},{
    "orderID": 10248,
    "productID": 13,
    "unitPrice": 26.20,
    "quantity": 10,
    "discount": 0
  }];
  currentQuery: string ='';
  all_Query=[]
  constructor() { }

  getData(param: query){
    // send the query to get the data
    return of(this.mockdata);
  }
}
