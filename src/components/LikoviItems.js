import React from 'react'
import AddFavourite from './AddFavourite';

const LikoviItems = ({ item }) => {
  const favorite = (item) => {
    let data = JSON.parse(localStorage.getItem("favorites"));
    data.push(item);
    localStorage.setItem("favorites", JSON.stringify(data));
  };


    return (
        <div className='content'>
            <div className='content-inner'>
                <div className='content-front'>
                    <img src={item.thumbnail.path + "/portrait_fantastic.jpg"} alt='' />
                </div>
            <div className='content-back'>
                <ul>
                    <li>
                       <strong>Ime:</strong> {item.name}
                    </li>
                    <li>
                        <strong>Opis:</strong> {item.description}
                    </li>
                    <li>
                        <button type="button" className="button" onClick={() => favorite(item)}>
                        <AddFavourite/>
                        </button>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default LikoviItems