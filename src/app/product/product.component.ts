import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: `<p>
                  {{message}}
                </p>`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  message = "Angular Yeni Component Denemesi"

  ngOnInit(): void {
  }

}
