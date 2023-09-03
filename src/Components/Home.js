import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
       <section className="firstSection">
            <div className="leftSection">
                  HY My Name is<br/> 
                 <span class="purpul">Neha Negi</span>
                 <div>And i am a passionate </div>
                 <span id="element"> Web Developer</span>
                 <div class="buttons">
                  <Link to="https://github.com/Nehanegi16">
                    <button class="btn"> Visit Github</button>
                    </Link>

                </div>
            </div>
            <div class="rightSection">
                <img className="img" src='./img/pg2.png' alt="img"/>
            </div>

        </section>

        <footer>
        <div class="footer">
            <div class="footer-first">
                <h3>Neha's Developer Portfolio</h3>
            </div>
           </div>
        <div class="footer-rights">
            Copywrite &#169; WWW.nehanegiportfolio.com |All right reserved
        </div>
    </footer>
    </div>
    
  )
}

export default Home