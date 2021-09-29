import React from 'react';
import { NavBar, Footer, CartItemCard } from '../Components';
import { useGlobal } from '../Context';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import './CartPage.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        height: '40vh',
        marginTop: 'auto',
    },
    container: {
        alignSelf: 'center',
        width: '90%',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10rem',
    },
    items: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    box: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    empty: {
        color: 'wheat',
        fontSize: '4rem',
        fontWeight: '300',
        letterSpacing: '10px',
    },
});

function CartPage() {
    const classes = useStyles();
    const { cartItems } = useGlobal();

    return (
        <div className={classes.root}>
            <NavBar />
            <div className='hero-cart'>
                <h1>Checkout</h1>
            </div>

            <div className={classes.container}>
                <div className={classes.items}>
                    {cartItems.length === 0 ? (
                        <h1 className={classes.empty}>Your cart is empty!</h1>
                    ) : (
                        <div>
                            {cartItems.map((cur, i) => (
                                <CartItemCard key={i} {...cur} />
                            ))}
                        </div>
                    )}
                </div>
                <div className={classes.box}></div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;
