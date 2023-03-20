import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className="text-center text-lg font-semibold mt-8">Customer Reviews</h1>

            {reviews.map((review) => (
                <div className="mx-auto p-3 w-1/2 rounded-2xl border-8 border-slate-400 mt-4">
                    <div className="flex items-center">
                        <img style={{ width: '40px' }} src={review.img} alt="" />
                        <h1 className="text-2xl font-medium mx-2">{review.name}</h1>
                    </div>
                    <div>
                        <p>
                            <small>
                                Ratings: <span className="text-amber-500 font-medium">{review.ratings} stars</span>
                            </small>
                        </p>
                        <p className="mt-1">{review.comments}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;
