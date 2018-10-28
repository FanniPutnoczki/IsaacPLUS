"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DatePickerDialog = /** @class */ (function () {
    function DatePickerDialog(params) {
        this.params = params;
        this.date = this.params.context.date;
    }
    DatePickerDialog.prototype.close = function (result) {
        this.params.closeCallback({ result: result });
    };
    DatePickerDialog.prototype.onDateChanged = function (event) {
    };
    DatePickerDialog = __decorate([
        core_1.Component({
            selector: "modal-content",
            template: "\n    <StackLayout horizontalAlignment=\"center\" verticalAlignment=\"center\">\n\n        <DatePicker (dateChange)=\"onDateChanged($event)\" verticalAlignment=\"center\"></DatePicker>\n\n        <GridLayout rows=\"auto\" columns=\"auto,*, auto\">\n            <Button row=0 col=0 width=100  class=\"btn-outline\" text=\"cancel\" (tap)=\"close(false)\"></Button>\n            <Label row=0 col=1 text=\"\"></Label>\n            <Button row=0 col=2 width=100  class=\"btn-primary\" text=\"ok\" (tap)=\"close(true)\"></Button>\n        </GridLayout>\n        \n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DatePickerDialog);
    return DatePickerDialog;
}());
exports.DatePickerDialog = DatePickerDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waWNrZXIuZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS5waWNrZXIuZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQWtCdEU7SUFJSSwwQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFFLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxLQUFLO0lBRW5CLENBQUM7SUFkUSxnQkFBZ0I7UUFoQjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsc2tCQVlYO1NBQ0YsQ0FBQzt5Q0FLOEIsZ0NBQWlCO09BSnBDLGdCQUFnQixDQWdCNUI7SUFBRCx1QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibW9kYWwtY29udGVudFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxuXG4gICAgICAgIDxEYXRlUGlja2VyIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZWQoJGV2ZW50KVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9EYXRlUGlja2VyPlxuXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sKiwgYXV0b1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiByb3c9MCBjb2w9MCB3aWR0aD0xMDAgIGNsYXNzPVwiYnRuLW91dGxpbmVcIiB0ZXh0PVwiY2FuY2VsXCIgKHRhcCk9XCJjbG9zZShmYWxzZSlcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDxMYWJlbCByb3c9MCBjb2w9MSB0ZXh0PVwiXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxCdXR0b24gcm93PTAgY29sPTIgd2lkdGg9MTAwICBjbGFzcz1cImJ0bi1wcmltYXJ5XCIgdGV4dD1cIm9rXCIgKHRhcCk9XCJjbG9zZSh0cnVlKVwiPjwvQnV0dG9uPlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIFxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckRpYWxvZyB7XG5cbiAgICBwcml2YXRlIGRhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLnBhcmFtcy5jb250ZXh0LmRhdGU7XG4gICAgfVxuXG4gICAgY2xvc2UocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygge3Jlc3VsdDpyZXN1bHR9ICk7XG4gICAgfVxuXG4gICAgb25EYXRlQ2hhbmdlZChldmVudCkge1xuICAgICAgICBcbiAgICB9XG5cbn1cbiJdfQ==