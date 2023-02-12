import {React} from "react";
import "./components/css/App.css"
import Header from "./components/Notes/Header"
import NoteParent from "./components/Notes/NoteParent";
function App() {
    return (
        <div className="main">
            <Header />
            <NoteParent />
        </div>
    )
}

export default App;