import { Component } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-disabled',
    imports: [CdkDropList, CdkDrag],
    templateUrl: './dd-disabled.component.html',
    styleUrl: './dd-disabled.component.scss'
})
export class DdDisabledComponent {

    items = [
        {value: 'I can be dragged', disabled: false},
        {value: 'I cannot be dragged', disabled: true},
        {value: 'I can also be dragged', disabled: false},
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }

}