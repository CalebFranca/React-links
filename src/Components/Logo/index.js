import {Link} from 'react-router-dom'
import './Logo.css'

export function Logo(){
    return (
      <Link to="/">
        <h1 className="logo">
          dev<span className="logo-text">Link</span>
        </h1>
      </Link>
    );   
}