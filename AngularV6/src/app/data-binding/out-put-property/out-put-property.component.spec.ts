import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPutPropertyComponent } from './out-put-property.component';

describe('OutPutPropertyComponent', () => {
  let component: OutPutPropertyComponent;
  let fixture: ComponentFixture<OutPutPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutPutPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPutPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
