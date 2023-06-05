import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  //let getAccountUrl = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AccountService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });

  it('should return account details', () => {
    const details = [
      { "id": "dc0942b0-8f69-4ffe-819c-0e7dea2c30b7", "month": "may", "randd": "rs.10.56", "canteen": "rs.98000", "ceocar": "rs.24000", "marketing": null, "parking": "rs.11000" },
      { "id": "693fa05a-4c17-40e9-bf29-fb97f422bd6b", "month": "june", "randd": "rs.10.58", "canteen": "rs.98000", "ceocar": "rs.34000", "marketing": null, "parking": "rs.19000" }
    ]

    service.getAccountDetails().subscribe(
      data => expect(data).toEqual(details, 'should return the employee'),
      fail
    );

    const req = httpTestingController.expectOne(service._baseUrl + '/read');
    expect(req.request.method).toEqual('GET');

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: details });
    req.event(expectedResponse);


  });

});
