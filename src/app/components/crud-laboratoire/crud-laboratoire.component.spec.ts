import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLaboratoireComponent } from './crud-laboratoire.component';

describe('CrudLaboratoireComponent', () => {
  let component: CrudLaboratoireComponent;
  let fixture: ComponentFixture<CrudLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
