// Core
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Elements
import { MyInput as Input, Radio, Select } from '../../elements';

// Styles
import { StyledForm as Form, StyledRadioGroup } from './styles';

// Hooks
import { useProfile } from '../../../bus/profile';

// Types
import { Profile } from '../../../bus/profile/types';

const InitialForm: Profile = {
    firstName:  '',
    surname:    '',
    age:        '',
    email:      '',
    sex:        '',
    speciality: '',
};

const DisplayingErrorMessagesSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    surname: Yup.string()
        .required('Required'),
    age: Yup.number()
        .min(6, 'Too young')
        .max(60, 'Too old'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    sex: Yup.string()
        .required('Required'),
    speciality: Yup.string()
        .required('Required'),
});

export const StudentRegistration = () => {
    const { fillProfile } = useProfile();

    return (
        <Formik
            initialValues = { InitialForm }
            validationSchema = { DisplayingErrorMessagesSchema }
            onSubmit = { (values) => fillProfile(values) }>
            {
                ({ errors }) => (
                    <Form>
                        <Input
                            name = 'firstName'
                            placeholder = 'Input first name'
                            type = 'text'>
                            First name
                        </Input>
                        <Input
                            name = 'surname'
                            placeholder = 'Input second name'
                            type = 'text'>
                            Second name
                        </Input>
                        <Input
                            name = 'age'
                            placeholder = 'Input age'
                            type = 'number'>
                            Age
                        </Input>
                        <Input
                            name = 'email'
                            placeholder = 'Input email'
                            type = 'email'>
                            Email
                        </Input>
                        <StyledRadioGroup>
                            <Radio
                                name = 'sex'
                                value = 'male'>
                                Male
                            </Radio>
                            <Radio
                                name = 'sex'
                                value = 'female'>
                                Female
                            </Radio>
                        </StyledRadioGroup>
                        {errors.sex && <div>{errors.sex}</div>}
                        <Select
                            name = 'speciality'>
                            <option value = 'designer'>Designer</option>
                            <option value = 'developer'>Developer</option>
                            <option value = 'writer'>Writer</option>
                        </Select>
                        <button type = 'submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};
