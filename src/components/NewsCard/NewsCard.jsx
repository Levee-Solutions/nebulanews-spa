function NewsCard() {
    return (
        <article id="article" className="bg-neutral-50 p-0 rounded-b-xl">
            <img src="/src/assets/images/stonks.png" alt="stonks!"/>
            <div className="p-4">
                <div className="flex flex-row justify-between">
                    <button className="w-fit h-5 px-2 bg-blue-200 rounded-full border-0 text-[12px] text-slate-700">
                        Politics
                    </button>
                    <button className="w-fit h-5 px-2 bg-green-200 rounded-full border-0 text-[12px] text-slate-700">
                        Economy
                    </button>
                    <button className="w-fit h-5 px-2 bg-red-200 rounded-full border-0 text-[12px] text-slate-700">
                        War in Ukraine
                    </button>
                    <button className="w-fit h-5 px-2 bg-slate-200 rounded-full border-0 text-[12px] text-slate-700">
                        +3
                    </button>
                </div>
                <p className="mt-3 mb-3 font-bold text-black">Stonks found!</p>
                <p className="text-xs text-black">
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
                    <button className="w-8 h-8 bg-slate-200 border-0">
                        <img src="src/assets/images/save_for_later.png" alt="save for later" className="w-4 mx-auto my-auto" />
                    </button>
                    <button className="w-8 h-8 bg-slate-200 border-0">
                        <img src="src/assets/images/heart.png" alt="mark as favorite" className="w-5 mx-auto my-auto" />
                    </button>
                    <button className="basis-2/3 bg-green-800 border-0 font-bold text-sm text-white">
                        Read more
                    </button>
                </div>
            </div>
        </article>
    );
}
export default NewsCard;