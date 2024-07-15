import { useLoaderData, Link } from 'react-router-dom'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { MdViewList } from "react-icons/md";
import { MdGridView } from "react-icons/md";



// import { useState } from 'react';

const AllBooks = () => {



    const [view, setView] = useState();

    const handleViewTrue = () => {
        setView(true)
    }
    const handleViewFalse = () => {
        setView(false)
    }

    console.log(view);

    const books = useLoaderData();
console.log(books);


    return (
        <div>


            {
                view === false ?
                    <div>
                        <button className='btn ' onClick={handleViewTrue}><MdViewList /></button>
                        <div className=''>
                            {
                                books.map(book => (


                                    <div key={book._id} className="grid grid-cols-3 card w-2/3 my-4 glass">
                                        <figure><img className=' w-60 h-40' src={book.image} alt="book" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{book.name}</h2>
                                            <p>{book.author}</p>
                                            <p>{book.category}</p>
                                            <Rating style={{ maxWidth: 150 }} value={book.rating} />
                                            <p>{book.rating}</p>
                                            <div className="card-actions justify-end">

                                                <Link to={`update-book/${book._id}`}>

                                                    <button className="btn btn-primary">Update</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>

                    </div>



                    :
                    <div>
                        <button className='btn ' onClick={handleViewFalse}><MdGridView /></button>

                        <div className='grid grid-cols-3'>
                            {
                                books.map(book => (


                                    <div key={book._id} className=" card w-2/3 my-4 glass">
                                        <figure><img className=' w-40 h-60' src={book.image} alt="book" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{book.name}</h2>
                                            <p><b>{book.author}</b></p>
                                            <p><b>Category:</b>{book.category}</p>
                                            <Rating style={{ maxWidth: 150 }} value={book.rating} />
                                            <div className="card-actions justify-end">

                                                <Link to={`update-book/${book._id}`}>

                                                    <button className="btn">Update</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                    
                    
                    }

        </div>
    );
};

export default AllBooks;