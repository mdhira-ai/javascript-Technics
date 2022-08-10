import React, { useState } from 'react'

function LightONOFF() {
    const [btnstate, setbtnstate] = useState(0)
    const [btnstate3, setbtnstate3] = useState(0)


    // first method to change the light state
    function btnclick() {
        setbtnstate(1)

    }

    function btnclick2() {
        setbtnstate(0)
    }

    // 2nd method to change the light state
    function btnclick3() {
        setbtnstate3(btnstate3 === 0 ? 1 : 0)
    }


    // 3rd method to change the light state
    function btnclick4() {
        document.getElementsByTagName("img")[2].src = "https://www.w3schools.com/js/pic_bulbon.gif"
    }

    function btnclick5() {
        document.getElementsByTagName("img")[2].src = "https://www.w3schools.com/js/pic_bulboff.gif"
    }


    return (
        <div>
            <h1>1st method LightONOFF</h1>
            <button onClick={btnclick}>light ON</button>

            {btnstate === 1 ?

                <img src="https://www.w3schools.com/js/pic_bulbon.gif" alt="Google Logo" />

                :

                <img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="Google Logo" />

            }
            <button onClick={btnclick2}>light OFF</button>





            <h1>2nd method LightONOFF</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>



                {btnstate3 === 1 ?

                    <img src="https://www.w3schools.com/js/pic_bulbon.gif" alt="Google Logo" />

                    :

                    <img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="Google Logo" />

                }
                <button onClick={btnclick3}>light ON/OFF</button>

            </div>


            <h1>3rd method LightONOFF</h1>
            <button onClick={btnclick4}>Light ON</button>
            <img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="Google Logo" />

            <button onClick={btnclick5}>Light OFF</button>

        </div>
    )
}

export default LightONOFF