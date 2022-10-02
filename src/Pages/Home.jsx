import React from 'react'
import '../Pages/Home.css'

function Home() {
  return (
    <div>
      
    <div id="mobilesidebar">
        <ul>
            <li>
                <div class="user"><img src="./Images/icons/user.png" alt=""/> <a href="">LOGIN</a></div>
            </li>
            <li class="user"><img src="./Images/icons/icons8-microphone-30.png" alt=""/><input type="text"/><img
                    src="./Images/icons/icons8-mobilesearch.svg" alt=""/></li>
        </ul>
    </div>
    <div id="head">

    </div>
    <div id="navbar">



    </div>
    <div id="topnews">
        <div id="featurednewsdiv"></div>
        <div id="topstoriesdiv">
            <h2>TOP STORIES</h2>
        </div>
        <div id="advitisement&opinion">
            <div id="Ads">
                <p>Advertisement</p><img src="https://tpc.googlesyndication.com/simgad/17111841759593369487" alt=""/>
            </div>
            <div>
                <div><button id="opsr"><img src="./Images/icons8-right-24.png" alt=""/></button>
                    <button id="opsl"><img src="./Images/icons8-left-24.png" alt=""/></button>
                </div>
                <label for="">OPINION</label>
                <div id="opinions"></div>
            </div>

        </div>
    </div>
    <div id="specials">
        <div>
            <div><button id="vssr"><img src="./Images/icons8-right-24.png" alt=""/></button>
                <button id="vssl"><img src="./Images/icons8-left-24.png" alt=""/></button>
            </div>
            <label for="">VISUAL STORIES</label>
            <div id="visualstories">

            </div>
        </div>
        <div>
            <div><button id="tssr"><img src="./Images/icons8-right-24.png" alt=""/></button>
                <button id="tssl"><img src="./Images/icons8-left-24.png" alt=""/></button>
            </div>
            <label for="">TODAY'S SPECIALS</label>
            <div id="todaysspecials">

            </div>
        </div>


    </div>
    <div id="newscategories"></div>
    <div id="feeds"></div>


    <div id="footerContainer"></div>
    </div>
   
  )
}

export default Home