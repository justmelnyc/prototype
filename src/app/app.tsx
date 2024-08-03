import {Outlet} from 'react-router-dom'
import {Footer, Header} from 'src/shared/components'

function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='flex-grow container mx-auto px-4 py-8'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App