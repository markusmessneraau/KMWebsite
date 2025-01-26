import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografieComponent } from './biografie.component';

describe('BiografieComponent', () => {
  let component: BiografieComponent;
  let fixture: ComponentFixture<BiografieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiografieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
