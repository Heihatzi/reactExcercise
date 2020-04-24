import ReactDOM from 'react-dom';
import React from 'react';



function getTime() {
  const date = new Date();

  return date.getHours() + ":" + date.getMinutes();
}
// <Box></Box>
function Box( props ){
  const random = Math.random();
  const styles = { border: "2px solid gray", backgroundColor: props.color, color: "white" }
  console.log( props );
  return (
    <>
      <hr/>
      <p>Prop color: { props.color }</p>
      <p className="box">A Box! { random * 1000 }</p>
      <p>Time is { getTime() }</p>
      <div style={styles}>Children1212: { props.children && props.children[1] }</div>
    </>
  );
}

// <App></App>
function App(){
  return (
    <>
      <h1>App! <mark>JS</mark></h1>
      <h2>Subtitle</h2>
      <p>Paragraph</p>
      <Box color="tomato" />
      <Box color="indigo">Box <strong>No245</strong></Box>
      <Box text="OMG">Box <em>No3</em></Box>
    </>
    );
}
//ReactDOM.render(WHAT, WHERE);
ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);