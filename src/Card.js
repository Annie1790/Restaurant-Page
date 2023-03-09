const Card = ({ className, src, header, paragraph }) => {
    return (
        <div className={className}>
            <img src={src} className='home-page-pictures' alt="card"></img>
            <div className='text-holder'>
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    )
};

export default Card;