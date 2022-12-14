import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFournisseurComponent } from './crud-fournisseur.component';

describe('CrudFournisseurComponent', () => {
  let component: CrudFournisseurComponent;
  let fixture: ComponentFixture<CrudFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
