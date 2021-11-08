import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import nextId from 'react-id-generator';
import { useHistory } from 'react-router';
     const AddContact = () => {
     const htmlId = nextId()
     const [name, setName] = useState();
     const [email, setEmai] = useState();
     const [number, setNumber] = useState();
     const contacts = useSelector((state )=>state);
     const dispatch = useDispatch();
     const history = useHistory();
     const handleSubmit = (e) =>{
         e.preventDefault();
         const chekEmail = contacts.find(contact => contact.email === email && contact );
         const chekName = contacts.find(contact => contact.name === name && contact );
         const chekNumber = contacts.find(contact => contact.number === number && contact);

         if(!email||!number||!name){
             return toast.warning("Iltimos hommasi to'ldiring 😎");
         }
         
         if(chekEmail) {
            return toast.error("Bu email ishlatilgan 🤯");
        }

        if(chekNumber){
             return toast.error("Bu number ishlatilgan 🤯");
        }

        if(chekName){
            return toast.error("Bu name ishlatilgan 🤯");
       }
       const date =  {
            id: contacts[contacts.length -1].id +1,
            name,
            email,
            number
       }
       dispatch({type: 'ADD_CONTACT',payload: date})
       toast.success("Odam Qo'shish Muvaffaqiyat Yakulandi!! 👌");
       history.push('/')
     }
    return ( 
        <div className="container">
            <div className="row">
            <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">
                    Add Contact
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
                            onChange={e =>setEmai(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <input 
                            type="number" 
                            placeholder="Number" 
                            className="form-control" 
                            value={number}
                            onChange={e=> setNumber(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                            type="submit" 
                            value="Add Person" 
                            className="btn btn-block btn-primary mt-3" 
                            size="lg"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default AddContact