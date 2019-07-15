import geoTimeGetter from 'geo-time-getter';

import { GOOGLE_API_KEY } from './config'; 
const sleep = ms => new Promise(res => setTimeout(res, ms));

const gtg = new geoTimeGetter({
    GOOGLE: { apiKey: GOOGLE_API_KEY },
    cache: {
        strategy: 'cacheFirst'
    }
});

const test = async () => {
    const result1 = await gtg.get('Novosibirsk');
    console.log('result1', result1);
    await sleep(3000);
    const result2 = await gtg.get('Novosibirsk');
    console.log('result2', result2);
}

test();