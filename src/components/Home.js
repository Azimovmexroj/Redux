import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
 const Home = () => {
    const dispatch =useDispatch()
    const deleteContact =(id) =>{

    dispatch({type:"DELETE_CONTACT",payload:id})
        toast.success("Contactdan  O'chirildi Muvaffaqiyat!!")
    } 
    const contacts = useSelector(state => state);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex justify-content-end">
                    <Link to="/add" className="btn btn-outline-primary">
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-10 d-flex justify-content-center ">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {contacts.map((contact,id) =>(
                                <tr key={id}>
                                    <td>{id+1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`}
                                         className="btn btn-sm btn-primary">
                                            Edit
                                        </Link>
                                        <button type="button" 
                                        className="btn btn-sm  btn-danger mx-2" 
                                        onClick={()=>deleteContact(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
