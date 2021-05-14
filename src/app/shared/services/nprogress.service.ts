import { Injectable } from '@angular/core';

declare var NProgress: any;

@Injectable()
export class NProgressService {
    
    constructor() {
        NProgress.configure({ ease: 'ease', speed: 500 }); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
        NProgress.configure({trickleSpeed: 800 }); //Adjust how often to trickle/increment, in ms.
        NProgress.configure({ showSpinner: true });//Turn off loading spinner by setting it to false. (default: true)
        // NProgress.configure({ parent: '#container' });//specify this to change the parent container. (default: body)
    }

    start() {
        NProgress.start();
    }
    set(v:any) {
        NProgress.set(v);
    }
    inc() {
        NProgress.inc();
    }
    done() {
        NProgress.done();
    }
    
}