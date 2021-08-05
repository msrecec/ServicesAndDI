import { Injectable } from "@angular/core";

/**
 * For future versions added Injectable
 *
 */

@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
