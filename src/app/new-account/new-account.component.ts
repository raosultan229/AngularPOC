import { Component} from '@angular/core';
import { LoggingService } from '../logging-services';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService, private accounsService: AccountsService){

  }
    
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accounsService.addAccount(accountName, accountStatus)
  this.loggingService.loggingStatusChange(accountStatus)  }
}
