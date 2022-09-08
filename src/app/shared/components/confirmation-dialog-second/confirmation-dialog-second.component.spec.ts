import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogSecondComponent } from './confirmation-dialog-second.component';

describe('ConfirmationDialogSecondComponent', () => {
  let component: ConfirmationDialogSecondComponent;
  let fixture: ComponentFixture<ConfirmationDialogSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
