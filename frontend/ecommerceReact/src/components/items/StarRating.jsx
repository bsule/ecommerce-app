import Star from "./Star";

const StarRating = ({ rating, total_reviews }) => {

    const calculatePercentage = (index) => {
        const fullStars = Math.floor(rating);
        const isCurrentStar = index === fullStars;
        const hasFraction = rating % 1 !== 0;
        return isCurrentStar && hasFraction ? (rating % 1) * 100 : index < fullStars ? 100 : 0;
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => (
                <span key={index} className='relative inline-block'>
                    <Star filled={index < rating} percentage={calculatePercentage(index)}/>
                    <div className='absolute top-0 left-0 w-full flex'>
                        {[...Array(10)].map((_, fractionIndex) => (
                            <div key={fractionIndex} className='flex-1 h-full'/>
                        ))}
                    </div>
                </span>
            ))}
            <span className='ml-2 text-sm text-gray-500	'>{ total_reviews }</span>
        </div>
    );
};

export default StarRating;