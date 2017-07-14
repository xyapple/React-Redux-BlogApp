import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';

class  PostsNew extends Component {
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.labelToShow}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render(){
        return(
        <form >
            <Field
                labelToShow="Title"
                name="title"
                component={this.renderField}
            />
            <Field
                labelToShow="Categories"
                name="tags"
                component={this.renderField}
            />
            <Field
                labelToShow="Post Content"
                name="Content"
                component={this.renderField}
            />

        </form>
        );
    }
}
export default reduxForm({
    form:'PostsNewForm'
})(PostsNew);
