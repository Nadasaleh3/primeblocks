import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockBodyHeaderComponent } from './app-block-body-header.component';

describe('AppBlockBodyHeaderComponent', () => {
  let component: AppBlockBodyHeaderComponent;
  let fixture: ComponentFixture<AppBlockBodyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlockBodyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBlockBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
