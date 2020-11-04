import './Frontpage.scss'
import coding from '../../resources/coding.svg'
import security from '../../resources/secure.svg'
import avatar from '../../resources/avatar.png'

function Frontpage(props) {

    return (
        <div className="frontpage" id="frontpage">
            <div>
                <img src={avatar} className="avatar" alt=""/>

            </div>
            <h1 className="title">Hi, I'm Alexander!</h1>
            <h1 className="subtitle">Software Development & Cyber Security are my fortes</h1>
            <div className="skills">
                <img src={coding} className="coding-img" alt=""/>
                <img src={security} className="security-img" alt=""/>
            </div>
        </div>
    )
}

export default Frontpage;