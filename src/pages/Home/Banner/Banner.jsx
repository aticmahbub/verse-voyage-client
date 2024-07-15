import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider';
const Banner = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HgJ5tHJ/premium-photo-1703701579660-8481915a7991-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                 
                        
               { 
               !user &&
               <div><Link to='/all-books'><button className="btn btn-primary">All Books</button></Link></div>}
                {
                    user &&
                    <div><Link to='/add-book'><button className="btn btn-primary">Add Book</button></Link></div>}

                    
                </div>
            </div>
        </div>
    );
};

export default Banner;