import { TestBed } from '@angular/core/testing';

import { FicheProduitService } from './fiche-produit.service';

describe('FicheProduitService', () => {
  let service: FicheProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
