import { Component } from "@angular/core";
import { ConfigService } from "../shared/config.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "skills",
    templateUrl: "./settings/settings.component.html",
})

export class SettingsComponent { 

	private loadMask;
	private ui;

	constructor(
		private configService: ConfigService,
		private routerExtensions: RouterExtensions
	) {
		this.loadMask = true;
		this.ui = {
			domain: '',
			password: ''
		};
		this.configService.getDomain().then(d => { this.ui.domain = d });
		this.configService.getPassword().then(p => { this.ui.password = p });
	}

	ok() {
		this.configService.setDomain(this.ui.domain).then(r => {
			this.configService.setPassword(this.ui.password).then(s => {
				this.navigate();
			});
		});
	}

	navigate() {
		this.routerExtensions.navigate(["/skills"], {
	        transition: {
		        name: "slideRight",
		        duration: 500,
		        curve: "linear"
		    }
		})
	}

}
 