import ResponsiveController from './ResponsiveController';
import DataController from './DataController';
import UtilController from './UtilController';

class Ignitor {
    constructor() {
        this.page = new ResponsiveController();
        this.data = new DataController();
        this.util = UtilController;
        console.log('Ignitor init');
    }
}
const ignitor = new Ignitor();
export default ignitor;
