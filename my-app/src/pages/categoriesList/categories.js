import {React, useState, useEffect} from 'react';
import axios from "axios";
import "./categories.css";
import ModifyForm from './modifyForm';
import AddForm from './addForm';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Categories() { // rfc
    const baseURL = "http://localhost/api/categories/read.php";
    const [post, setPost] = useState(null);
    const [modform, setModForm] = useState(false);
    const [addForm, setAddForm] = useState(false);
    const [selectedForm, setForm] = useState(0);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;
     const categories = post;
    let handleModify = (element) => (e) => {
        setForm(element);
        setModForm(true);  
    }
    let handleDelete = (id) => (e) => {
        const baseURL = "http://localhost/api/categories/delete.php"
        let formData = new FormData();
        formData.append("id", id);
        axios
        .post(baseURL, formData)
        .then((response) => {
          setPost(response.data);
        });
        window.location.reload();
    }
    let handleAdding = () => {
        setAddForm(true);
    }
    let categoriesList =  categories.map(function(element, index) {
        return (
              <Grid item xs={4}>
                <Item key= {element.id}>
                    <div className=" bg-dark-blue color">
                        <h1 className=" product__title">{element.nom}</h1>
                        <hr />
                        <p className='color'>{element.descrip}</p>
                    </div>
                    <button onClick={handleModify(element)} className='btn'>Modify</button>
                    <button onClick={handleDelete(element.id)} className='btn'>Delete</button>
            </Item>
            </Grid>
        )})
    return (
        (addForm == true)?
        <div className='container'>   
        <AddForm/>
        </div>
        :(
        (modform == true)?
        <div className='container'>     
        <ModifyForm id = {selectedForm.id} category = {selectedForm}/> 
        </div>
        :(
        <Box>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {categoriesList}
            </Grid>
            <br/>
            <button onClick={handleAdding} className="f6 link dim ph3 pv2 mb2 dib white w-100 h-100 mw5 bg-dark-blue">add category</button>
        </Box>
        )
        )
        
    )
}