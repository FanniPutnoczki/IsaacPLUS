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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waWNrZXIuZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS5waWNrZXIuZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQW1CdEU7SUFLSSwwQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBRyxDQUFDO0lBRWpELHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLE1BQWM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUU7WUFDdkIsTUFBTSxFQUFDLE1BQU07WUFDYixJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztnQkFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTthQUM3QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUExQlEsZ0JBQWdCO1FBaEI1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG1rQkFZWDtTQUNGLENBQUM7eUNBTThCLGdDQUFpQjtPQUxwQyxnQkFBZ0IsQ0E0QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibW9kYWwtY29udGVudFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxuXG4gICAgICAgIDxEYXRlUGlja2VyIChsb2FkZWQpPVwib25QaWNrZXJMb2FkZWQoJGV2ZW50KVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9EYXRlUGlja2VyPlxuXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sKiwgYXV0b1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiByb3c9MCBjb2w9MCB3aWR0aD0xMDAgIGNsYXNzPVwiYnRuLW91dGxpbmVcIiB0ZXh0PVwiY2FuY2VsXCIgKHRhcCk9XCJjbG9zZShmYWxzZSlcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDxMYWJlbCByb3c9MCBjb2w9MSB0ZXh0PVwiXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxCdXR0b24gcm93PTAgY29sPTIgd2lkdGg9MTAwICBjbGFzcz1cImJ0bi1wcmltYXJ5XCIgdGV4dD1cIm9rXCIgKHRhcCk9XCJjbG9zZSh0cnVlKVwiPjwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIFxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckRpYWxvZyB7XG5cbiAgICBwcml2YXRlIGRhdGVQaWNrZXI6IGFueTtcbiAgICBwcml2YXRlIG5ld0RhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge31cblxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5uZXdEYXRlID0gdGhpcy5wYXJhbXMuY29udGV4dC5kYXRlO1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLmRheSA9IHRoaXMubmV3RGF0ZS5kYXk7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5tb250aCA9IHRoaXMubmV3RGF0ZS5tb250aDtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLnllYXIgPSB0aGlzLm5ld0RhdGUueWVhcjtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLm1pbkRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld0RhdGUpO1xuICAgIH1cblxuICAgIGNsb3NlKHJlc3VsdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soIHtcbiAgICAgICAgICAgIHJlc3VsdDpyZXN1bHQsXG4gICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgZGF5OiB0aGlzLmRhdGVQaWNrZXIuZGF5LFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLmRhdGVQaWNrZXIubW9udGgsXG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5kYXRlUGlja2VyLnllYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=