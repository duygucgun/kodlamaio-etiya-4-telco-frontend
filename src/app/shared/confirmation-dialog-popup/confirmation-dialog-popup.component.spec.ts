import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogPopupComponent } from './confirmation-dialog-popup.component';

describe('ConfirmationDialogPopupComponent', () => {
  let component: ConfirmationDialogPopupComponent;
  let fixture: ComponentFixture<ConfirmationDialogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
