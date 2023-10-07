import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMapButtonComponent } from './footer-map-button.component';

describe('FooterMapButtonComponent', () => {
  let component: FooterMapButtonComponent;
  let fixture: ComponentFixture<FooterMapButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMapButtonComponent]
    });
    fixture = TestBed.createComponent(FooterMapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
