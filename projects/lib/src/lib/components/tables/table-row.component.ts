import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'framed-table-row',
    standalone: true,
    imports: [CommonModule],
    template: ` <p>table-row works!</p> `
})
export class FramedTableRowComponent {}
