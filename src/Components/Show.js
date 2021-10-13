import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


function Show() {
  const [result, setResult] = useState({});
useEffect(() => {

  axios
  .get(
    'https://newsapi.org/v2/everything?q=brampton&from=2021-10-10&sortBy=publishedAt&apiKey=cd755ea6ebe14249ba7095504d808f20'
    )
    .then((response) => {
      console.log(response.data.articles[3]);
      setResult(response.data.articles[3]);
    })
    .catch((error) => console.log('error message=>', error.message));
  },[]);

  return (
    <div className="test">

      <label>Enter keywords here</label>
      <form>
      <input type = "text"></input>
      <br/>
      <Button type = "submit">Add to list</Button>
      </form>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '18rem' }} src={result.urlToImage} />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>{result.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Show;