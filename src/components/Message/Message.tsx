function Message() {
  const name = "Web Engineering";

  if (name) return <h1>Hello to {name} course</h1>;
  else return <h1>Hello to everyone</h1>;
}

export default Message;
