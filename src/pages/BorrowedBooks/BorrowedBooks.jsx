
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

const BorrowedBooks = () => {
    const books = useLoaderData();


    console.log(books.author);
    const { user } = useContext(AuthContext)
    const [borrow, setBorrow] = useState([])
    console.log('email:', user?.email);

    const url = `http://localhost:3000/borrowedBooks?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBorrow(data)
            })
    }, [url])
    return (
        <div>

            <h2> {borrow.length}</h2>
            {
                borrow
                // .filter(id => id?._id === id?._id)
                .map(b =>
                (
                    <div key={b._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={b.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{b.name}</h2>
                                <p>{b.category}</p>
                                <p>Borrowed Date: {b.currentDate}</p>
                                <p>Return Date: {b.bDate}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Return</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }

        </div>
    );
};

export default BorrowedBooks;