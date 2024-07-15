import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
const BookDetails = () => {

    const params = useParams();
    console.log(params);
    const [boi, setBoi] = useState()
   

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    console.log(user);
    const singleBookData = useLoaderData()
    const {
        name,
        image,
        author,
        category,
        quantity

    } = singleBookData;



    const handleBorrow = async e => {
        e.preventDefault()
        const form = e.target
        const bName = form.fName.value
        const email = form.fEmail.value
        const bDate = startDate.toLocaleDateString()

        const date = new Date()
        const currentDate = date.toLocaleDateString()
        console.log(currentDate);

        const borrowedData = {
            email,
            bDate,
            bookId: params.id,
            currentDate,
            category,
            image,
            name,
            quantity
        }
        console.log(borrowedData);
        console.log(params.id);
        console.log(email);



        try {
            const { data } = await axios.post('http://localhost:3000/borrow', borrowedData)
            console.log(data)

            let newQ = quantity-1 
            setBoi(newQ);
            Swal.fire({
                title: 'Done!',
                text: `${bName} Quantity: ${boi}`,
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        } catch (err) {
            console.log(err)
        }

        // try {
        //     const { data } = await axios.patch(`http://localhost:3000/borrowedBook/${params.id}`,
        //         quantity
        //     )
        //     console.log(data)
        //     // Swal.fire({
        //     //     title: 'Done!',
        //     //     text: `${bName} added to Borrow list`,
        //     //     icon: 'success',
        //     //     confirmButtonText: 'Okay'
        //     //   })
        // } catch (err) {
        //     console.log(err)
        // }

        
        
        
    }

    return (
        <div className="card lg:card-side bg-base-100 mt-20 mb-14  ml-14 mr-14 shadow-xl">
            <img className='w-1/2 rounded-lg' src={image.includes("http") ? image : "https://i.ibb.co/vhBSMKG/photo-1541963463532-d68292c34b19-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"} alt="Book Image" />
            <div className="card-body">
                <p>Quantity: {boi}</p>
                <h2 className="card-title">{name}</h2>
                <p>{author}</p>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Borrow</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Borrow books</p>

                        <form onSubmit={handleBorrow}>


                            <label className="input input-bordered flex items-center gap-2">
                                Name:
                                <input type="text" className="grow " defaultValue={user?.displayName} name='fName' />
                            </label>


                            <label className="input input-bordered flex items-center gap-2">
                                Email:
                                <input type="email" className="grow " defaultValue={user?.email} name='fEmail' />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                Return date:
                                <DatePicker className='grow' selected={startDate} onChange={(date) => setStartDate(date)} />

                            </label>
                            <input className='btn btn-active' type="submit" value="Borrow" />
                        </form>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>

                    </form>
                </dialog>

            </div>



        </div>
    );
};

export default BookDetails;