import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar';

declare var Prism: any;

@Component({
    selector: 'code-block',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex flex-col rounded overflow-hidden">
            <div *ngIf="header" class="px-2 py-1 bg-dark-5 shadow">{{ header }}</div>
            <pre class="language-{{ language }}"><code #element class="language-{{ language }}">{{code}}</code></pre>
            <div *ngIf="footer" class="px-2 py-1 bg-dark-5">{{ footer }}</div>
        </div>
    `,
    styles: [
        `
            pre {
                margin: 0;
                padding: 6px 10px;
                border-radius: 0;
                font-size: 14px;
            }
        `
    ]
})
export class CodeBlockComponent implements AfterViewInit, OnChanges {
    @ViewChild('element') element: ElementRef;

    @Input() public header: string;
    @Input() public footer: string;
    @Input() public language: string = 'typescript';
    @Input() public code: string = 'const asdf = 123;\nconst asdf = 123;';

    public ngAfterViewInit() {
        Prism.highlightElement(this.element.nativeElement);
    }
    public ngOnChanges(changes: any): void {
        if (changes?.code) {
            if (this.element?.nativeElement) {
                this.element.nativeElement.textContent = this.code;
                Prism.highlightElement(this.element.nativeElement);
            }
        }
    }
}
