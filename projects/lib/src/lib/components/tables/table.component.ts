import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FramedTable } from './table';

@Component({
    selector: 'framed-table',
    standalone: true,
    imports: [CommonModule],
    template: ` <p>table works!</p> `
})
export class FramedTableComponent {
    @Input() public table: FramedTable;
}
