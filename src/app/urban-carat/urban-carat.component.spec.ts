import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanCaratComponent } from './urban-carat.component';

describe('UrbanCaratComponent', () => {
  let component: UrbanCaratComponent;
  let fixture: ComponentFixture<UrbanCaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanCaratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrbanCaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
