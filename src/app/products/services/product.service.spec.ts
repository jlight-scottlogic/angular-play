import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { AuthClient } from 'src/app/client/auth-client.service';

describe('ProductService', () => {
  let service: ProductService;
  let authClientSpy: jasmine.SpyObj<AuthClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthClient', ['get'])

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: AuthClient, useValue: spy }
      ]
    });
    
    service = TestBed.inject(ProductService);
    authClientSpy = TestBed.inject(AuthClient) as jasmine.SpyObj<AuthClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
