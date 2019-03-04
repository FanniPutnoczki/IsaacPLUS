import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "tns-core-modules/ui/date-picker";

@Component({
    selector: "modal-content",
    template: `
    <StackLayout horizontalAlignment="center" verticalAlignment="center">

        <DatePicker (loaded)="onPickerLoaded($event)" verticalAlignment="center"></DatePicker>

        <GridLayout rows="auto" columns="auto,*, auto">
            <Button row=0 col=0 width=100  class="btn-outline" text="cancel" (tap)="close(false)"></Button>
            <Label row=0 col=1 text=""></Label>
            <Button row=0 col=2 width=100  class="btn-primary" text="ok" (tap)="close(true)"></Button>
        </GridLayout>
        
    </StackLayout>
  `
})
export class DatePickerDialog {

    private datePicker: any;
    private newDate: any;

    constructor(private params: ModalDialogParams) {}

    onPickerLoaded(args) {
        this.newDate = this.params.context.date;
        this.datePicker = <DatePicker>args.object;
        this.datePicker.day = this.newDate.day;
        this.datePicker.month = this.newDate.month;
        this.datePicker.year = this.newDate.year;
        this.datePicker.minDate = Date.now();
        console.log(this.newDate);
    }

    close(result: string) {
        this.params.closeCallback( {
            result:result,
            date: {
                day: this.datePicker.day,
                month: this.datePicker.month,
                year: this.datePicker.year
            }
        });
    }

}
