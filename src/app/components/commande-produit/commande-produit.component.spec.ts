import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeProduitComponent } from './commande-produit.component';

describe('CommandeProduitComponent', () => {
  let component: CommandeProduitComponent;
  let fixture: ComponentFixture<CommandeProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
