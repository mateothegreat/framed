import { Component, Input } from '@angular/core';
import { Expandable } from '@mateothegreat/framed';

@Component({
    selector: 'app-expandable-custom-header',
    templateUrl: './expandable-custom-header.component.html',
    styleUrls: ['./expandable-custom-header.component.scss']
})
export class ExpandableCustomHeaderComponent {
    @Input() public expandable: Expandable<any, any>;
}
