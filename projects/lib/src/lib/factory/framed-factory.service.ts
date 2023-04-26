import { Injectable } from '@angular/core';
import { first, ReplaySubject } from 'rxjs';
import { FramedConfig } from '../framed-config';
import { FramedContainer } from '../framed-container';
import { FramedFactoryInstance } from './framed-factory-instance';
import { FramedFactoryOutlet } from './framed-factory-outlet';
import { FramedFactoryOutletPosition } from './framed-factory-outlet-position';

@Injectable({
    providedIn: 'root'
})
export class FramedFactoryService {
    public count = 3;
    public configs: FramedConfig<any>[] = [];
    public outlets = {
        [FramedFactoryOutletPosition.TOP]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.BOTTOM]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.LEFT]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.RIGHT]: new ReplaySubject<FramedFactoryOutlet>()
    };

    public set(outlet: FramedFactoryOutlet): void {
        outlet.ref$.next(outlet);
    }

    public create<T>(
        outlet: FramedFactoryOutletPosition,
        container: FramedContainer<T>
    ): ReplaySubject<FramedFactoryOutlet> {
        this.outlets[outlet].pipe(first()).subscribe(o => {
            o.children.push(
                new FramedFactoryInstance<T>({
                    componentType: container.componentType
                })
            );
            this.outlets[outlet].next(o);
        });

        return this.outlets[outlet];
    }

    public add<T>(config: FramedConfig<T>): void {
        this.configs.push(new FramedConfig<any>(config));
        this.rightSize();
    }

    public rightSize(): void {
        // let remaining = window.innerWidth;
        // for (let name in this.configs) {
        //     let to = 0;
        //     const evenWidth = window.innerWidth / Object.keys(this.configs).length;
        //     // if (this.configs[name].dimensions.min.width && evenWidth <= this.configs[name].dimensions.min.width) {
        //     //     to = this.configs[name].dimensions.min.width;
        //     // } else {
        //     if (this.configs[name].dimensions.full) {
        //         console.log('full', name);
        //         remaining = 0;
        //     } else {
        //         if (this.configs[name].dimensions.max?.width) {
        //         } else {
        //             console.log(remaining);
        //             to = this.configs[name].dimensions.min.width;
        //         }
        //     }
        //     // }
        //     console.log(`${name}: current=${this.configs[name].dimensions.current.width}, to=${to}`);
        //     this.configs[name].dimensions.current.width = to;
        //     remaining -= to;
        // }
    }
}
