import { Component, Input, OnInit } from '@angular/core';
import { Expandable } from 'lib';

@Component({
    selector: 'app-random',
    templateUrl: './random.component.html',
    styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
    @Input() public expandable: Expandable<any, any>;
    public ngOnInit() {
        console.log('random component init', this.expandable);
    }
}
