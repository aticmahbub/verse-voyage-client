import { useLoaderData, Link } from 'react-router-dom'
import './styles.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import { useState } from 'react';

const Thriller = () => {



    // const [iRating, setRating] = useState(0) // Initial value

    const catData = useLoaderData();
    console.log(catData);






    return (
        <div>

            {/* <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} /> */}

            {/* head */}


            {/* <thead>
                        <tr>
                            <th>Action</th>
                            <th>Name:</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                        </tr>
                    </thead> */}

            {
                catData
                    .filter(id => id.category === "Thriller")
                    .map(filteredBooks => (<div key={filteredBooks._id}>
                        {/* <h2>{filteredBooks.name}</h2> */}



                        <div className="">
                            <table className=" ">




                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td><div className="avatar">
                                            <div className="  w-24 h-24">
                                            <img src={filteredBooks?.image.includes("http") ? filteredBooks?.image : 'https://i.ibb.co/YDK4KwQ/photo-1543497415-75c0a27177c0-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg'} />
                                            </div>
                                        </div></td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{filteredBooks?.name}</div>
                                                <div className="text-sm opacity-50">{filteredBooks?.author}</div>
                                            </div>

                                        </td>
                                        <td>{filteredBooks?.category}</td>
                                        <td><Rating style={{ maxWidth: 150 }} value={filteredBooks?.rating} />
                                        </td>
                                        <td>
                                        <Link to={`/book/${filteredBooks?._id}`}>
                                        <button className='btn btn-primary'>Details</button>
                                        </Link>

                                        </td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                    </div>))}


        </div>
    );
};

export default Thriller;