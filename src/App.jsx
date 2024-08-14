import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'

function App() {
    return (
        <>
            <Navbar />
            <div className="card-cnt">
                <Card title="Card 1" description="This is card 1 description." />
                <Card title="Card 2" description="This is card 2 description." />
                <Card title="Card 3" description="This is card 3 description." />
                <Card title="Card 4" description="This is card 4 description." />
            </div>
        </>
    )
}

export default App
