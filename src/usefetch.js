const axios = require("axios");
async function useFetch(param, set, text) {
    console.log("text : ", { text });
    console.log("param : ", param);
    let data = await axios.post(text, param).
        then(responce => {
            return responce.data;
        })
        .catch(error => {
            return undefined;
        })
    console.log("data : ", data);
    set(data);
}
export default useFetch;