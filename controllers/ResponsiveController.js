export default class ResponsiveController {
    constructor() {
        if(matchMedia('(orientation:landscape)').matches === true)
            this.direction = 'landscape';
        else
            this.direction = 'portrait';
    }

}