import {FETCH_POSTS} from '../actions/index';
import _ from 'lodash';

export default function(state={}, action){
    switch (action.typ) {
        case FETCH_POSTS:

            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
