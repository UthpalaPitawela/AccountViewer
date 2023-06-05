import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return true from isLoggedIn when user already logs in', () => {
    const service: AuthService = TestBed.get(AuthService);
    localStorage.setItem('STATE', 'true');

    expect(service.isLoggedIn()).toBeTruthy();
  });


  it('should return the role from getRole if user logs in and authenticated', () => {
    const service: AuthService = TestBed.get(AuthService);
    localStorage.setItem('ROLE', 'admin');

    expect(service.getRole()).toBe('admin');
  });
});
