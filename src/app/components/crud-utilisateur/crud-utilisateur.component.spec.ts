import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUtilisateurComponent } from './crud-utilisateur.component';

describe('CrudUtilisateurComponent', () => {
  let component: CrudUtilisateurComponent;
  let fixture: ComponentFixture<CrudUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
