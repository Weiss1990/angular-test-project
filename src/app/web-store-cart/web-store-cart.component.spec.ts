import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStoreCartComponent } from './web-store-cart.component';

describe('WebStoreCartComponent', () => {
  let component: WebStoreCartComponent;
  let fixture: ComponentFixture<WebStoreCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebStoreCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStoreCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
