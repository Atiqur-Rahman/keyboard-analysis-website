import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('fakeReview.json')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <div className="flex mt-10">
                <div className="flex-1">
                    <div className="mx-20 mt-48">
                        <h1 className="text-black font-extrabold text-7xl">Your next keyboard</h1>
                        <h1 className="text-blue-800 font-extrabold text-7xl">Your best keyboard</h1>
                        <p className="py-5">Mechanical keyboards have an individual switch beneath each key, which makes this style of keyboard more durable, easier to repair, and more customizable than membrane, scissor, or butterfly keyboards. Mechanical switches come in three main varieties: linear, tactile, and clicky.</p>
                        <button className="bg-blue-300 p-3 mx-4 rounded">Live demo</button>
                    </div>
                </div>
                <div className="flex-initial">
                    <img className="rounded-3xl" style={{ width: '500px' }} src={require('../../images/keyboard1.jpg')} alt="" />
                </div>
            </div>

            {/* Customer Reviews */}
            <div>
                <h1 className="text-4xl font-bold flex justify-center mt-40 mb-16">Customer Reviews(3)</h1>
                {reviews.map((review) => (
                    <ReviewDetail key={review.id} review={review}></ReviewDetail>
                ))}
            </div>
        </div>
    );
};

export default Home;
