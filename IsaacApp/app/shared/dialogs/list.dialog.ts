import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "modal-content",
    template: `
    <StackLayout horizontalAlignment="center" verticalAlignment="center">

        <Label [visibility]="title ? 'visible' : 'collapse' " class="fancy-title-bar" [text]="title"></Label>

        <SearchBar horizontalAlignment="center" [visibility]="searchBar ? 'visible' : 'collapse' " hint="Search..." [(ngModel)]="phrase" [text]="phrase"></SearchBar>

        <GridLayout [visibility]="minimized ? 'collapse' : 'visible'" columns="*" rows="*,auto">
            <ListView separatorColor="#ffffff" row=0 col=0 [items]="filterItems()">
                <ng-template let-item="item">
                    <Label class="h4" padding=5 (tap)="submit(true, item)" text="{{ item[key] }}"></Label>
                </ng-template>
            </ListView>
            <GridLayout row=1 col=0 rows="auto" columns="auto,*">
                <Button row=0 col=0 horizontalALignment="left" width=100  class="btn-primary fancy-button" text="cancel" (tap)="submit(false, {})"></Button>
                <Label row=0 col=1 text=""></Label>
            </GridLayout>
        </GridLayout>

        <StackLayout [visibility]="minimized ? 'visible' : 'collapse'" class="" width=240>
            <StackLayout *ngFor="let item of items">
                    <StackLayout (tap)="submit(true, item)">
                        <Label horizontalAlignment="center" class="fancy-list-item container-small" text="{{ item[key] }}"></Label>
                    </StackLayout>
            </StackLayout>
        </StackLayout>
        
    </StackLayout>
  `
})
export class ListDialog {

    public key: string;
    public items: any;
    public title: string;
    public searchBar: boolean;
    public phrase: string;
    public minimized: boolean;

    constructor(private params: ModalDialogParams) {
        this.items = this.params.context.items;
        this.title = this.params.context.title;
        this.key = this.params.context.key;
        this.searchBar = this.params.context.searchBar;
        this.minimized = this.params.context.minimized;
    }

    submit(result, item: any) {
        this.params.closeCallback( {result:result, data: item} );
    }

    filterItems() {
        let filteredItems = [];
        console.log('filtering');
        if(this.phrase == "" || this.phrase == undefined) {
            filteredItems = this.items;
        } else {
            for (var i = 0; i < this.items.length; i++) {
                if(this.items[i][this.key].toUpperCase().indexOf(this.phrase.toUpperCase()) >= 0) {
                    filteredItems.push(this.items[i]);
                }
            }
        }
        return filteredItems;
    }

    onTextChanged(event) {
        this.filterItems();
    }

}
