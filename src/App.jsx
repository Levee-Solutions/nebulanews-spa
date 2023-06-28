import NewsCard from "./components/NewsCard/NewsCard.jsx";
function App() {
    return (
        <>
            <main className="container">
                <header>
                    <hgroup>
                        <h1>Nebula News</h1>
                        <h2>The best news portal in the world</h2>
                    </hgroup>
                </header>
                <button>Refresh news</button>
                <div className="grid grid-cols-3 gap-3">
                    {[1,2,3,4,5,6].map(n => <NewsCard id={`${n}`}/>)}
                </div>
            </main>
        </>
    );
}

export default App;
