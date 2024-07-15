import { useContext } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from '../../provider/AuthProvider';

const AddBook = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    console.log(user, email);
    const handleAddBook = (e) => {
        e.preventDefault();

        const form = e.target

        const name = form.fName.value
        const image = form.fImage.value
        const author = form.fAuthor.value
        const category = form.fCategory.value
        const rating = parseInt(form.fRating.value)
        const quantity = parseInt(form.fQuantity.value)
        const short_description = form.fShortDesc.value
        const contents = form.fContents.value
        // const fIemail = user?.email



        const newBookData = {
            image,
            name,
            quantity,
            author,
            category,
            rating,
            short_description,
            contents,
            email
            // fIemail

        } 
        console.log(newBookData);

        fetch('http://localhost:3000/book-collection',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBookData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'Done!',
                text: `${name} added succesfully`,
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        })
    }
    return (
        <div>
            <h2>Add Book</h2>



            <form onSubmit={handleAddBook} >
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" className="grow " name='fName' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Image:
                    <input type="text" className="grow " name='fImage' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Quantity:
                    <input type="number" className="grow " name='fQuantity' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Author Name:
                    <input type="text" className="grow " name='fAuthor' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Category:
                    <input type="text" className="grow " name='fCategory' />
                </label>
                
                <label className="input input-bordered flex items-center gap-2">
                    Rating:
                    <input type="range" className=" " width='100px' id='points' min="1" max="5" name='fRating' />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Short Description:
                    <input type="text" className="grow " name='fShortDesc' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Contents:
                    <input type="text" className="grow " name='fContents' />
                </label>
                <button className='btn btn-primary'><input type="submit" value="Add" /></button>
            </form>
        </div>
    );
};

export default AddBook;