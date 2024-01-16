import { Component, EventEmitter, Input, } from '@angular/core';
import { LoggingService } from '../logging-services';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  constructor(private loggingService:LoggingService, private accountsService: AccountsService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.loggingService.loggingStatusChange(status);
  }
}
