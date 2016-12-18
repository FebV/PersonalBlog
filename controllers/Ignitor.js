import ResponsiveController from './ResponsiveController';
import DataController from './DataController';

class Ignitor {
    constructor() {
        this.page = new ResponsiveController();
        this.data = new DataController();
        console.log('Ignitor init');
    }
}
const ignitor = new Ignitor();
export default ignitor;
