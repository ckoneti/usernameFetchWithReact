export default function UserInfo({avatar, login,url}) {
    return (
        <div className={"userInfo"}>
            <img src = {avatar} width={"70"} height={"70"} />
            <p>Login Name:{login}</p>
            <a href={url}>{login}</a>
        </div>
    )
}