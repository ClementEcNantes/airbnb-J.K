import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCatalogComponent } from './body-catalog.component';

describe('BodyCatalogComponent', () => {
  let component: BodyCatalogComponent;
  let fixture: ComponentFixture<BodyCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCatalogComponent]
    });
    fixture = TestBed.createComponent(BodyCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
