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
function validate(values){
    const errors={};
    if(!values.title || values.title.length < 3){
        errors.title="Enter a title! that is at least 3 characters!";
    }
    if(!values.categories){
        errors.categories="Enter some categories!";
    }
    if(!values.content){
        errors.content="Enter some content!";
    }
    return errors;
}
export default reduxForm({
    validate: validate,
    form:'PostsNewForm'
})(PostsNew);
