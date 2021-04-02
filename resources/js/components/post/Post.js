import React from 'react';
import {Link} from'react-router-dom';
import '../styles.css';
import Swal from 'sweetalert2';
import {useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import {useSortableData} from '../Sortt';
import Check from './Check';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Redirect } from "react-router-dom";
 import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {instance} from '.././toker'

import { Modal,Button} from 'react-bootstrap';
import Sort from '.././Sort';
import './postcontroll.css';

const Post = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [style, setStyle] = React.useState({style:''});

const [form, setForm] = React.useState({id:'',slug:'',category:'',description:'',heading:'',image:'',cateedit:''});
const [loading, setLoad] = React.useState({load:false});
const [description, setDesc] = React.useState({editorState:''});
const [tate, setState] = React.useState({categories:[],tags:[]});
const [posts, setPost] = React.useState({posts:''});
const [editpost, setEditpost] = React.useState({editpost:''});
const [update, setUpdate] = React.useState({update:true});
const [picture, setPicture] = React.useState('');
const [showd, setShowd] = React.useState({display:true});
const [hiding, setHide] = React.useState({hide:false});

const [forms, setTag] = React.useState({tag:[]});

const [err, setErrors] = React.useState({all:''});
const [vim,setBhim] = React.useState({herr:'',derr:'',ierr:'',serr:'',terr:''});
const [search, setSearch] = React.useState('');


const numbers = [40, 70, 80, 100, 20, 200, 0, 20, 10, 15, 10, 10, 100, 210, 110, 103, 102, 101, 10];

console.log(numbers.slice(-8, -2).reverse());

 const handlecheckd = ({ target }) => {
    const _id = parseInt(target.value,10);

    const index = forms.tag.find((t) => t.id === _id);
    let _form = null;

    if (index === undefined) _form = { tag: [...forms.tag, { id: _id }] };
    else _form = { tag: forms.tag.filter((t) => t.id !== _id) };

    setTag(_form);


console.log(form.tag);

  };


const Control=(id)=>{
  console.log(id);
let url = `/post/maincontent/${id}`
        instance.get(url).then(res =>{

        })
          .catch((error) => console.log(error.message));

};






 const  handlecheck = (event) => {
  console.log(event.target.value);

 let newArray=[...form.tag, event.target.value];
    if (form.tag.includes(event.target.value)) {
      newArray = newArray.filter(bhim => bhim !== event.target.value);
    }
setForm({...form,tag:newArray});
  }
const onEditorStateChange = (editorState) => {
    setDesc({
      editorState,
    });
  };

const upload=event=>{
setPicture(event.target.files[0])
 }
useEffect(() => {
  let isActive = true;


        instance.get("/post/create")
        .then(res=>{
      if (isActive) {
  setState({...tate,categories:res.data.categories,tags:res.data.tags});
  setPost({posts:res.data.posts});
  setForm({...form,title:'',category:res.data.categories[0].id});
  setLoad({load:true});
   console.log(posts);
   const hero = ["Batman", "Superman", "Hulk"]
const lastHero =_.takeRight(res.data.categories, 3);

console.log(lastHero);

}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);

const removeData = (id) => {
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {


if (result.isConfirmed) {
let url = `/post/destroy/${id}`

        instance.get(url).then(res =>{});

        instance.get("/post/index")
    .then(res=>{
  setPost({posts:res.data.posts});
});
Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
}
)}



  const handlecreate=(evt)=>{
  evt.preventDefault();
setHide({hide:false});
setShowd({display:true });
setErrors({all:'',errall:true});
setBhim({herr:'',derr:'',ierr:'',serr:'',terr:''});




const fd = new FormData();
  fd.append('image', picture);
  fd.append('heading',form.heading);
  fd.append('tags',form.tag);
  fd.append('category',form.category);
  fd.append('slug',form.slug);
  fd.append('description',description.editorState && draftToMarkdown(convertToRaw(description.editorState.getCurrentContent())));

instance.post('/post/store',fd)
  .then(res=>{


        instance.get("/post/index")
    .then(res=>{
  setPost({posts:res.data.posts});
});

setShow(false);
setForm({title:'',tag:'',heading:'',description:'',category:'',slug:''});
setShowd({display:false});


})
.catch(error=>{

 if (error.response) {
setShow(true);
      setErrors({all:error.response.data.errors});

    }

});


}
           const EditPost = (id) => {
setErrors({all:''});
setBhim({herr:'',derr:'',ierr:'',serr:'',terr:''});
            setShow(true);
            setHide({hide:false});
            setShowd({display:true});
       setUpdate({update:true});
       let url = `/post/edit/${id}`
        instance.get(url).then(res =>{
          console.log(res);
          setForm({title:'',id:res.data.posts[0].id,category:res.data.posts[0].category_id,description:res.data.posts[0].description,heading:res.data.posts[0].heading,slug:res.data.posts[0].slug,image:res.data.posts[0].image,cateedit:res.data.posts[0].category_id});
          setTag({tag:res.data.posts[0].tags});
          setHide({hide:true});
setDesc({editorState: EditorState.createWithContent(ContentState.createFromText(res.data.posts[0].description))});






        });



}

    const handleSubmit = (evt) => {
      console.log(form.checkedItems);
       evt.preventDefault();


    instance.post(`/post/save/${form.id}`,form)

     instance.get("/post")



.then(res=>{

  setState({bhim:res.data.categories});
  setLoad({load:'true'});
setForm({post:'',id:'',title:''});


});
 Swal.fire(
      'Update',
      'Your file has been Update.',
      'success'
    )
    }
    console.log(posts.posts);
  const { items, requestSort, sortConfig } = require('../Sortt.js').useSortableData(posts.posts);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const Show=()=>{
   setDesc({editorState: EditorState.createWithContent(ContentState.createFromText(""))});

    setHide({hide:false});
    setShow(true);
setErrors({all:''});
setBhim({herr:'',derr:'',ierr:'',serr:'',terr:''});
    setPicture('');
    setShowd({display:true});
    setForm({category:tate.categories[0].id,description:'',heading:'',tag:'',slug:'',title:''});

  }
const Switch=(id,pid)=>{
  console.log(id);
    console.log(pid);

 let url = `/post/switch/${id}/${pid}`
        instance.get(url).then(res =>{

        });
}

const Slider=(id)=>{

 let url = `/post/slider/${id}`
        instance.get(url).then(res =>{

        })
          .catch((error) => console.log(error.message));

}
const Carousel=(id)=>{

console.log(id);
 let url = `/post/carousel/${id}`
        instance.get(url).then(res =>{

        })
          .catch((error) => console.log(error.message));

}
const handleSave = (evt) => {
setErrors({all:'',errall:true});
setBhim({herr:'',derr:'',ierr:'',serr:'',terr:''});

let newArr = []

forms.tag.forEach((item)=> {

 newArr.push(item.id)

})
console.log( newArr);

  evt.preventDefault();
setHide({hide:true});
const fd = new FormData();
  fd.append('image', picture);
  fd.append('heading',form.heading);
  fd.append('tags',newArr);
  fd.append('category',form.category);
  fd.append('slug',form.slug);
  fd.append('description',description.editorState && draftToMarkdown(convertToRaw(description.editorState.getCurrentContent())));
  instance.post(`/post/save/${form.id}`,fd)
.then(res=>{
    setShow(false);

instance.get("/post/index")
.then(res=>{
  setPost({posts:res.data.posts});

setForm({title:'',id:'',tag:'',heading:'',description:'',category:'',slug:''});
setShowd({display:true });
});




})
.catch(error=>{
  setShow(true);
      setErrors({all:error.response.data.errors,errall:false});

  console.log(error.response.data.errors);
 if (error.response) {

    }

});
Swal.fire(
      'Update!',
      'Your file has been deleted.',
      'success'
    )

    }

if(err.all){
  {err.all.map(error=>{


  if(error.includes('image')){

  vim.ierr=error.toUpperCase();
}
  if(error.includes('heading')){

  vim.herr=error.toUpperCase();
}
if(error.includes('slug')){

  vim.serr=error.toUpperCase();
}
if(error.includes('description')){

  vim.derr=error.toUpperCase();
}
 if(error.includes('tag')){

  vim.terr=error.toUpperCase();
}


       })
}




  }



console.log(posts.posts);
console.log(items);
return (

    <>












<img src={require('../../Add.gif')}onClick={Show}  />




      <Modal
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      top
        show={show}
        onHide={handleClose}

      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>




   {showd.display==true&&

 <form onSubmit={handleSubmit}>


<div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Heading</label>
    <div className="col-sm-10">
      <input type="email"
                value={form.heading} onChange={handleChange}name="heading" className="form-control" id="inputstyle={style.style}Email3" placeholder="Email"/>
    </div>
    <p className="text-danger">{vim.herr}</p>
     </div>
 <input type="email"
                value={form.heading} sssname="heading" className="form-control" id="inputstyle={style.style}Email3" placeholder="Email"/>
<div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Images</label>
       <div className="col-sm-10">




    <input
        type="file"
        name="picture[]"
        label="Product Picture"
        onChange={upload}
        multiple
        style={{width:'71%'}}
        />
         {picture &&

      <p>picture type: {picture.type}<img className="rounded float-right"src={URL.createObjectURL(picture)} alt={picture.name} style={{width:'25%',height:'10%',marginTop:'-10%'}}/>
</p>

}

 <p className="text-danger">{vim.ierr}</p>
  </div>
</div>
<div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">slug</label>
    <div className="col-sm-10">
      <input type="email"name="slug"defaultValue={form.slug} onChange={handleChange}className="form-control" id="inputstyle={style.style}Email3" placeholder="Email"/>
    </div>
        <p className="text-danger">{vim.serr}</p>

  </div>






<div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
        TAG
      </label>
      <div className="col-sm-10">
        <div className="checkbox">
          {tate.tags.map(
            (tag) =>
              hiding.hide? (
                <label key={tag.id}>
                  <input
                    name="tag[]"
                    type="checkbox"
                    value={tag.id}
                    onChange={handlecheckd}
                    checked={
                      forms.tag.find((t) => t.id === tag.id) !== undefined
                    }
                  />



                  {tag.Tag_name}
                </label>
              ):




              <label key={tag.id}>
                  <input
                    name="tag[]"
                    type="checkbox"
                    value={tag.id}
                    onChange={handlecheck}

                  />
                  {tag.Tag_name}
                </label>
          )}
        </div>
      </div>
              <p className="text-danger">{vim.terr}</p>

    </div>




<div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Category</label>

    <select className="form-control"name="catestyle={style.style}gory"onChange={handleChange} id="exampleFormControlSelect1" name="category">
   <span></span>
         {tate.categories.map(category=>{
return(
      <option value={category.id} selected={form.cateedit==category.id?true:false}>{category.name}



      </option>
    );
    })
  }
      </select>

    </div>
    <div>
    <div className ="form-group">
<Editor editorState={description.editorState}  onEditorStateChange={onEditorStateChange}
 />

        <p className="text-danger">{vim.derr}</p>

  </div>
  </div>

      </form>
    }






























        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>  Close
          </Button>
        <Button variant="primary"onClick={hiding.hide?handleSave:handlecreate}>Save changes</Button>



        </Modal.Footer>
      </Modal>












             <div className="input-group"style={{width:'40%',float:'right'}}>
              <input type="text"  name='title'

                onChange={handleChange}
                value={form.title} className="form-control bg-light bstyle={style.style}order-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
<div className="table-responsive-xl">
<table className="table table-sm table table-bordered" id="myTable">
<caption>Products</caption>
      <thead>
        <tr>
      <th scope="col">
            <button
              type="button"
              onClick={() => requestSort('id')}
              className={getClassNamesFor('id')}
            >
              ID
            </button>
          </th>
      <th scope="col">
            <button
              type="button"
              onClick={() => requestSort('heading')}
              className={getClassNamesFor('heading')}
            >
              Heading


            </button>

          </th>
      <th scope="col">
          Picture
          </th>
     <th scope="col">
            Status
          </th>
           <th scope="col">
            Slug
          </th>
           <th scope="col">
            Category
          </th>
            <th scope="col">
           ControllSlider
          </th>

          <th scope="col">
            Actions
          </th>



        </tr>

      </thead>
      <tfoot>
    <tr><th>name</th><th>name</th><th>name</th><th>name</th><th>name</th></tr>
    </tfoot>

      <tbody>



{

        loading.load===true &&


          items.map(item => {
if((item.heading.toLowerCase().indexOf(form.title.toLowerCase() ) === -1 )&&(item.category.name.toLowerCase().indexOf(form.title.toLowerCase() ) === -1 ))
{

        return null
}


  return(
        <tr key={item.id}>
        <>
            <td>{item.id}
</td>
            <td>{item.heading}</td>
            <td style={{width:"7.5%"}}>
            <img className="bar-sm"src={process.env.MIX_URL+item.image} alt="pic error" style={{width:'70px',height:'35px'}}/>
            </td>


</>





<td style={{width:'20px'}}>


<button type="button" className={((item.status)==1)?"btn btn-sm btn-secondary btn-toggle focus active":"btn btn-sm btn-secondary btn-toggle"}   data-toggle="button" aria-pressed={((item.status)==1)?"true":"false"} autoComplete="off"onClick={() =>Switch(item.status,item.id)}>
<div className="handle"></div></button>

</td>


            <td>{item.heading}</td>







            <td><label>
<input type="checkbox" id="ossm" name="ossm" hidden defaultChecked={item.maincontent?true:false}onClick={()=>Control(item.id)}/>{item.category.name}<div id="never" style={{cursor:"pointer"}}></div></label>

</td>


<td style={{width:'20px'}}>
<div className="button-switch">
<input type="checkbox" id="switch-blue" className="switch" defaultChecked={item.carousel?true:false}onClick={()=>Carousel(item.id)}  />
  <p id="bhimkandel">Carousel</p>

</div><div className="button-switch">
  <input type="checkbox" id="switch-orange" className="switch" defaultChecked={item.slider?true:false}onClick={() =>Slider(item.id)} />

  <p id="bhimkandel">Slider</p>
</div></td>

<td><img data-toggle="modal" data-target="#exampleModalCenter"onClick={() =>EditPost(item.id)}src={require('../../edit.png')} />

  <img style={{marginLeft:'10%'}}src={require('../../Delete.gif')}onClick={() => removeData(item.id)}/></td>





  </tr>






        );
      })


      }




      </tbody>
    </table>
</div>
















   <div className="row">

    <div className="col-sm-2">
      <h6>Small</h6>
    </div>

    <div className="col-sm-5">

    </div>
    </div>


</>

  );





};
export default Post;
