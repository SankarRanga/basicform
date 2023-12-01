import * as React from 'react';
import { Formik } from 'formik';
import { FormikSubmitView } from './formikSubmitView';

export const FormView = (props) => {

    React.useEffect(() => {
        var input = document.getElementById('location');
        const autocomplete = new window.google.maps.places.Autocomplete(input);

        window.google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();

            // i can get here but for i am not able to show because for gmap key
            console.log(place);
        })
    }, [])

    return (
        <Formik
            key={props.key}
            initialValues={props.initialValues || {}}
            validate={values => {
                const errors = {};

                if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && props.renderFieldData && props.renderFieldData["email"]
                ) {
                    errors.email = 'Invalid email address';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.handleSubmit && props.handleSubmit(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
           <FormikSubmitView {...props} />
        </Formik>
    );
}