import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const objReq = [
    { id: 1, foodName: 'Pavbhaji', price: '$300' },
    { id: 2, foodName: 'Bhaji', price: '$400' },
    { id: 3, foodName: 'Vadapav', price: '$700' },
    { id: 4, foodName: 'samosa', price: '$200' },
    { id: 5, foodName: 'panner', price: '$100' },
    { id: 6, foodName: 'Pavbhaji', price: '$900' },
    { id: 7, foodName: 'Shahi', price: '$1900' }

]

const RestaurantCard = ({ id, name, price }) => {
    return (

        <div className='cards' style={{
            padding: '20px',
            backgroundColor: 'silver',
            margin: '10px',
            borderRadius: '10px'
        }}>
            <img src='https://c4.wallpaperflare.com/wallpaper/728/259/631/spices-pepper-food-spoons-wallpaper-preview.jpg' style={{ width: '100%', maxWidth: '100%' }} />
            <br />
            <h2>{id}: {name}</h2>
            <h4>{price}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search' style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                <input type='text' className='inputBox' style={{ marginRight: '10px', padding: '5px' }} />
                <button type='submit' style={{ padding: '8px', backgroundColor: 'silver', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
            </div>

            <div className='cardsData' style={{ display: 'flex', margin: '8px', padding: '10px' }}>
                {
                    objReq.map((res) => <RestaurantCard name={res.foodName} price={res.price} key={res.id} id={res.id} />)
                }
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="container">
            <div className="navbar">
                <ul className="left-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="right-menu">
                    <li><img src='https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg' alt="Logo" width={'50px'} /></li>
                </ul>
            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('change'));
root.render(<AppLayout />);
