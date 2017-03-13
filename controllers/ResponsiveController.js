export default class ResponsiveController {
    constructor() {
        if(matchMedia('(orientation:landscape)').matches === true)
            this.direction = 'landscape';
        else
            this.direction = 'portrait';
        window.addEventListener('resize', e => {
            if(!matchMedia(`(orientation:${this.direction}`).matches) {
                this.direction = this.direction === 'landscape' ? 'portrait' : 'landscape';
                dispatchEvent(new Event('rotate'));
                location.reload();
            }
        });
    }

}