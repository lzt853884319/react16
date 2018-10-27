import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {initListAction} from "./ActionCreators";
import axios from "axios";
import { cache } from 'sw-toolbox';

function* getInitList() {

    try {
        const res = yield axios.get("/list");
        const action = initListAction(res.data);
        yield put(action);
    } catch(err) {
        console.log(err + "link defeat");
        
    }
    
    // axios.get('/list').then((res) => {
    //     const data = res.data;
    //     const action = initListAction(data);
    //     put(action);
    // }).catch(() => {
    //     // throw new Error("def")
    //     console.log(2)
    // })
}

function* mySaga() {
    // yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
    yield takeEvery(actionTypes.GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;