import React from "react";

import { Wrapper } from "./style";

const BookingModal = (props) => {
	if (!props.showBookingModal) return null

	const {currentModalData, onClose } = props
	
	return (
		<Wrapper>
			<div className="modalContainer">
				<div className="modal">
					<div>
						<button className="btn" onClick={onClose}>
							X
						</button>
					</div>
					<div className="modalDetails">
						<div className="movieDetails">
							<div>
								<img
									className="image"
									src={currentModalData?.imageUrl}
									alt="movieImage"
								/>
							</div>
							<div className="details">
								{/* <div> */}
								{/* <div className="movie">
										{props?.currentModalData?.name}
									</div> */}
								<div>{currentModalData?.name}</div>
								{/* <div value="Hridayam">
									{props?.movieList?.name}
								</div> */}
								{/* </div> */}
								<div>
									<div className="drctr">
										{currentModalData?.director}
									</div>
									{/* <div value="Vineeth Sreenivasan"></div> */}
								</div>
								<div>
									<div className="lang">
										{currentModalData?.language}
									</div>
									{/* <div value="Malayalam"></div> */}
								</div>
								<div className="slots">
									Available Slots : {currentModalData?.slot}
								</div>
								<button onClick={() => props?.bookTicket()}>
									Book my ticket
								</button>
							</div>
						</div>
						<div>
							<div className="description">About the Movie </div>
							<div className="desc">
								{currentModalData?.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default BookingModal;
