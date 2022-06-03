import {react, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function AddForm(props) {
    const [post, setPost] = useState(null);
   
    const [name, setName ] = useState("");
    const [desc, setDesc ] = useState("");
    let baseURL = "http://localhost/api/categories/create.php";

    let handleInput = (fn) => (e) => {
        fn(e.target.value);
    }
    
    let handleAdd = () =>  {
            //console.log(props.id, name, desc)
            let formData = new FormData();
            formData.append("nom", name);
            formData.append("descrip", desc);
            axios
              .post(baseURL, formData)
              .then((response) => {
                setPost(response.data);
              });
          }
    console.log(post);
    //if (!post) return "No post!"
    
    return (
        <Form> 
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nom</Form.Label>
          <Form.Control onInput={handleInput(setName)} type="textarea" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descrip</Form.Label>
          <Form.Control onInput={handleInput(setDesc)} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Button onClick={handleAdd}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

