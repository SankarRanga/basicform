import { useDispatch, useSelector } from "react-redux";
import HorizontalNonLinearStepper from "../component/HorizontalNonLinearStepper";
import { FormView } from "../views/formView";
import DenseTable from "../views/tableView";
import { Button } from "@mui/material";

const HomeScreen = () => {
    const step1FieldData = [{
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "firstName",
        label: "First Name",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "lastName",
        label: "Last Name",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "number",
        field: "phoneNo",
        label: "Phone Number",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "email",
        label: "Email Address",
        autoFocus: true,
    },
    ];
    const step2FieldData = [{
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "location",
        label: "Location",
        autoFocus: true,
        rows: 3
    }, {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "address1",
        label: "Address 1",
        autoFocus: true,
        rows: 3
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "address2",
        label: "Address 2",
        autoFocus: true,
        rows: 3
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "city",
        label: "City",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "state",
        label: "State",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "country",
        label: "Country",
        autoFocus: true,
    },
    {
        margin: "normal",
        required: true,
        fullWidth: true,
        type: "text",
        field: "pincode",
        label: "Pincode",
        autoFocus: true,
    },
    ];
    const user = useSelector((data) => data);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch({ type: "ACTIVE_STEP", data: user.activeStep + 1 });
        dispatch({ type: "USER_DETAILS", data: { ...user.userDetailes, ...values } });
    }

    const onClickEdit = (step) => {
        dispatch({ type: "ACTIVE_STEP", data: step });
    }

    const handleSubmitData = async () => {
        const response = await fetch('https://webhook.site/9199bcae-84f4-463d-b3ce-8e6c831d1552', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json',
            },
            body: JSON.stringify(user.userDetailes), // body data type must match "Content-Type" header
        });

        console.log(await response.json()); 
    }

    return (
        <div>
            <HorizontalNonLinearStepper>
                {user.activeStep === 0 && <FormView key={0} initialValues={user.userDetailes} renderFieldData={step1FieldData} handleSubmit={handleSubmit} />}  
                {user.activeStep === 1 && <FormView key={1} initialValues={user.userDetailes} renderFieldData={step2FieldData} handleSubmit={handleSubmit} />}
                {user.activeStep === 2 && <div>
                    <DenseTable enableEdit renderData={step1FieldData} dataProvider={user.userDetailes} onClickEdit={() => onClickEdit(0)} />
                    <br></br>
                    <DenseTable enableEdit renderData={step2FieldData} dataProvider={user.userDetailes} onClickEdit={() => onClickEdit(1)} />
                    <div>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmitData}
                    >
                        Submit
                    </Button>
                    </div>
                </div>}
            </HorizontalNonLinearStepper>
        </div>
    );
}

export default HomeScreen;
