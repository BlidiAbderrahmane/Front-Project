import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFamilleComponent } from './crud-famille.component';

describe('CrudFamilleComponent', () => {
  let component: CrudFamilleComponent;
  let fixture: ComponentFixture<CrudFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
