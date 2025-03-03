import { useState } from "react"
import "../styles/reserveseat.scss"

const ReserveMySeat = (props, day, time, state, setState) => {



    return (
        <>
            <div className="reserveMain">
                <div className="reserveMain1">
                    Hey Charlie
                </div>
                <div className="reserveMain2">
                    You have choosen Round of Golf event on 14 november, 2024.Have a great event ahead
                    Enjoy your new round of go.
                </div>
                <div className="reserveMain3">
                    <div className="day">
                        <p className="para">Select a day</p>
                        <select className="reserveSelect">
                            <option>Jan 1, 2025</option>
                            <option>
                                Jan 2, 2025
                            </option>
                        </select>
                    </div>
                    <div className="timeSlot">
                        <p className="para">Select a timeSlot</p>
                        <select className="reserveSelect">
                            <option>10:00 AM- 11:00 AM</option>
                            <option>
                                2:30 PM- 3:00 PM
                            </option>
                        </select>

                    </div>

                </div>
                <div className="reserveMain4">
                    <p className="para">Reserve your seat</p>
                    <select className="reserveSelect">
                        <option>
                            1 Seats
                        </option>
                        <option>
                            2 Seats
                        </option>

                    </select>

                </div>
                <div className="reserveMain5">
                    <div className="reserveButton">
                        <button className="btnreserve">
                            Reserve my seats
                        </button>

                    </div>
                    <div className="reserveCancel">

                        <p className="pCancel">Cancel
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ReserveMySeat;