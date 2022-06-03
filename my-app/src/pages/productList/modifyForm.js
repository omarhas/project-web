import {react, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function ModifyForm(props) {
    const [post, setPost] = useState(null);
    const [name, setName ] = useState("");
    const [desc, setDesc ] = useState("");
    const [qte, setQte ] = useState("");
    const [price, setPrice ] = useState("");
    const [prom, setProm ] = useState("");

    let baseURL = "http://localhost/api/produits/update.php";

    let handleInput = (fn) => (e) => {
        fn(e.target.value);
    }
    
    let handleModify = () =>  {
            //console.log(props.id, name, desc)
            let formData = new FormData();
            formData.append("id", props.id);
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
          <Form.Control onInput={handleInput(setName)} value = {`${props.product.nom}`} type="textarea" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control onInput={handleInput(setDesc)} value = {`${props.product.descrip}`} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Qte_disponible</Form.Label>
          <Form.Control onInput={handleInput(setQte)} value = {`${props.product.qte_disponible}`} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prix_original</Form.Label>
          <Form.Control onInput={handleInput(setPrice)} value = {`${props.product.prix_original}`} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Promotion</Form.Label>
          <Form.Control onInput={handleInput(setProm)} value = {`${props.product.promotion}`} as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Button onClick={handleModify}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

