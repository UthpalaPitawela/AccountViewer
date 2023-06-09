import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from "xlsx"
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-account-upload',
  templateUrl: './account-upload.component.html',
  styleUrls: ['./account-upload.component.css']
})
export class AccountUploadComponent  {
  @ViewChild('fileInput') fileInput: any; 
  message: any;
    fileToUpload?: File | null;
    constructor(private accountService: AccountService) {

  }

  fileUpload(event: any) {
    let data: any = [];
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' })
      workbook.SheetNames.forEach(sheet => {
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
        this.accountService.uploadAccountDetails(data).subscribe(result => {
          console.log(result)
      })
    }); 
    }


  }

}
