import './header.css';


export default function Header(){
    
    return(
        <header>
            <div class="avt">
                <img src="./images/avatar.jpg" alt=""></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/" class="active-page">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            RESUME
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <select>
                            <option value="vi">Tiếng Việt</option>
                            <option value="en">Tiếng Anh</option>
                        </select>
                    </li>
                    <li>
                        <i class="fa-solid fa-moon"></i>
                        <i class="fa-solid fa-sun"></i>
                    </li>
                </ul>
            </nav>
        </header>
    )
}