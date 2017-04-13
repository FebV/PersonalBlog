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
        if(this.mode === 'mock' || this.mode === 'real') {
            return await this.networkController.request('/mockData/personalInfo.json')
        }
    }

    async getArticleList() {
        if(this.mode === 'fake')
            return [
                {
                    id: 1,
                    // image: '/images/selfie.jpg',
                    title: 'skill behind this website',
                    time: '1482154428',
                    // url: '/mockData/skillBehind.json'
                }
            ];
        if(this.mode === 'mock') {
            return await this.networkController.request('/mockData/articleList.json');
        }
        if(this.mode === 'real') {
            const response = await this.networkController.request('/api/articles');
            return response.data;
            return [];
        }
    }

    async getArticleDetail(articleId) {
        if(this.mode === 'fake') {
            return {
                    id: 1,
                    // image: '/images/selfie.jpg',
                    title: 'skill behind this website',
                    time: '1482154428',
                    content: `# Tech behind this website\nI believe that a personal blog should be build by the most mordern skills, so I have learnt a long period to study the newest skills and standards. I will talk about every sides to explain the idea of the whole website.\n\n## frontend \nThe hotest frontend framework in current time is React.js of course, its one-way data binding and Component-based concept is very attractive. But the main reason for me to pick it is the ES6 grammar. Who can say no to the next(maybe the current) standard ? I also have learnt a little bit Angular 2, and have interests on it. But it's not as popular as I expect, maybe I can't find a set of components that I need. So I decide to choose React.js, the React Native is also attractive after I had spent a whole afternoon on it.`,
                    url: '/mockData/skillBehind.json'
                }
        }
        if(this.mode == 'mock') {
            const result = await this.networkController.request('/mockData/skillBehind.json');
            return result;
        }
        if(this.mode == 'real') {
            const result = await this.networkController.request(`/api/articles/${articleId}`);
            return result.data;
        }

    }

    async getCommentByArticleId(id) {
        const result = await this.networkController.request(`/api/articles/${id}/comments`);
        return result.data;
    }
    
    async postComment(articleId, comment) {
        console.log(articleId);
        const result = await this.networkController.post(`/api/articles/${articleId}/comments`,{
            content: comment,
        });
        return result;
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

    async post(url, data) {
        let urlEncoded = '';
        for(let i in data) {
            urlEncoded += `&${i}=${data[i]}`;
        }
        urlEncoded = urlEncoded.slice(1);
        let result;
        await fetch(url, {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlEncoded,
        })
        .then(res => res.json())
        .then(json => {
            result = json;
        })
        return result;
    }
}
