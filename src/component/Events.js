function Football() {
    const shoot = (player)=> {
        alert('Good Shoot!');
        alert(player);
    }

    return (
        <div>
            <button onClick={()=>shoot ("Ronaldo")}>Shoot</button>
        </div>
    );


}


export default Football;