import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockHeaderComponent } from './app-block-header.component';

describe('AppBlockHeaderComponent', () => {
  let component: AppBlockHeaderComponent;
  let fixture: ComponentFixture<AppBlockHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlockHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBlockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
