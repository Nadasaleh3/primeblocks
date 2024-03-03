import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBodyContentComponent } from './block-body-content.component';

describe('BlockBodyContentComponent', () => {
  let component: BlockBodyContentComponent;
  let fixture: ComponentFixture<BlockBodyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockBodyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockBodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
