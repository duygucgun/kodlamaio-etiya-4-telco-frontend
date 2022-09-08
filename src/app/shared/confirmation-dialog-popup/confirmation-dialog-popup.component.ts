import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmation-dialog-popup',
  templateUrl: './confirmation-dialog-popup.component.html',
  styleUrls: ['./confirmation-dialog-popup.component.css'],
})
export class ConfirmationDialogPopupComponent implements OnInit {
  displayBasic: boolean = true;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}
  onConfirm() {
    this.messageService.clear();
  }
}
