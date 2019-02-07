import axios from 'axios';

const KEY = 'AIzaSyAFTapFS2lDzi5-L9Vjhopnt8VP8NLFtRk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResutls: 5,
        key: KEY
    }
})
