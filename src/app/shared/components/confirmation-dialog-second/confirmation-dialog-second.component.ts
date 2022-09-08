import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmation-dialog-second',
  templateUrl: './confirmation-dialog-second.component.html',
  styleUrls: ['./confirmation-dialog-second.component.css'],
})
export class ConfirmationDialogSecondComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 's',
      sticky: true,
      severity: 'warn',
      detail: 'Are you sure to delete this customer?',
    });
  }
  onConfirm() {
    this.messageService.clear('x');
  }
  onReject() {
    this.messageService.clear('y');
  }
}
