import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';


 class PostIndex extends Component {
     //create a event to fetch the posts
     componentDidMount(){
        this.props.fetchPosts();
     }
    render(){
        return(
            <div>
                Post Index
            </div>
        );
    }
}
export default connect(null, {fetchPosts})(PostIndex);
