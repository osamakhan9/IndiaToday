import React from 'react'

function Account() {
   
showuserdata()
async function showuserdata() {
    let userid = localStorage.getItem("userid")
    let res = await fetch(` http://localhost:3000/userDeatails/${userid}`)
    let data = await res.json();
  
    document.getElementById("username").innerText = data.fullName
    document.getElementById("useremailNumber").innerText = data.emailNumber
    document.getElementById("usercountry").innerText = data.country
}

window.speechSynthesis.cancel();
  return (
    <div>
         <nav style="height: 48px;"/>
        <div style="display: flex;">
            <h1 class="h2">Aaj Tak</h1>
            <h1 class="h1">Business Today</h1>
            <h1 class="h1">DailyO</h1>
            <h1 class="h1">IChowk</h1>
            <h1 class="h1">India Today</h1>
            <h1 class="h1">Lallantop</h1>
            <h1 class="h1">Odd Naari</h1>
            <h1 class="h1">Pakwangali</h1>
            <h1 class="h1">Reader's Digest</h1>

        </div>
        <br/>
        <hr />
    <nav/>
    <div style="display: flex; justify-content: space-between;  margin: 2% 8% 0 8%; align-items: center;">

        <a href="../index.html">
            <img style="height: 100px;"
                src="https://akm-img-a-in.tosshub.com/sso/logo.png?yi4iBZr84BotcQerccVrm3jxQWaighSE"/>
        </a>

        <h1>My Dashboard</h1>
        <a href="../index.html">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/span_itg_group.png"/>
        </a>

    </div>

    <br/>

    <div style="display: flex; background-color: #cae5fe; height: 230px;">

        <div style="padding-left: 50px; padding-top: 50px;">
            <img style="border-radius: 50%; width: 250%;"
                src="https://auth.indiatoday.in/sites/all/themes/itg/images/default-user.png" alt=""/>
        </div>

        <div id="info" style="padding-left: 110px; padding-top: 40px;">
            <h1 id="username" style="padding-top: 10px;"></h1>
            <h2 id="useremailNumber" style="padding-top: 10px;"></h2>
            <h2 id="usercountry" style="padding-top: 10px;"></h2>
            <hr/>

        </div>

    </div>
    <div
        style="display: flex; background-color: #284a6a; height: 45px; justify-content: space-between; width: 90%; padding-top: -20px; padding: 0 5%; align-items: center;">
        <h1 class="h3">Aaj Tak</h1>
        <h1 class="h3">Business Today</h1>
        <h1 class="h3">DailyO</h1>
        <h1 class="h3">IChowk</h1>
        <h1 class="h3">India Today</h1>
        <h1 class="h3">Lallantop</h1>
        <h1 class="h3">Odd Naari</h1>
        <h1 class="h3">Pakwangali</h1>
        <h1 class="h3">Reader's Digest</h1>
    </div>

    <h1 style="padding-left: 30px; padding-top: 10px;">My Account</h1>
    <br/><br/>
    <br/>
    <h1 style="text-align: center;">No Activity found.</h1>
    <br/><br/>
    <br/><br />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br />
    </div>
  )
}

export default Account