/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AdminLayout from "layouts/Admin.js";
import { Switch, Redirect,Route } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [login, setlogin] = useState("true");

  const classes = useStyles();
  // if (localStorage.getItem("userData") === null) {
  //  props.history.push("./layouts/Admin");
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {Error}
          <form className={classes.form} onSubmit={formhandler} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={logincheck}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  function logincheck() {
    // props.history.push("/Mydashboard");
    // console.log(Email);
    // console.log(Password);
    const formData = new FormData();
    formData.append("email", Email);
    formData.append("password", Password);
    axios
      .post("http://localhost/react/demo/login.php", formData)
      .then((respon) => {
        // setError(respon.data);
        let responseJson = respon;
        if (respon.data == 1) {
          // sessionStorage.setItem('userData',JSON.stringify(responseJson));
          localStorage.setItem("userData", JSON.stringify(responseJson));
       
         <Switch>
 
          {/* <Route path="/admin" render={(props) => <Dashboard {...props} />} /> */}
            {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
            {/* <Redirect from="/"  to="/admin/Dashboard" /> */}
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/"  to="/admin/Dashboard" />
                <Route path="/admin/Dashboard" component={AdminLayout} />
          </Switch>
        } else {
          setError("email and password missmatch");
        }
      })
      .then((error) => {
        console.log(error);
      });
  }
  function formhandler(event) {
    event.preventDefault();
  }
}
