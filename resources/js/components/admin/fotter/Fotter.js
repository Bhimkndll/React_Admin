import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
const Fotter=()=>{
	const [picture, setPicture] = React.useState('');
	const [form, setForm] = React.useState({mailus:'',callus:'',image:'',subscribe:'',shortdesc:'',findus:'',id:''});
	const [load, setLoad] = React.useState({load:true});

useEffect(() => {
  let isActive = true;

        axios.get("/api/fotter/data")


.then(res=>{
      if (isActive) {

  setForm({id:res.data.fotter.id,callus:res.data.fotter.callus,
mailus:res.data.fotter.mailus,
shortdesc:res.data.fotter.shortdesc,
image:res.data.fotter.image,
findus:res.data.fotter.findus,
subscribe:res.data.fotter.subscribe,

  });
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);

const upload=event=>{
setPicture(event.target.files[0])
 }

const formik = useFormik({
	    enableReinitialize: true,

     initialValues:
 {
callus:form.callus,
mailus:form.mailus,
shortdesc:form.shortdesc,
subscribe:form.subscribe,
findus:form.findus,

     },







     validationSchema: Yup.object({
       callus: Yup.string()
                  .required('Required')
         .max(14, 'Must be 50 characters or less'),
       mailus: Yup.string()
                .required('Required')
            .email('Invalid email address')
           .max(30, 'Must be 8 characters'),


shortdesc: Yup.string()
                  .required('Required')
         .max(100, 'Must be 50 characters or less'),
subscribe: Yup.string()
                  .required('Required')
         .max(55, 'Must be 50 characters or less'),
         findus: Yup.string()
                  .required('Required')
         .max(40, 'Must be 50 characters or less'),
     }),

     onSubmit: values => {

const fd = new FormData();
  fd.append('image', picture);
  fd.append('callus',values.callus);
  fd.append('mailus',values.mailus);
  fd.append('shortdesc',values.shortdesc);
  fd.append('subscribe',values.subscribe);
  fd.append('findus',values.findus);

     axios.defaults.withCredentials = true;
   axios.get('/sanctum/csrf-cookie').then(response => {


     const res =axios.post(`/api/fotter/${form.id}`,fd)
        .then(res=>{

         props.history.push('/admin/new');
          })
        .catch(error=>{
console.log(error.response);
 if (error.response.data.errors) {


    }
 if (error.response.data.message) {


        }



        });




});

     },
   });




return(

<>

<form action=""onSubmit={formik.handleSubmit}>
<>
  <div className="form-group">
    <label for="exampleInputEmail1">FindUS</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Findus" name="findus"
    onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={form.findus}

         value={formik.values.findus}
         />
           <p className="adjust text-danger"> {formik.touched.findus && formik.errors.findus ? (
         <div>{formik.errors.findus}</div>
       ) : null}
</p>

<div className="form-group">
    <label for="exampleInputEmail1">Mail US</label>
    <input type="text"name="mailus" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mail Us"
    onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.mailus}/>
    <p className="adjust text-danger"> {formik.touched.mailus && formik.errors.mailus ? (
         <div>{formik.errors.mailus}</div>
       ) : null}
</p>


  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Subscribe</label>
    <input type="text" className="form-control" name="subscribe" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="subscribe" onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.subscribe}/>
    <p className="adjust text-danger"> {formik.touched.subscribe && formik.errors.subscribe ? (
         <div>{formik.errors.subscribe}</div>
       ) : null}
</p>
  </div>


  <div className="form-group">
    <label for="exampleInputEmail1">Call US</label>
    <input type="text" className="form-control" name="callus" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.callus}/>
    <p className="adjust text-danger"> {formik.touched.callus && formik.errors.callus ? (
         <div>{formik.errors.callus}</div>
       ) : null}
</p>
  </div>





  <div className="form-group">
    <label for="exampleInputEmail1">Shortdesc</label>
    <input type="text" name="shortdesc"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Desc"onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.shortdesc}/>
   <p className="adjust text-danger"> {formik.touched.shortdesc && formik.errors.shortdesc ? (
         <div>{formik.errors.shortdesc}</div>
       ) : null}
</p>
  </div>

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
</div></div>




<input type="submit" className="btn btn-info" values="Submit"/>
</div>

</>
  </form>



</>



       );

}
export default Fotter;
