import React from 'react';

const ReviewDetail = (props) => {
    const { name, img, ratings, comments } = props.review;
    // console.log({ name }, ratings);
    return (
        <div className="mx-auto p-3 w-1/3 rounded-2xl border-8 border-slate-400">
            <div className="flex items-center">
                <img style={{ width: '40px' }} src={img} alt="" />
                <h1 className="text-2xl font-medium mx-2">{name}</h1>
            </div>
            <div>
                <p>
                    <small>
                        Ratings: <span className="text-amber-500 font-medium">{ratings} stars</span>
                    </small>
                </p>
                <p className="mt-1">{comments}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;
