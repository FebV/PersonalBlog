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
            return {
                image: 'images/selfie.jpg',
                name: 'Zhao Yifan',
                birth: '1996 / 02',
                education: 'Shandong University',
                major: 'Software Engineering',
                email: 'cn.zhaoyifan@gamil.com'
            };
        if(this.mode === 'mock') {
            return await this.networkController.request('mockData/personalInfo.json')
        }
    }

    async getArticleList() {
        if(this.mode === 'fake')
            return [
                {
                    // image: '/images/selfie.jpg',
                    title: 'skill behind this website',
                    time: '1482154428',
                    url: '/mockData/skillBehind.json'
                }
            ];
        if(this.mode === 'mock') {
            return await this.networkController.request('mockData/personalInfo.json')
        }
    }
}

class NetworkController {
    constructor() {
    }

    async request(url) {
        let result = null;
        await fetch(url)
                .then(res => res.json())
                .then(json => {result = json;})
                .catch(() => {return 'fail'});
        return result;
    }
}