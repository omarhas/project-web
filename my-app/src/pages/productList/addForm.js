import {react, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function AddForm(props) {
    const [post, setPost] = useState(null);
    const [name, setName ] = useState("");
    const [desc, setDesc ] = useState("");
    const [qte, setQte ] = useState("");
    const [price, setPrice ] = useState("");
    const [prom, setProm ] = useState("");
    let baseURL = "http://localhost/api/produits/create.php";

    let handleInput = (fn) => (e) => {
        fn(e.target.value);
    }
    
    let handleAdd = () =>  {
            //console.log(props.id, name, desc)
            let formData = new FormData();
            formData.append("id_categorie", props.id);
            formData.append("nom", name);
            formData.append("descrip", desc);
            formData.append("qte_disponible", qte);
            formData.append("prix_original", price);
            formData.append("promotion", prom);
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
          <Form.Label>Description</Form.Label>
          <Form.Control onInput={handleInput(setDesc)} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Qte_disponible</Form.Label>
          <Form.Control onInput={handleInput(setQte)} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prix_original</Form.Label>
          <Form.Control onInput={handleInput(setPrice)} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Promotion</Form.Label>
          <Form.Control onInput={handleInput(setProm)} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Button onClick={handleAdd}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    )
  }

