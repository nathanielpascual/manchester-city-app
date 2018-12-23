import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/FormField';
import {Validate} from '../../ui/misc';
import {firebasePromotions} from '../../../firebase/firebase';
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

    resetFormSuccess = (type)=> {
        const newFormData = {...this.state.formData}

        for(let key in newFormData){
            newFormData[key].value = '';
            newFormData[key].valid = false;
            newFormData[key].validationMessage = '';
        }

        this.setState({
            formError : false,
            formData:newFormData,
            formSuccess: type?'Congratulations.':'Email already exists.'
        });

        this.successMessage();
    }

    successMessage = () => {
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },2000);
    }

    updateForm = (element) => {
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}

        newElement.value = element.event.target.value;

        let validData = Validate(newElement);

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id]=newElement;

        this.setState({
            formError:false,
            formData: newFormData
        });
    }

    
    submitForm =(e)=>{
        e.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
            .then((snapShot)=>{
                if(snapShot.val()=== null){
                    firebasePromotions.push(dataToSubmit);
                    this.resetFormSuccess(true);
                }
                else{
                    this.resetFormSuccess(false);
                }
            })
        }
        else
        {
            this.setState({formError:true});
        }
    }

    render () {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={this.submitForm}>
                        <div className="enroll_title">
                            Enter your Email
                        </div>
                        <div className="enroll_input">
                            <FormField 
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element)=>this.updateForm(element)}/>
                            {
                                this.state.formError ?
                                <div className="error_label">Something is wrong. Try again.</div>
                                : null
                            }
                            <div className="success_label">{this.state.formSuccess}</div>
                            <button>Enroll</button>

                            <div className="enroll_discl">
                                Third-party logos and marks are registered trademarks of their respective owners.
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
          
        );
    };
}

export default Enroll