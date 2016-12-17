import config from './config';

/*
    handle all data access
    including mock or real network environment
 */

export default class DataController {
    constructor() {
        this.mode = config.networkMode;
        this.networkController = new NetworkController();
        this.personalInfo = this.getPersonalInfo();
    }

    async getPersonalInfo() {
        if(this.mode === 'fake')
            return {name: 'Zhao Yifan'};
        if(this.mode === 'mock') {
            let result = await this.networkController.request('mockData/personalInfo.json')
            console.log(result);
        }
    }
}

class NetworkController {
    constructor() {
    }

    async request(url) {
        console.log('request');
        let result = null;
        await fetch(url)
                .then(res => res.json())
                .then(json => {result = json;})
                .catch(() => {return 'fail'});
        return result;
    }
}