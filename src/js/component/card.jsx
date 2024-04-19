import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SecondsCounter from "./counter";



  function Stop(){
    return(console.log("Test test"))
  }
function App() {
  const [count, setCount] = useState(0);
  return (
    <Card className="cards">
      <Card.Header className="header">Simple Counter</Card.Header>
      <Card.Body>
        <Card.Title className="title"></Card.Title>
        <Card.Text className="text">
          <SecondsCounter count={count} setCount={setCount}/>

        </Card.Text>
      </Card.Body>
      <Card.Footer className="footer">

        <Button variant="success">Play/Pause</Button>
        <Button variant="warning" onClick={()=>setCount(count)}>Stop</Button>
        <Button variant="danger" onClick={()=>setCount(0)}>reset</Button>
      
      </Card.Footer>
    </Card>
  );
}


export default App;