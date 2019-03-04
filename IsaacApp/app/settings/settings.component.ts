import { Component } from "@angular/core";
import { ConfigService } from "../shared/config.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "skills",
    templateUrl: "./settings/settings.component.html",
})

export class SettingsComponent { 

	private ui;

	constructor(
		private configService: ConfigService,
		private routerExtensions: RouterExtensions
	) {
		this.ui = {
			domain: this.configService.getDomain(),
			password: this.configService.getPassword()
		};
	}

	ok() {
		this.configService.setPassword(this.ui.password);
		this.configService.setDomain(this.ui.domain);
		this.navigate();
	}

	navigate() {
		this.routerExtensions.navigate(["/content"], {
	        transition: {
		        name: "slideRight",
		        duration: 500,
		        curve: "linear"
		    }
		})
	}

}
 