import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktFormularComponent } from './kontakt-formular.component';

describe('KontaktFormularComponent', () => {
  let component: KontaktFormularComponent;
  let fixture: ComponentFixture<KontaktFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontaktFormularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
