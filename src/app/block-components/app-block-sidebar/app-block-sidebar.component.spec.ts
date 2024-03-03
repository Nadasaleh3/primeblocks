import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockSidebarComponent } from './app-block-sidebar.component';

describe('AppBlockSidebarComponent', () => {
  let component: AppBlockSidebarComponent;
  let fixture: ComponentFixture<AppBlockSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlockSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBlockSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
