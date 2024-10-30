import profilePic from './assets/inosuke.jpg';
function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt=""></img>
            <h2 className="card-title">Chirag Shahi</h2>
            <p className="card-text" > I am learning in Panacea.</p>
        </div>
    );
}

export default Card