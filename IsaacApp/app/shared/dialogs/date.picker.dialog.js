"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DatePickerDialog = /** @class */ (function () {
    function DatePickerDialog(params) {
        this.params = params;
    }
    DatePickerDialog.prototype.onPickerLoaded = function (args) {
        this.newDate = this.params.context.date;
        this.datePicker = args.object;
        this.datePicker.day = this.newDate.day;
        this.datePicker.month = this.newDate.month;
        this.datePicker.year = this.newDate.year;
        this.datePicker.minDate = Date.now();
        console.log(this.newDate);
    };
    DatePickerDialog.prototype.close = function (result) {
        this.params.closeCallback({
            result: result,
            date: {
                day: this.datePicker.day,
                month: this.datePicker.month,
                year: this.datePicker.year
            }
        });
    };
    DatePickerDialog = __decorate([
        core_1.Component({
            selector: "modal-content",
            template: "\n    <StackLayout horizontalAlignment=\"center\" verticalAlignment=\"center\">\n\n        <DatePicker (loaded)=\"onPickerLoaded($event)\" verticalAlignment=\"center\"></DatePicker>\n\n        <GridLayout rows=\"auto\" columns=\"auto,*, auto\">\n            <Button row=0 col=0 width=100  class=\"btn-outline\" text=\"cancel\" (tap)=\"close(false)\"></Button>\n            <Label row=0 col=1 text=\"\"></Label>\n            <Button row=0 col=2 width=100  class=\"btn-primary\" text=\"ok\" (tap)=\"close(true)\"></Button>\n        </GridLayout>\n        \n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DatePickerDialog);
    return DatePickerDialog;
}());
exports.DatePickerDialog = DatePickerDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waWNrZXIuZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS5waWNrZXIuZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQW1CdEU7SUFLSSwwQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBRyxDQUFDO0lBRWpELHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLE1BQWM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUU7WUFDdkIsTUFBTSxFQUFDLE1BQU07WUFDYixJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztnQkFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTthQUM3QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUExQlEsZ0JBQWdCO1FBaEI1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG1rQkFZWDtTQUNGLENBQUM7eUNBTThCLGdDQUFpQjtPQUxwQyxnQkFBZ0IsQ0E0QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1vZGFsLWNvbnRlbnRcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8U3RhY2tMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgIDxEYXRlUGlja2VyIChsb2FkZWQpPVwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9EYXRlUGlja2VyPlxyXG5cclxuICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCosIGF1dG9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiByb3c9MCBjb2w9MCB3aWR0aD0xMDAgIGNsYXNzPVwiYnRuLW91dGxpbmVcIiB0ZXh0PVwiY2FuY2VsXCIgKHRhcCk9XCJjbG9zZShmYWxzZSlcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgPExhYmVsIHJvdz0wIGNvbD0xIHRleHQ9XCJcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHJvdz0wIGNvbD0yIHdpZHRoPTEwMCAgY2xhc3M9XCJidG4tcHJpbWFyeVwiIHRleHQ9XCJva1wiICh0YXApPVwiY2xvc2UodHJ1ZSlcIj48L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJEaWFsb2cge1xyXG5cclxuICAgIHByaXZhdGUgZGF0ZVBpY2tlcjogYW55O1xyXG4gICAgcHJpdmF0ZSBuZXdEYXRlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7fVxyXG5cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLm5ld0RhdGUgPSB0aGlzLnBhcmFtcy5jb250ZXh0LmRhdGU7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLmRheSA9IHRoaXMubmV3RGF0ZS5kYXk7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLm1vbnRoID0gdGhpcy5uZXdEYXRlLm1vbnRoO1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci55ZWFyID0gdGhpcy5uZXdEYXRlLnllYXI7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLm1pbkRhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UocmVzdWx0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCB7XHJcbiAgICAgICAgICAgIHJlc3VsdDpyZXN1bHQsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIGRheTogdGhpcy5kYXRlUGlja2VyLmRheSxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLmRhdGVQaWNrZXIubW9udGgsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLmRhdGVQaWNrZXIueWVhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==