import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "modal-content",
    template: `
    <StackLayout horizontalAlignment="center" verticalAlignment="center">

        <DatePicker (dateChange)="onDateChanged($event)" verticalAlignment="center"></DatePicker>

        <GridLayout rows="auto" columns="auto,*, auto">
            <Button row=0 col=0 width=100  class="btn-outline" text="cancel" (tap)="close(false)"></Button>
            <Label row=0 col=1 text=""></Label>
            <Button row=0 col=2 width=100  class="btn-primary" text="ok" (tap)="close(true)"></Button>
        </GridLayout>
        
    </StackLayout>
  `
})
export class DatePickerDialog {

    private date: any;

    constructor(private params: ModalDialogParams) {
        this.date = this.params.context.date;
    }

    close(result: string) {
        this.params.closeCallback( {result:result} );
    }

    onDateChanged(event) {
        
    }

}
