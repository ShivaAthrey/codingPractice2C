const Box = (props) => {
  const { text, container } = props;
  return <div className={container}>{text}</div>;
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="small-container">
      <Box text="Small" container="container1" />
      <Box text="Medium" container="container2" />
      <Box text="Large" container="container3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
