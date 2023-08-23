import "./style.css"

const Pictures =({data}) => {

    return(
        <div className="pictures">
            {data.map((image) => {
                return(
                    <div key={image.id} style={{
                        backgroundImage: `url(https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg)`,
                        width: "300px",
                        height: "200px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                    </div>
                )
            })}
        </div>
    )
}

export default Pictures