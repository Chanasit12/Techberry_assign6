import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import {
    Link
} from "react-router-dom";
import usefetch from "../../usefetch";
import "./resource/style/css/style.css";
function ForgotPassword() {
    const [Email, setEmail] = useState("")
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [status, setStatus] = useState([]);
    const [param, setParam] = useState(
        {
            username: ""
        }
    );
    useEffect(() => {
        if (submit === true) {
            console.log("Param in Login : ", param);
            usefetch(param, setStatus, "/forgotPassword");
            handleOpen();
        }
        return () => {
            setParam({
                username: ""
            });
            setSubmit(false);
            setStatus([]);
        }
    }, [submit])
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Text2 = (
        <div className={"alert"}>
            <div className={"alertHeader"}>
                <Typography id="AlertHeader" variant="h5">Alert</Typography>
            </div>
            <div className={"AlertContent"}>
                <Typography id="AlertContent" variant="h7">
                    {status.message}
                </Typography>
            </div>
            <Link to="/" className={"Link"}>
                <Button className={"AlertButton"}
                    onClick={handleClose}>
                    OK
                </Button>
            </Link>
        </div>
    )
    return (
        <div className={"content"}>
            <Grid container spacing={0} className={"test"}>
                <Grid item sm >
                    <div className={"Empty"}>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={"form"}>
                    <Card className={"box"}>
                        <Card className={"header"}>
                            <img src="/LogoeHR.png" className={"img"} />
                        </Card>
                            <Typography className={"forgotPassword"} variant="h5">
                                Forgot Password
                            </Typography>
                            <Typography className={"welcome"} variant="h7">
                                if you forgotten your password you can reset here.
                            </Typography>
                            <form >
                                <div className={"input"}>
                                <TextField id="standard-basic" label="Email" className={"EmailInput"} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </form>
                            <div className={"ButtonBox"}>

                                    <Link to="/" className={"buttonback"}>
                                        <Button
                                            color="deafult"
                                            className={"BackButton"}
                                        >
                                            <Typography  variant="h7" >Back to Login</Typography>
                                        </Button>
                                    </Link>

                                    <div className={"buttonre"}>
                                    <Button
                                        variant="contained"
                                        color="deafult"
                                        className={"ResetButton"}
                                        onClick={() => {
                                            setParam({ username: Email })
                                            setSubmit(true)
                                        }}
                                    >
                                        <Typography  variant="h7">Reset Password</Typography>
                                    </Button>
                                    </div>
                                    {status.success === true && <Modal
                                        open={open}
                                        onClose={handleClose}
                                        className={"modal"}
                                    >
                                        {Text2}
                                    </Modal>}
                                    {status.success === false && <Modal
                                        open={open}
                                        onClose={handleClose}
                                        className={"modal"}
                                    >
                                        {Text2}
                                    </Modal>}
                            </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default ForgotPassword;