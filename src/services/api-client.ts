import axios from "axios";


export default axios.create({
    baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': '21f66a4417msh9d932b5a525bb27p1d4f7cjsn5e96601acad6',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
})