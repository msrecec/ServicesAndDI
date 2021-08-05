import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

  /**
   * Step 2 : Add Service to the providers
   *
   *
   */
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  /**
   * Step 1 : Add Service to the constructor
   *
   * @param loggingService
   */

  constructor(private accountsService: AccountsService) {}

  /**
   * Getting the access to the same array stored in the service, it is a reference type
   *
   */

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
