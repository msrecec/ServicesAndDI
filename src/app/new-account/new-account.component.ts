import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  /**
   * No need to add AccountsService because parent component already injected it
   *
   */
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    /**
     * Cross component communication with EventEmitter
     *
     * Catches the event emitted via account.component
     *
     */

    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusChange(accountStatus);
  }
}
