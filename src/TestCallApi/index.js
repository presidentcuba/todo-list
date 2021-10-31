import React, {useEffect} from 'react'
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {getInfo} from "../redux/actions/testCallApiAction";
export default function TestCallApi() {
    const { data, isLoading, error } = useSelector(state => state.info);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfo())
    },[])
    return (
        <div>
            
        </div>
    )
}
