import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {
    Link, Redirect
} from "react-router-dom";
import usefetch from "../../usefetch";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import "./resource/style/css/style.css";
function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [status, setStatus] = useState([]);
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const [param, setParam] = useState(
        {
            username: "",
            password: ""
        }
    );
    useEffect(() => {
        if (submit === true) {
            console.log("Param in Login : ", param);
            usefetch(param, setStatus, "/login");
            handleOpen();
        }
        return () => {
            setParam({
                username: "",
                password: ""
            });
            setSubmit(false);
            setStatus([]);
        }
    }, [submit])
    console.log("Status susccess : ", status.success);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Text = (
        <div className={"alert"}>
            <div className={"alertHeader"}>
                <Typography id="AlertHeader" variant="h5">Alert</Typography>
            </div>
            <div className={"AlertContent"}>
                <Typography id="AlertContent" variant="h7">
                    {status.message}
                </Typography>
            </div>
            <Button className={"AlertButton"}
                onClick={handleClose}>
                OK
            </Button>
        </div>
    )
    return (
        <div className={"content"}>
            <Grid container spacing={0} className={"test"}>
                <Grid item sm >
                    <div className={"Empty"}>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Card className={"box"}>
                        <Card className={"header"}>
                            <img src="/LogoeHR.png" className={"img"} />
                        </Card>
                        <div className={"login"}>
                            <Typography className={"welcome2"} variant="h5" >
                                WELCOME!
                            </Typography>
                            <form >
                                <TextField id="username" label="username" className={"UsernameInput"}
                                    type="text" onChange={(e) => { setEmail(e.target.value) }} />

                                <TextField id="password" label="password"
                                    className={"UsernameInput"} type="password" onChange={(e) => { setPassword(e.target.value) }} />
                                <div className={"forgotPassword2"}>
                                    <Link to="../forgotPassword/ForgotPassword.js" className={"linkForgotpass"}>Forgot password</Link>
                                </div>
                                <Link to="/" className={"Link2"}>
                                    <Button
                                        className={"Button2"}
                                        onClick={() => {
                                            setParam({ username: Email, password: Password })
                                            setSubmit(true);
                                        }}
                                    >
                                        <Typography className={"welcome2"} variant="h7" >Login</Typography>
                                    </Button>
                                </Link>
                            </form>
                            {status.success === true && <Redirect to="/" />}
                            {status.success === false &&
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    className={"modal"}
                                >
                                    {Text}
                                </Modal>}
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Login;