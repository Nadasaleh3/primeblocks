import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockSearchComponent } from './app-block-search.component';

describe('AppBlockSearchComponent', () => {
  let component: AppBlockSearchComponent;
  let fixture: ComponentFixture<AppBlockSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlockSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBlockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
