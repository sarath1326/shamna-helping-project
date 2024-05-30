

import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

function MovieCard(props) {

	const navigate=useNavigate()


	return (
		<Container>
			<div className="movieCardContainer">
				<div className="movieCards1">
					{props.movieList.map((item, index) => (
						<div className="movieCard" key={index}>
							{console.log("item", item)}
							<div className="movieDetails">
								<div className="imageContainer">
									<img
										className="movieImage"
										src={item.imageUrl}
										alt="Hridayam"
									/>
								</div>
								<div>Title:{item.name}</div>
								<div>Rating:{item.rating}</div>
								<div>Language:{item.language}</div>
								<div>
									<button
										onClick={() =>
											
											navigate("/movie-details",{state:{data:item}})

										}
										className="showBtn"

									>
										More Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

export default MovieCard;
