import geoTimeGetter from 'geo-time-getter';

import { GOOGLE_API_KEY } from './config'; 

const gtg = new geoTimeGetter({
    GOOGLE: { apiKey: GOOGLE_API_KEY }
});

const test = async () => {
    const result = await gtg.get('Novosibirsk');
    console.log(result);
}

test();