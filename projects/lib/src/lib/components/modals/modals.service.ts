import { ApplicationRef, createComponent, Injectable, Injector } from '@angular/core';
import { FramedModal } from './modal';
import { FramedModalInstance } from './modal-instance';

@Injectable({
    providedIn: 'root'
})
export class FramedModalsService {
    public instances: { [name: string]: FramedModalInstance<any> } = {};

    public constructor(private readonly injector: Injector, private readonly applicationRef: ApplicationRef) {}

    public open<T>(config: FramedModal<T>): FramedModalInstance<T> {
        const instance = new FramedModalInstance(config);
        let host: HTMLElement;

        if (config.target) {
            host = document.getElementById(config.target)!;
        } else {
            host = document.querySelector('body')!;
        }

        const child = document.createElement('div');

        host.append(child);

        const componentRef = createComponent(config.component, {
            hostElement: child,
            environmentInjector: this.applicationRef.injector
        });

        instance.host = host;
        instance.child = child;
        instance.componentRef = componentRef;
        // this.applicationRef.attachView(componentRef.hostView);
        this.instances[config.name] = instance;
        return instance;
    }

    public close(name: string): void {
        this.instances[name].host.removeChild(this.instances[name].child);
        this.instances[name].componentRef.destroy();

        delete this.instances[name];
    }
}
