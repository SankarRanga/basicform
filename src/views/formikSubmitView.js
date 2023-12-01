import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Form as FormikForm, useFormikContext } from 'formik';
import { TextField } from '@mui/material';

export const FormikSubmitView = (props) => {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormikContext();

    return (
        <FormikForm onSubmit={handleSubmit}>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box noValidate sx={{ mt: 1 }}>
                    {props.renderFieldData && props.renderFieldData.map((obj) => {
                        return (<TextField
                            margin={obj.margin}
                            required={obj.required}
                            type={obj.type}
                            fullWidth={obj.fullWidth}
                            id={obj.field}
                            label={obj.label}
                            name={obj.field}
                            autoComplete={obj.field}
                            autoFocus={obj.autoFocus}
                            rows={obj.rows}
                            value={values[obj.field]}
                            error={errors[obj.field]}
                            helperText={errors[obj.field]}
                            onChange={handleChange}
                        />)
                    })}
                    <div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    </div>
                </Box>
            </Box>
        </FormikForm>)
}