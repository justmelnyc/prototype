import {Outlet} from 'react-router-dom'
import {Header} from 'src/shared/components'

function App() {
    return (
        <div className="flex bg-amber-100">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default App