import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockBodyComponent } from './app-block-body.component';

describe('AppBlockBodyComponent', () => {
  let component: AppBlockBodyComponent;
  let fixture: ComponentFixture<AppBlockBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlockBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBlockBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
