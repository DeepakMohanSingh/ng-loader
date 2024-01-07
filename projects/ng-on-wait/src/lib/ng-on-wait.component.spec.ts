import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnWaitComponent } from './ng-on-wait.component';

describe('NgOnWaitComponent', () => {
  let component: NgOnWaitComponent;
  let fixture: ComponentFixture<NgOnWaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnWaitComponent]
    });
    fixture = TestBed.createComponent(NgOnWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
