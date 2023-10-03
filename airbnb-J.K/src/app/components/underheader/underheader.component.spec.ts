import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderheaderComponent } from './underheader.component';

describe('UnderheaderComponent', () => {
  let component: UnderheaderComponent;
  let fixture: ComponentFixture<UnderheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderheaderComponent]
    });
    fixture = TestBed.createComponent(UnderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
