import React from 'react'
import {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams,useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
 const EditContact = () => {
    const [name, setName] = useState('');
    const [email, setEmai] = useState('');
    const [number, setNumber] = useState('');
     const {id} = useParams();
     const contacts = useSelector(state =>state);
     const dispatch = useDispatch();
     const history = useHistory();
     const currentContact = contacts.find(contact =>contact.id === parseInt(id));

     useEffect(()=>{
         if(currentContact){
             setName(currentContact.name);
             setNumber(currentContact.number);
             setEmai(currentContact.email)
         }
     },[currentContact])

     const handleSubmit = (e) =>{
        e.preventDefault();
        const chekEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email );
        const chekName = contacts.find(contact => contact.id !== parseInt(id) && contact.number ===number);
        const chekNumber = contacts.find(contact => contact.number === number && contact);

        if(!email||!number||!name){
            return toast.warning("Iltimos hommasi to'ldiring");
        }
        
        if(chekEmail) {
           return toast.error("Bu email ishlatilgan  🤯");
       }

       if(chekNumber){
            return toast.error("Bu number ishlatilgan  🤯");
       }

       if(chekName){
           return toast.error("Bu name ishlatilgan 🤯");
      }
      const date =  {
           id:parseInt(id),
           name,
           email,
           number
      }
      dispatch({type: 'UPDATE_CONTACT',payload: date})
      toast.success("Odam Qo'shish Muvaffaqiyat Yakulandi!! 👌");
      history.push('/')
    }
    return (
        <div className="container">
            {currentContact ?(
                <>
                 <div className="row">
        <div className="container">
        <div className="row">
            <h1 className="display-3 text-center">
                Edit Person{id}
            </h1>
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                        type="text" 
                        placeholder="Name" 
                        className="form-control" 
                        value={name}
                        onChange={e =>setName(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <input 
                        type="email" 
                        placeholder="Email" 
                        className="form-control my-3"
                        value={email}
                        onChange={e =>setEmai(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <input 
                        type="number" 
                        placeholder="Number" 
                        className="form-control"
                        value={number}
                        onChange={e =>setNumber(e.target.value)}/>
                    </div>

                    <div className="d-grid gap-2">
                        <input type="submit"
                         className="btn btn-block btn-primary mt-3"
                         size="lg"
                         value="Update Person"/>
                        <Link to="/"
                        className="btn btn-danger">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
                </>
            ):(
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    Bu Odamning id{`.${id}.`} topilmadi
                    <button type="button" className="btn-close" date-bs-dismiss="alert" aria-lable="Close"></button>
                </div>
               
            )}
       
    </div>
    )
}

export default EditContact