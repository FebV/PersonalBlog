import ResponsiveController from './ResponsiveController';
import DataController from './DataController';

class Ignitor {
    constructor() {
        this.responsiveController = new ResponsiveController();
        this.dataController = new DataController();
        console.log('Ignitor init');
    }
}
const ignitor = new Ignitor();
export default ignitor;
