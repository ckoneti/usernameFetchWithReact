import './index.css';
import {useState} from "react";
import UserInfo from '../src/UserInfo'

function App() {
    const [username, setUserName] = useState('')
    const [profile, setProfile] = useState([])
    const API_URL = "https://api.github.com";

    const handleProfile = async (e) => {
        try {
            e.preventDefault();
            const result = await fetch(`${API_URL}/search/users?q=${username}`);
            const res = await result.json();
            setProfile(res.items)
        } catch (e) {
            console.log(`error fetching the data`, e)
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        setProfile([]);
        setUserName('');
    }
    return (
        <>
            <form onSubmit={handleProfile}>
                <div className="App" style={{textAlign: "center"}}>
                    <h2 style={{textAlign: "center"}}>GITHUB USERNAME PROFILE INFO</h2>
                    <br></br>
                    <br></br>
                    <label id='username'>UserName:
                        <input type="text" id="usernameBox" name="usernameBox" value={username}
    onChange={(e) => setUserName(e.target.value)} required/>
                    </label>
                    <button id="search">SEARCH</button>
                    <button id="reset" onClick={handleReset}>RESET</button>
                </div>
                <br></br>
                <div>
                    { profile && profile.map((p) =>
                        <UserInfo key={p.id}
                                  avatar={p.avatar_url}
                                  login={p.login}
                                  url={p.url}/>
                    )}
                </div>
            </form>
        </>
    );
}

export default App;
