import './NewsCard.css'
function NewsCard() {
    return (
        <article id="article">
            <img src="/src/assets/images/stonks.png" alt="stonks!"/>
            <p className="news-card-title">Stonks found!</p>
            <p className="news-card-abstract">
                Nullam dui arcu, malesuada et sodales eu, efficitur
                vitae dolor. Sed ultricies dolor non ante vulputate
                hendrerit. Nullam dui arcu, malesuada et sodales eu, efficitur
                vitae dolor. Sed ultricies dolor non ante vulputate
                hendrerit.<br/><br/>

                Nullam dui arcu, malesuada et sodales eu, efficitur
                vitae dolor. Sed ultricies dolor non ante vulputate
                hendrerit.
            </p>
            <div className="flex flex-row justify-between mt-4">
                <button className="w-10 h-10">
                    <img src="src/assets/images/save_for_later.png" alt="save for later" className="w-5 mx-auto" />
                </button>
                <button className="w-10 h-10">
                    <img src="src/assets/images/heart.png" alt="mark as favorite" className="w-6 mx-auto" />
                </button>
                <button className="basis-2/3 w-10 h-10 bg-green-800">
                    Read more
                </button>
            </div>
        </article>
    );
}
export default NewsCard;