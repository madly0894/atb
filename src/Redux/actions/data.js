import axios from "axios";

export const getData = () => async (dispatch) => {
    try {
        const payload = await axios.get(""
        ).then(res => res.data);

        console.log(payload.data);

    } catch (error) {
        console.log(error);
    }
}

export const getDataDispatch = (data) => ({
   type: "GET_DATA",
   data
});

