import './error.css'
import {Logo} from '../../Components/Logo'

import {Link} from 'react-router-dom'

export default function Error(){
    return(
        <div className='error'>
            <Logo />
            <h1>página não encontrada</h1>
            <p>page not found!!</p>

            <Link className='link' to="/">
               voltar para a home.
            </Link>
           
        </div>
    )
}