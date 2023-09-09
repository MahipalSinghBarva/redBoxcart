import axios from "axios";

// const params = {
//     headers: {
//         Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
//     },
// };

// export const fetchDataFromApi = async (url) => {
//     try {
//         const { data } = await axios.get(
//             process.env.REACT_APP_DEV_URL + url,
//             params
//         );
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };

export const apiUrl = "http://localhost:1337"
const apiKey = "797d0fd0ea096c873721a70c426bfc1eb8fea30fb128f743ff8ae7f93c5b4161394ba0f2e46e83f480a14014e318ff3ea83270b84b4cb12198efe3aa00adbbcf85be23acd271d94e64695cd109bf773f457f4b9177bc03b5f85a91a17fdf3bd4a8192623c5856cdaa2c7356496d13695431b281eacf20b1d79617f4163298977"

const params = {
    headers: {
        Authorization: `bearer ${apiKey}`, 
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${apiUrl}${url}`, params);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};