import { useEffect, useState } from "react";
import { User } from "../../../../utils/types";
import { UserService } from "../../../../services";
import { Button, Modal } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const UserScheme = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .email("Email is invalid")
    .required("Password is required"),
  userType: Yup.string().required("User Type is required"),
  password: Yup.string().required("Password is required"),
});

const UsersList = () => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [submiting, setSubmiting] = useState(false);
  const handleSubmit = (values: User) => {
    setSubmiting(true);
    UserService.addUser(values)
      .then((data) => {
        refetchUsers();
      })
      .catch((error) => {
        setSubmiting(false);
        error.handleGlobally && error.handleGlobally();
      })
      .finally(() => {
        setSubmiting(false);
        handleClose();
      });
  };

  const refetchUsers = () => {
    setIsLoading(true);
    UserService.getUsers()
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        error.handleGlobally && error.handleGlobally();
      });
  };

  useEffect(() => {
    refetchUsers();
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Open Model
          </Button>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                How To Add Bootstrap Modal In React JS - Websolutionstuff
              </Modal.Title>
            </Modal.Header>
            <Formik
              initialValues={{
                name: "",
                username: "",
                userType: "",
                password: "",
              }}
              validationSchema={UserScheme}
              onSubmit={handleSubmit}
            >
              {({ submiting }) => (
                <Form>
                  <Modal.Body>
                    <div className="row pb-3">
                      <label htmlFor="name">Full name</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                      />
                      <ErrorMessage name="name" />
                    </div>
                    <div className="row pb-3">
                      <label htmlFor="username">Username</label>
                      <Field
                        type="email"
                        name="username"
                        placeholder="Enter username"
                      />
                      <ErrorMessage name="username" />
                    </div>
                    <div className="row pb-3">
                      <label htmlFor="userType">User Type</label>
                      <Field
                        type="text"
                        name="userType"
                        placeholder="Enter user type"
                      />
                      <ErrorMessage name="userType" />
                    </div>
                    <div className="row pb-3">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                      <ErrorMessage name="password" />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button type="submit" variant="primary">
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
          <div className="list-group">
            {users?.map((user) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  key={user.userId}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h2 className="mb-1">{user?.username}</h2>
                    <small>{user?.creationDate}</small>
                  </div>
                  <p className="mb-1">{user?.email}</p>
                  <small>{user?.email + " - " + user?.userType}</small>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
