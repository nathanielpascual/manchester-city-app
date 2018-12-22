import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/FormField';

class Enroll extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formData:{
            email: {
                element : 'input',
                value : '',
                config : {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation : {
                    required : true,
                    email: true
                },
                valid : false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) => {
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}

        newElement.value = element.event.target.value;
        newFormData[element.id]=newElement;

        this.setState({
            formData: newFormData
        });
    }

    submitForm =()=>{

    }
    render () {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=> this.submitForm}>
                        <div className="enroll_title">
                            Enter your Email
                        </div>
                        <div className="enroll_input">
                            <FormField 
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element)=>this.updateForm(element)}/>
                        </div>
                    </form>
                </div>
            </Fade>
          
        );
    };
}

export default Enroll