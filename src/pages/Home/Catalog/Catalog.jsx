import { Link } from 'react-router-dom'

const Catalog = () => {
    return (
        <div className="items-center justify-center mx-5 gap-6 grid grid-cols-2 mt-10 mb-10"> 
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/GPWmVf5/photo-1599495054627-35ad07218a46-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Novel</h2>
                    <p>Immerse yourself in the rich tapestry of human experience with our diverse collection of novels. From timeless classics to contemporary masterpieces, there is a story waiting for every reader.</p>
                    <div className="card-actions justify-end">
                    <Link to='/novel'><button className="btn btn-primary">View Category</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/gS5m1wC/photo-1554357395-dbdc356ca5da-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Science Fiction</h2>
                    <p>Unleash your inner explorer and venture into the unknown realms of science fiction. From epic space operas to dystopian futures, our collection offers thrilling adventures and thought-provoking speculations about the universe</p>
                    <div className="card-actions justify-end">
                    <Link to='/science-fiction'><button className="btn btn-primary">View Category</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/cL6XB6s/photo-1535905557558-afc4877a26fc-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fantasy</h2>
                    <p>Step into enchanted worlds of magic, myth, and legend with our fantasy collection. Encounter epic quests, mythical creatures, and realms where anything is possible. Let your imagination soar.</p>
                    <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                    <Link to='/fantasy'><button className="btn btn-primary">View Category</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/BgkP78G/photo-1647530101594-e800c025f798-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Thriller</h2>
                    <p>Prepare for pulse-pounding suspense and adrenaline-fueled thrills in our thriller section. From gripping mysteries to heart-stopping suspense, our collection will keep you on the edge of your seat until the very last page.</p>
                    <div className="card-actions justify-end">
                    <Link to='/thriller'><button className="btn btn-primary">View Category</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;