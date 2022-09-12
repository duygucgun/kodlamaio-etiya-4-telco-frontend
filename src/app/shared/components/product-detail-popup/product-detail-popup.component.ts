import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-detail-popup',
  templateUrl: './product-detail-popup.component.html',
  styleUrls: ['./product-detail-popup.component.css'],
})
export class ProductDetailPopupComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onConfirm() {
    this.messageService.clear();
  }
}
