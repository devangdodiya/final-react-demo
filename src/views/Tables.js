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
import React, { useEffect, useState } from "react";
import axios from "axios";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Button, FormGroup, Form, Input } from "reactstrap";

// class Tables extends React.Component
function Tables() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");
  const [data, setData] = useState([]);
  const [error, setError] = React.useState("");
  const [preview, setpreview] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [profile, setprofile] = React.useState("");
  const [hiddenimage, sethiddenimage] = React.useState("");
  useEffect(() => {
    Get_User();
  }, []);
  function update() {
    console.group("form");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("file", profile);
    formData.append("old_file", hiddenimage);
    formData.append("id", id);

    axios
      .post("http://localhost/react/demo/update.php", formData)
      .then((respon) => {
        setError(respon.data);
        Get_User();
      })
      .then((error) => {
        console.log(error);
      });
  }
  function Get_User() {
    axios.get("http://localhost/react/demo/get_data.php").then((result) => {
      // console.warn("result", result);
      setData(result.data);
      setId(result.data[0].id);
      setName(result.data[0].name);
      setEmail(result.data[0].email);
      setpreview(result.data[0].profile);
      // console.log(result.data[0].profile);
    });
  }
  function handleUpload(event) {
    setprofile(event.target.files[0]);
    setpreview(URL.createObjectURL(event.target.files[0]));
  }
  function deletedata(id1) {
    const formData = new FormData();
    formData.append("id", id1);
    axios.post(`http://localhost/react/demo/deletedata.php`, formData).then(response => {
            // console.log(response)  
            Get_User();  
            setError(response.data);
        })
            .catch(error => {
                console.log(error)
            })
  }
  function selectuser() {
    let item = data[id - 1];
    // console.warn(data[id - 1]);
    setId(item.id);
    setName(item.name);
    setEmail(item.email);
    setGender(item.gender);
    sethiddenimage(item.profile);
    const profl = "http://localhost/react/demo/" + item.profile;
    console.warn(profl);
    setpreview(profl);
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Total User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender == 1 ? "male" : "female"}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => deletedata(item.id)}
                          >
                            delete
                          </Button>{" "}
                          <Button
                            color="primary"
                            onClick={() => selectuser(item.id)}
                          >
                            Update
                          </Button>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          // disabled
                          defaultValue={name}
                          placeholder="Full Name"
                          type="text"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>User Email</label>
                        <Input
                          defaultValue={email}
                          placeholder="example@gmail.com"
                          type="text"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          />{" "}
                          Male
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultValue="2"
                            type="radio"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          />{" "}
                          Female
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>User Email</label>
                        <Input
                          defaultValue={email}
                          placeholder="example@gmail.com"
                          type="hidden"
                          onChange={(e) => {
                            sethiddenimage(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                          type="file"
                          onChange={handleUpload}
                          name="file"
                          id="exampleFile"
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
                        onClick={update}
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
