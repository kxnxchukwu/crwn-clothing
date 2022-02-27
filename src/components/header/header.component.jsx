import React from "react";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCardHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
    <LogoContainer to="/">
        <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer className="options">
        <OptionLink to="/shop">
            SHOP
        </OptionLink>
        <OptionLink to="/contact">
            CONTACT
        </OptionLink>
        {
            currentUser ?
            (<OptionLink as="div" onClick={signOutStart}>
                SIGN OUT
            </OptionLink>)
            :
            <OptionLink to="signin">SIGN IN</OptionLink>
        }
        <CartIcon/>
    </OptionsContainer>
    {
        hidden ? null : <CartDropdown/>
    }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);