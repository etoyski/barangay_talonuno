import axios from "axios";
import { updateStart, updateSuccess, updateError } from "../userSlice";
import baseUrl from "../../utils/baseURL";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try{
        const res = await axios.post(`${baseUrl}/update`,user)
        dispatch(updateSuccess(res.data))
    }catch (err) {
        dispatch(updateError())
    }
}