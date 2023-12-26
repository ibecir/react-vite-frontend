import { useState } from "react";
import { User } from "../../../../utils/types";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useCreateUser, useDeleteUser, useUsers } from "../../../../hooks";
import useUpdateUser from "../../../../hooks/useUpdateUser";

const UserScheme = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .email("Email is invalid")
    .required("Password is required"),
  userType: Yup.string().required("User Type is required"),
  password: Yup.string().required("Password is required"),
});

const UsersList = () => {
  const { data, error, isLoading, isError, refetch } = useUsers();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();
  const [user, setUser] = useState<User | undefined>(undefined);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setUser({
      userId: "",
      name: "",
      username: "",
      userType: "",
      password: "",
    });
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSelectUser = (user: User) => {
    setUser(user);
    handleShow();
  };

  const handleDeleteUser = (userId: string) => {
    deleteUser.mutate(userId, {});
  };

  const handleSubmit = (values: User) => {
    setSubmitting(true);
    console.log("THE VALUES ARE ", values);
    if (user?.userId === "") {
      createUser.mutate(values, {
        onSuccess: () => {
          setSubmitting(false);
        },
        onError: (error) => {
          setSubmitting(false);
          toast.error(error.message);
        },
        onSettled() {
          handleClose();
        },
      });
    } else {
      updateUser.mutate(values, {
        onSuccess: () => {
          setSubmitting(false);
        },
        onError: (error) => {
          setSubmitting(false);
          toast.error(error.message);
        },
        onSettled() {
          handleClose();
        },
      });
    }
  };
  return (
    <div>
      <ToastContainer />
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
              initialValues={user}
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
            {data?.map((user) => {
              return (
                <div>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    aria-current="true"
                    key={user.userId}
                    onClick={() => handleSelectUser(user)}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h2 className="mb-1">{user?.username}</h2>
                      <button
                        onClick={() => {
                          handleDeleteUser(user.userId);
                        }}
                        type="button"
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="mb-1">{user?.email}</p>
                    <small>{user?.email + " - " + user?.userType}</small>
                    <small>{user?.creationDate}</small>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
