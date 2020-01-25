import React from "react";
import { Field, reduxForm } from "redux-form";
import submitResults from "../actions/submitResults";
import "../styles.scss";

const renderField = ({ input, label, meta: { error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        className="form-control form-control"
        {...input}
        placeholder={label}
        type={label}
      />
      {error && <span className="text-danger text-uppercase">{error}</span>}
    </div>
  </div>
);

class SubmitForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="displayForm" onSubmit={handleSubmit(submitResults)}>
        {submitting ? (
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </button>
        ) : (
          <React.Fragment>
            <Field
              name="username"
              type="text"
              component={renderField}
              label="Username"
            />
            <Field
              name="lastname"
              type="text"
              component={renderField}
              label="Lastname"
            />
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
            />
            <div
              className="d-flex justify-content-center"
              style={{ margin: "-20px" }}
            >
              <button
                className="btn btn-success"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
              <button
                className="btn btn-danger"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear
              </button>
            </div>
          </React.Fragment>
        )}
      </form>
    );
  }
}

export default reduxForm({
  form: "validationSubmit" // a unique identifier for this form
})(SubmitForm);
