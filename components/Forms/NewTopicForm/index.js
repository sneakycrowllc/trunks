import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Label from '../Label';
import Input from '../Input';
import TextArea from '../TextArea';

class NewTopicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      message: '',
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field>
          <Label>Title</Label>
          <Input placeholder="Title.." />
        </Field>
        <Field>
          <Label>Message</Label>
          <div className="control">
            <TextArea placeholder="Message" />
          </div>
        </Field>
        
      </form>
    )
  }
}

NewTopicForm.propTypes = {
  author: PropTypes.object // Make this required later once we connect the DB
};

NewTopicForm.defaultProps = {
  author: 'Nikolai'
};

export default NewTopicForm;
