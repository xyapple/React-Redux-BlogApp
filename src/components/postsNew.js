import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';

class  PostsNew extends Component {

    renderField(field){
        const {meta:{touched, error}} =field;
        const className= `form-group ${touched && error ? 'has-danger': ''}`;
        return(
            <div className={className}>
                <label>{field.labelToShow}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className='text-help'>
                    {touched ? error: ''}
                </div>
            </div>
        )
    }
onSubmit(values){
    console.log(values);

}
    render(){
        const {handleSubmit}=this.props;
        return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                labelToShow="Title"
                name="title"
                component={this.renderField}
            />
            <Field
                labelToShow="Categories"
                name="categories"
                component={this.renderField}
            />
            <Field
                labelToShow="Post Content"
                name="content"
                component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
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
