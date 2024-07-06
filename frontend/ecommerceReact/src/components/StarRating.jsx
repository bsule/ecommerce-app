import Star from './Star';

const StarRating = ({ rating }) => {

    const calculatePercentage = (index) => {
        const fullStars = Math.floor(rating);
        const isCurrentStar = index === fullStars;
        const hasFraction = rating % 1 !== 0;
        return isCurrentStar && hasFraction ? (rating % 1) * 100 : index < fullStars ? 100 : 0;
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => (
                <span key={index} style={{ position: 'relative', display: 'inline-block' }}>
                <Star filled={index < rating} percentage={calculatePercentage(index)}/>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex' }}>
                    {[...Array(10)].map((_, fractionIndex) => (
                    <div key={fractionIndex} style={{ flex: 1, height: '100%' }}/>
                    ))}
                </div>
                </span>
            ))}
            {/* <p>{rating.toFixed(1)} of {5} stars</p> */}
        </div>
    );
};

export default StarRating;
