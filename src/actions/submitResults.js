import { SubmissionError } from "redux-form";

const latency = time => new Promise(res => setTimeout(res, time));

async function submitResults(values) {
  const regex = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

  await latency(20000);
  if (!values.username || values.username.length < 4) {
    throw new SubmissionError({
      username: "user don't validate",
      _error: "login failed"
    });
  }
  if (!values.lastname || values.lastname.length < 4) {
    throw new SubmissionError({
      lastname: "lastname don't validate",
      _error: "login failed"
    });
  }
  if (!regex.test(values.email)) {
    throw new SubmissionError({
      email: "email is wrong",
      _error: "login failed"
    });
  }
  if (values.password !== "zouber") {
    throw new SubmissionError({
      password: "password is wrong",
      _error: "login failed"
    });
  } else {
    console.log(`Enregistrement:\n\n ${JSON.stringify(values, null, 2)}`);
  }
}

export default submitResults;
