import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';
import { Language } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Header(){
    return(
        <div className="header">
            <Link to='/'>
                <img 
                    className='header-icon'
                    src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                    alt='logo'
                    />
            </Link>

            <div className="header-center">
                <input type="text" />
                <SearchIcon/>
            </div>

            <div className="header-right">
                <p>become a host</p>
                <Language/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>

        </div>
    );
}

export default Header;