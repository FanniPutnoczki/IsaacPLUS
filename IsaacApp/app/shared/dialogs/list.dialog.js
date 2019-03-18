"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ListDialog = /** @class */ (function () {
    function ListDialog(params) {
        this.params = params;
        this.items = this.params.context.items;
        this.title = this.params.context.title;
        this.key = this.params.context.key;
        this.searchBar = this.params.context.searchBar;
        this.minimized = this.params.context.minimized;
    }
    ListDialog.prototype.submit = function (result, item) {
        this.params.closeCallback({ result: result, data: item });
    };
    ListDialog.prototype.filterItems = function () {
        var filteredItems = [];
        console.log('filtering');
        if (this.phrase == "" || this.phrase == undefined) {
            filteredItems = this.items;
        }
        else {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i][this.key].toUpperCase().indexOf(this.phrase.toUpperCase()) >= 0) {
                    filteredItems.push(this.items[i]);
                }
            }
        }
        return filteredItems;
    };
    ListDialog.prototype.onTextChanged = function (event) {
        this.filterItems();
    };
    ListDialog = __decorate([
        core_1.Component({
            selector: "modal-content",
            template: "\n    <StackLayout horizontalAlignment=\"center\" verticalAlignment=\"center\">\n\n        <Label [visibility]=\"title ? 'visible' : 'collapse' \" class=\"fancy-title-bar\" [text]=\"title\"></Label>\n\n        <SearchBar horizontalAlignment=\"center\" [visibility]=\"searchBar ? 'visible' : 'collapse' \" hint=\"Search...\" [(ngModel)]=\"phrase\" [text]=\"phrase\"></SearchBar>\n\n        <GridLayout [visibility]=\"minimized ? 'collapse' : 'visible'\" columns=\"*\" rows=\"*,auto\">\n            <ListView separatorColor=\"#ffffff\" row=0 col=0 [items]=\"filterItems()\">\n                <ng-template let-item=\"item\">\n                    <Label class=\"h4\" padding=5 (tap)=\"submit(true, item)\" text=\"{{ item[key] }}\"></Label>\n                </ng-template>\n            </ListView>\n            <GridLayout row=1 col=0 rows=\"auto\" columns=\"auto,*\">\n                <Button row=0 col=0 horizontalALignment=\"left\" width=100  class=\"btn-primary fancy-button\" text=\"cancel\" (tap)=\"submit(false, {})\"></Button>\n                <Label row=0 col=1 text=\"\"></Label>\n            </GridLayout>\n        </GridLayout>\n\n        <StackLayout [visibility]=\"minimized ? 'visible' : 'collapse'\" class=\"\" width=240>\n            <StackLayout *ngFor=\"let item of items\">\n                    <StackLayout (tap)=\"submit(true, item)\">\n                        <Label horizontalAlignment=\"center\" class=\"fancy-list-item container-small\" text=\"{{ item[key] }}\"></Label>\n                    </StackLayout>\n            </StackLayout>\n        </StackLayout>\n        \n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ListDialog);
    return ListDialog;
}());
exports.ListDialog = ListDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxrRUFBc0U7QUFrQ3RFO0lBU0ksb0JBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sTUFBTSxFQUFFLElBQVM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBRSxDQUFDO0lBQzdELENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9DLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXRDUSxVQUFVO1FBaEN0QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLCtrREE0Qlg7U0FDRixDQUFDO3lDQVU4QixnQ0FBaUI7T0FUcEMsVUFBVSxDQXdDdEI7SUFBRCxpQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1vZGFsLWNvbnRlbnRcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8U3RhY2tMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgIDxMYWJlbCBbdmlzaWJpbGl0eV09XCJ0aXRsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZScgXCIgY2xhc3M9XCJmYW5jeS10aXRsZS1iYXJcIiBbdGV4dF09XCJ0aXRsZVwiPjwvTGFiZWw+XHJcblxyXG4gICAgICAgIDxTZWFyY2hCYXIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIFt2aXNpYmlsaXR5XT1cInNlYXJjaEJhciA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZScgXCIgaGludD1cIlNlYXJjaC4uLlwiIFsobmdNb2RlbCldPVwicGhyYXNlXCIgW3RleHRdPVwicGhyYXNlXCI+PC9TZWFyY2hCYXI+XHJcblxyXG4gICAgICAgIDxHcmlkTGF5b3V0IFt2aXNpYmlsaXR5XT1cIm1pbmltaXplZCA/ICdjb2xsYXBzZScgOiAndmlzaWJsZSdcIiBjb2x1bW5zPVwiKlwiIHJvd3M9XCIqLGF1dG9cIj5cclxuICAgICAgICAgICAgPExpc3RWaWV3IHNlcGFyYXRvckNvbG9yPVwiI2ZmZmZmZlwiIHJvdz0wIGNvbD0wIFtpdGVtc109XCJmaWx0ZXJJdGVtcygpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDRcIiBwYWRkaW5nPTUgKHRhcCk9XCJzdWJtaXQodHJ1ZSwgaXRlbSlcIiB0ZXh0PVwie3sgaXRlbVtrZXldIH19XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz0xIGNvbD0wIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sKlwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9MCBjb2w9MCBob3Jpem9udGFsQUxpZ25tZW50PVwibGVmdFwiIHdpZHRoPTEwMCAgY2xhc3M9XCJidG4tcHJpbWFyeSBmYW5jeS1idXR0b25cIiB0ZXh0PVwiY2FuY2VsXCIgKHRhcCk9XCJzdWJtaXQoZmFsc2UsIHt9KVwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz0wIGNvbD0xIHRleHQ9XCJcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgW3Zpc2liaWxpdHldPVwibWluaW1pemVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiIGNsYXNzPVwiXCIgd2lkdGg9MjQwPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgKHRhcCk9XCJzdWJtaXQodHJ1ZSwgaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImZhbmN5LWxpc3QtaXRlbSBjb250YWluZXItc21hbGxcIiB0ZXh0PVwie3sgaXRlbVtrZXldIH19XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3REaWFsb2cge1xyXG5cclxuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBpdGVtczogYW55O1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VhcmNoQmFyOiBib29sZWFuO1xyXG4gICAgcHVibGljIHBocmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1pbmltaXplZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5wYXJhbXMuY29udGV4dC5pdGVtcztcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5wYXJhbXMuY29udGV4dC50aXRsZTtcclxuICAgICAgICB0aGlzLmtleSA9IHRoaXMucGFyYW1zLmNvbnRleHQua2V5O1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gdGhpcy5wYXJhbXMuY29udGV4dC5zZWFyY2hCYXI7XHJcbiAgICAgICAgdGhpcy5taW5pbWl6ZWQgPSB0aGlzLnBhcmFtcy5jb250ZXh0Lm1pbmltaXplZDtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQocmVzdWx0LCBpdGVtOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCB7cmVzdWx0OnJlc3VsdCwgZGF0YTogaXRlbX0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJJdGVtcygpIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJpbmcnKTtcclxuICAgICAgICBpZih0aGlzLnBocmFzZSA9PSBcIlwiIHx8IHRoaXMucGhyYXNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaV1bdGhpcy5rZXldLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnBocmFzZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKHRoaXMuaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==