import {React, useState, useEffect} from 'react';
import axios from "axios";
import "./productList.css";
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

export default function ProductsList() { // rfc
    const baseURL = "http://localhost/api/categories/read.php";
    const [post, setPost] = useState(null);
    const [postProd, setPostProd] = useState(null);
    const [selectProd, setSelectProd] = useState("");
    const [select, setSelect] = useState(false);
    const [modform, setModForm] = useState(false);
    const [addForm, setAddForm] = useState(false);
    const [selectedForm, setForm] = useState(0);
    const [currentId, setCurrentId] = useState(0);
    let categProducts;
    
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
        const baseURL = "http://localhost/api/produits/delete.php"
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

    let displayProducts = (categorieIdd)  => (e) => {
        setCurrentId(categorieIdd);
        let baseURL = "http://localhost/api/produits/read.php"
        //setproducts(true);
        axios
        .post(`${baseURL}?categorie=${categorieIdd}`)
        .then((response) => {
        setPostProd(response.data);
        });
        setSelectProd(postProd.map(function(element, index) {
            return(
                <Grid item xs={4}>
                <Item >
                <div key= {element.id} className="product">
                    <img  src={`${element.image}`}/>
                    <h1 className="product__title">{element.nom}</h1>
                    <hr />
                    <p>{element.descrip}</p>
                    <p>{element.prix_original}</p>
                    <p>{element.qte_disponible}</p>
            
                    <button onClick={handleModify(element)} className='btn'>Modify</button>
                    <button onClick={handleDelete(element.id)} className='btn'>Delete</button>
                </div>
                </Item>
            </Grid>
            )
        }))
        setSelect(true);
    }
    
    let categoriesList =  categories.map(function(element, index) {
        return (
            <Grid className="cursor" item xs={4}>
                <   Item key= {element.id}>
                    <div className='bg-dark-blue color' onClick={displayProducts(element.id)} key = {element.id}>    
                        <div className="">
                            <h1 className=" product__title">{element.nom}</h1>
                        <hr />   
                        </div>
                    </div>            
                </Item>
            </Grid>
            
        )})
    
    console.log(selectProd)

    return (
        (addForm == true)?
        <div className='container'>   
        <AddForm id ={currentId}/>
        </div>
        :(
        (modform == true)?
        <div className='container'>     
        <ModifyForm id = {selectedForm.id} product = {selectedForm} /> 
        </div>
        :(
        (select == true)?
        <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {selectProd}  
          </Grid>
          <br/>
          <button onClick={handleAdding} className="f6 link dim ph3 pv2 mb2 dib white w-100 h-100 mw5 bg-dark-blue">add Product</button>
       </Box>
        :(
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               {categoriesList}
           </Grid>
       </Box>
        )
        )
        )
    

        /*
        (addForm == true)?
        <div className='container'>   
        <AddForm/>
        </div>
        :(
        (modform == true)?
        <div className='container'>     
        <ModifyForm id = {selectedForm}/> 
        </div>
        :(
        <div className='container'>
        {categoriesList}
        <button onClick={handleAdding} className="f6 link dim ph3 pv2 mb2 dib white w-100 h-100 mw5 bg-dark-blue">add category</button>
        </div>
        )
        )
        */
    )
}


/*
import React from 'react';
import { useState } from "react";

import "./productList.css";
export default function ProductList() {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () =>  {
        products.push(
            {
            name: name,
            price: price,
            quantity: quantity,
            description: description
            }
        )
      

    }

    const handleForm = () => {
       let form = document.querySelector(".shut");
       form.style.display = "block";
    }
    const deleteProduct = (product) => (event) => {
        products = products.filter(element =>element != product)
        products.forEach(pruduct => console.log(pruduct))
    }
    let products = [
        {
            name: "pc1",
            price: "14554",
            quantity: 200,
            description: "This is a product"
        },
        {
            name: "pc2",
            price: "14554",
            quantity: 200,
            description: "This is a product"
        },
        {
            name: "pc3",
            price: "14554",
            quantity: 200,
            description: "This is a product"
        },
        {
            name: "pc4",
            price: "14554",
            quantity: 200,
            description: "This is a product"
        },
        {
            name: "pc5",
            price: "14554",
            quantity: 200,
            description: "This is a product "
        },
    ];
    var productsList = products.map(function(element, index) {
        return (
            <article key ={index} className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src= {element.img} className="db w-100 br2 br--top"/>
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0">{element.name}</h1>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f5 mv0">{element.price}</h2>
                    </div>
                    </div>
                    <p className="f6 lh-copy measure mt2 mid-gray">
                    {element.description}
                    </p>
                    <p className="f6 lh-copy measure mt2 mid-gray">
                    {element.quantity}
                    </p>
                </div>
                <a onClick={deleteProduct(element)} className="f6 link dim ph3 pv2 mb2 dib white  bg-dark-blue" href="#0">delete</a>
                <a  className="f6 link dim ph3 pv2 mb2 dib white  bg-dark-blue" href="#0">Modify</a>

  
            </article>

        )
    })   
    return (
    <div className='container'>
        {productsList}
       
    <button onClick={handleForm} className="f6 link dim ph3 pv2 mb2 dib white w-100 h-100 bg-dark-blue">add Product</button>
    <form onSubmit={handleSubmit}  className="shut pa4 black-80">
            <div className="measure ">
                <label for="name" className="f6 b db mb2">Name </label>
                <input id="name"   onChange={(e) => setName(e.target.value)} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="name" className="f6 b db mb2">Price </label>
                <input id="name"   onChange={(e) => setPrice(e.target.value)} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="name" className="f6 b db mb2">Description </label>
                <input id="name"   onChange={(e) => setDescription(e.target.value)} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="name" className="f6 b db mb2">Quantity </label>
                <input id="name"  onChange={(e) => setQuantity(e.target.value)}className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <button  className="f6 link dim ph3 pv2 mb2 dib white w-100 h-100 bg-dark-blue">submit</button>
            </div>
        </form>
    </div>
    )
    
}
*/