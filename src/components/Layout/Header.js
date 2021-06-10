import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
   <header className ={classes.header}>
   <h1>ReactMeals</h1>
   <HeaderCartButton onClick={props.onShowCart} />
   </header>
   
   <div className ={classes['main-image']}>
   <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
   </div>
    </Fragment>
};

export default Header;