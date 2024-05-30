

import React from 'react'
import { Wrapper } from "./style";
import { useNavigate ,useLocation } from 'react-router-dom';

function Booking() {

    const navigate=useNavigate()
    const location=useLocation()
    const {state}=location

    console.log(state.data)



    return (
        <div>

            <Wrapper>
                <div className="modalContainer">
                    <div className="modal">
                        <div>
                            <button className="btn" onClick={()=>navigate("/")} >
                                X
                            </button>
                        </div>
                        <div className="modalDetails">
                            <div className="movieDetails">
                                <div>
                                    <img
                                        className="image"
                                        src={state.data?.imageUrl}
                                        alt="movieImage"
                                    />
                                </div>
                                <div className="details">
                                    {/* <div> */}
                                    {/* <div className="movie">
										{props?.currentModalData?.name}
									</div> */}
                                    
                                    <div>{state.data?.name}</div>
                                   
                                   
                                    {/* <div value="Hridayam">
									{props?.movieList?.name}
								</div> */}
                                    {/* </div> */}
                                    <div>
                                        <div className="drctr">
                                            {state.data?.director} 
                                        </div>
                                        {/* <div value="Vineeth Sreenivasan"></div> */}
                                    </div>
                                    <div>
                                        <div className="lang">
                                            {state.data?.language} 
                                        </div>
                                        {/* <div value="Malayalam"></div> */}
                                    </div>
                                    <div className="slots">
                                        Available Slots : {state.data.slot} 
                                    </div>
                                    <button>
                                        Book my ticket
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="description">About the Movie </div>
                                <div className="desc">
                                    {state.data?.description} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </div>
    )
}

export default Booking
