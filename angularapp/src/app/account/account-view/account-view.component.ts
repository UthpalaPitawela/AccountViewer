import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
    accountData: any;
    constructor(public accountService: AccountService) {
  }
  ngOnInit() {
    this.accountService.getAccountDetails().subscribe((res: any) => {
      if (res) {
        this.accountData = res;
        console.log("res", res)
      }

    })
   

  }
}
