import { LiaStarSolid } from "react-icons/lia";

const RatingCard = ({ rating, reviews }) => {
    return (
        <div className="w-full border border-gray-700 rounded-lg p-4 mt-4 space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-300">
                    Rating: <span className="text-white font-semibold">{rating}</span>
                </p>
                <button className="px-4 py-2 text-sm bg-purple-500 rounded-md">
                    Rate Product
                </button>
            </div>


            {/* Carousel */}
            <div className="carousel w-full">
                {reviews?.map((review, idx) => (
                    <div
                        key={idx}
                        id={`review${idx}`}
                        className="carousel-item relative w-full flex items-center"
                    >
                        {/* Left Arrow */}
                        <a
                            href={`#review${idx === 0 ? reviews.length - 1 : idx - 1}`}
                            className="btn btn-circle btn-sm mr-3"
                        >
                            ❮
                        </a>

                        {/* Review Card */}
                        <div className="flex-1 border border-gray-700 rounded-lg p-4 space-y-3">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <p className="text-sm font-medium">
                                        {review.reviewerName}
                                    </p>
                                </div>

                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(review.rating || 5)].map((_, i) => (
                                        <LiaStarSolid key={i} />
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-gray-300">
                                {review.comment}
                            </p>

                            <p className="text-right text-xs text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Right Arrow */}
                        <a
                            href={`#review${idx === reviews.length - 1 ? 0 : idx + 1}`}
                            className="btn btn-circle btn-sm ml-3"
                        >
                            ❯
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingCard;
