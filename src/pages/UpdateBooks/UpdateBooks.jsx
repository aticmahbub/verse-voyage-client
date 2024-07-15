// import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { AuthContext } from '../../provider/AuthProvider';
const UpdateBooks = () => {
    const updateSingleBook = useLoaderData();
    // const { user } = useContext(AuthContext)
    
    const {
        _id,
        name,
        image,
        author,
        category,
        rating }
        
        = updateSingleBook;
        





    const handleUpdateBook = (e) => {
        e.preventDefault();

        const form = e.target

        const name = form.fName.value
        const image = form.fImage.value
        const author = form.fAuthor.value
        const category = form.fCategory.value
        const rating = parseInt(form.fRating.value)
        // const fIemail = user?.email



        const updatedBookData = {
            name,
            image,
            author,
            category,
            rating,
            // fIemail

        } 
        console.log(updatedBookData);

        fetch(`http://localhost:3000/update-book/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBookData)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Done!',
                text: `${name} updated successfully`,
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        })
    }

    return (
        <div>
            <h2>Update book </h2>



            <form onSubmit={handleUpdateBook} >
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" className="grow " defaultValue={name} name='fName' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Image:
                    <input type="text" className="grow " defaultValue={image} name='fImage' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Author Name:
                    <input type="text" className="grow " defaultValue={author} name='fAuthor' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Category:
                    <input type="text" className="grow " defaultValue={category} name='fCategory' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Rating:
                    <input type="range" className=" " width='100px' id='points' min="1" max="5" defaultValue={rating} name='fRating' />
                </label>
                <button className='btn btn-primary'><input type="submit" value="Update" /></button>
            </form>
        </div>
    );
};

export default UpdateBooks;