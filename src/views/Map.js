/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState} from "react";
import axios from "axios";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardTitle,Form,Button, FormGroup,Input,Label } from "reactstrap";



function Map(){
  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [gender,setGender] = React.useState('');
  const [profile,setprofile] = React.useState('');
  const [error,setError] = React.useState('');
  const [preview, setpreview] = React.useState('');
  function formhandler(event) {
    event.preventDefault()
}
function handleUpload(event) {
    setprofile(event.target.files[0]);
    setpreview(URL.createObjectURL(event.target.files[0])); 
    
   

  }

  function savedata()
  {
    //   const data = {name: name,email:email,gender:gender,profile:profile};
      console.group("form");
    //   console.log(data);
      const formData = new FormData();
      formData.append('name', name)
      formData.append('email', email)
      formData.append('gender', gender)
      formData.append('file', profile)

    
    
    axios.post("http://localhost/react/demo/fileupload.php", formData).then(respon => {
        setError(respon.data);
    })
        .then(error => {
            console.log(error)
        })
  }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
            <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add New User</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          // disabled
                          placeholder="Full Name"
                          type="text"
                          onChange={(e)=>{setName(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>User Email</label>
                        <Input
                          // defaultValue="example@gmail.com"
                          placeholder="example@gmail.com"
                          type="text"
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input type="radio"
                          onChange={(e)=>{setGender(e.target.value)}}
                           /> Male
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="2" type="radio" onChange={(e)=>{setGender(e.target.value)}} /> Female
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile"
                        onChange={handleUpload}
                         />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={savedata}  
                      >
                        Add Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
            </Col>
          </Row>
        </div>
      </>
    );

}

export default Map;
