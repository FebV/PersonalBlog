# Tech behind this website
I believe that a personal blog should be build by the most mordern skills, so I have learnt a long period to study the newest skills and standards. I will talk about every sides to explain the idea of the whole website.

## Frontend Skills Stack
#### React
The hotest frontend framework in current time is React.js of course, its one-way data binding and Component-based concept is very attractive. But the main reason for me to pick it is the ES6 grammar. Who can say no to the next(maybe the current) standard ? I also have learnt a little bit Angular 2, and have interests on it. But it's not as popular as I expect, maybe I can't find a set of components that I need. So I decide to choose React.js, the React Native is also attractive after I had spent a whole afternoon on it.
#### Material-ui
Yeah, a decent react components set could save a lot of boring code & time, the most popular components set seems to be *Material-ui*, and Material Design looks good, pick it.
#### Babel
The Async/Await can save the callback hell perfectly, but it can only be used in ES7. So I use several babel modules to be able to write the most readable code, and browsers can work just fine.
#### Webpack and its dev-server
The best tool I have ever used. It helps me to slove the most parts of boring tasks. I will write an article later to talk about this amazing tool with babel.
#### React-router
Single Page Application is a new word and it will be the future. It can leave the server side to be a pure APIs provider.although it could bring the SEO problem, we can build a set of server-render page later.
#### Fetch API
Using Fetch could feel super fly. The code below could tell anything.
``` fetch( 'someurl' )
        .then( res => res.json() )
        .then( json => { anything() } );
```  
I think it's elegant enough to beat $.ajax().
## Frontend Archtecture
#### Data Controller
I miss the old days when there is MV* on Frontend, React take off MV, I write them back. I write a Data Controller to handle all requests sent by any component, to separate view from data. In Data Controller it's easy to change the data source, like 'fake', 'mock', 'real'.
#### Mock System
All data that present at pages stored in .json files in the mockData/ folder, when the mode in controllers/config.js is turned to 'mock', Data Controller will read data from these json files. Server side APIs are identical to these json files, so without any pain frontend can connect to a real server side.
#### Responsive Controller
When the page finished loading, a responsive controller starts to initialize, it records the current visiter's screen type, components could adjust style rely on the type that responsive controller provide.
## Speedup Tech
#### Webpack Uglify
webpack Uglify plugin can compress js into a one-line flie, remove all needless space & return symbol. In my case, the original bundle.js weight 1.9M, after minimizing it turned to about 800k, which means visitor can open the website as twice fast as normal.  
#### Content Delivery Network
As this website's server is in USA, if a visitor located in China wants to visit it, it can take a huge wait-time during transport from USA to China, across Pacific Ocean. So deploying a CDN in China could be a decent choice for the convience to visitors from China. I use the service provided by su.baidu.com, works effciently.  
#### Gzip
With the help of Nginx's Gzip, the weight of my cumbersome bundle.js is reduced to 130K, it's almost acceptable even on mobile phone, and will save the bandwidth of server too.  