import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import BookingModal from "./components/BookingModal";
import MovieCard from "./components/MovieCard";

function App() {
	const [star, setStar] = useState(8);
	const [language, setLanguage] = useState("Malayalam");
	const [searchText, setSearchText] = useState("");

	const movieList = [
		{
			id: 1,
			name: "Hridayam",
			director: "Vineeth Sreenivasan",
			imageUrl:
				"https://m.media-amazon.com/images/M/MV5BN2E5ZGVmZjUtZjYzMS00NDFlLTk2M2MtODAzZDU4ZjM2NWY3XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
			rating: 8.5,
			language: "Malayalam",
			slot: 100,
			description:
				"Hridayam is an emotional journey of Arun, his carefree bachelor days in Engineering college, and how he matures through various phases of life.",
		},
		{
			id: 2,
			name: "Bheeshma parvam",
			director: "Amal Neerad",
			imageUrl:
				"https://www.nowrunning.com/content/movie/2021/bhees-25573/Stills/bheeshmaparvam_2022215.jpg",
			rating: 8.7,
			language: "Malayalam",
			slot: 100,
			description:
				"Michael helms his ancestral family in Kochi, inspiring fear and respect through his past. When a few younger members of the household find his power over their lives too aggravating, they join hands with foes to clamp down on him.",
		},
		{
			id: 3,
			name: "Ajagajantharam",
			director: "Tinu Pappachan",
			imageUrl:
				"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ajagajantharam-et00305165-29-11-2021-05-50-49.jpg",
			rating: 7.3,
			language: "Malayalam",
			slot: 100,
			description:
				"Aranjali is all set to celebrate the annual temple festival. Some unforeseen chain of events involving an elephant, a few young men, a notorious criminal, a drama troop and some trouble-loving villagers brings complete mayhem to the place.",
		},
		{
			id: 4,
			name: "Meow",
			director: "Lal Jose",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUGO_Gc5xqZJJqMsiG9OrDRmmUAegeHq4PZSxNDVr7lhdCaCQxKDBIMIT7lQ_C1-Q95I&usqp=CAU",
			rating: 7.3,
			language: "Malayalam",
			slot: 100,
			description:
				"Follows Dasthakeer and Sulekha, a married couple that moves to Dubai with their three children for a better life.",
		},
		{
			id: 5,
			name: "Pada",
			director: "Kamal K.M.",
			imageUrl:
				"https://m.media-amazon.com/images/M/MV5BZWJhM2E2YWItNjgxZC00OWRiLWEwNWYtOWE5ZWU0YjQxYTFlXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
			rating: 8.5,
			language: "Malayalam",
			slot: 100,
			description:
				"Pada raises the seminal question of land and the displacement of Adivasi (Indigenous) Communities in India. All the governments that have ruled the nation made laws that denied the indigenous people their way of life and their land often, protecting crony capitalist interests. The film revisits an episode of dissent in the 90s which brought up this question amongst us. A history forgotten!",
		},
		{
			id: 6,
			name: "Mahaan",
			director: "Karthik Subbaraj",
			imageUrl:
				"https://assetscdn1.paytm.com/images/cinema/1-11676640-7901-11ec-9fce-1f8461b3fe2d.jpg",
			rating: 8.3,
			language: "Tamil",
			slot: 100,
			description:
				"Gandhi Mahaan, a school teacher, is abandoned by his family after he decides to live a life of his own, with personal freedom.",
		},
		{
			id: 7,
			name: "Doctor",
			director: "Nelson",
			imageUrl:
				"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSCe371X060CPHkKtpyC3IF5eXFvZdjyqgPXsUobjkQZOt9xY-",
			rating: 7.8,
			language: "Tamil",
			slot: 100,
			description:
				"Varun is a military doctor who visits Chennai and gets caught up in the pursuit of a missing girl. How Varun and six others take on human/organ trafficking lords forms the rest of the story.",
		},
		{
			id: 8,
			name: "Jai Bhim",
			director: "T J Gnanavel",
			imageUrl:
				"https://resizing.flixster.com/Bs4Duz3RK3BctygoWKKST04ZVN4=/300x300/v2/https://flxt.tmsimg.com/assets/p20749753_p_v10_aa.jpg",
			rating: 9.4,
			language: "Tamil",
			slot: 100,
			description:
				"When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
		},
		{
			id: 9,
			name: "Thalli Pogathey",
			director: "R. Kannan",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Thalli_Pogathey_poster.jpg/220px-Thalli_Pogathey_poster.jpg",
			rating: 5.8,
			language: "Tamil",
			slot: 100,
			description:
				"When Karthik declines her proposal to elope, Pallavi marries Arun and emigrates to France. Karthik who still is in love with Pallavi also lands up in France a year later in the hope of winning her back.",
		},
		{
			id: 10,
			name: "Maanaadu",
			director: "Venkat Prabhu",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg",
			rating: 8.8,
			language: "Tamil",
			slot: 100,
			description:
				"On the day of a public conference by the state`s Chief Minister, his bodyguard and a police officer get stuck in a time loop.",
		},
		{
			id: 11,
			name: "The Batman",
			director: "Matt Reeves",
			imageUrl:
				"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
			rating: 8.4,
			language: "English",
			slot: 100,
			description:
				"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the cities hidden corruption and question his families involvement.",
		},

		{
			id: 12,
			name: "Eternals",
			director: "Chloé Zhao",
			imageUrl:
				"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZBNOF324-MHMcNrSD8mFRBD3eEfj5lfVT69NMC16cFxLH0iku",
			rating: 6.4,
			language: "English",
			slot: 100,
			description:
				"Based on Jack Kirby`s Eternals, Marvel Studios brings yet another thrilling superhero flick with the saga of The Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
		},
		{
			id: 13,
			name: "Uncharted",
			director: "Ruben Fleischer",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAT4deET55wX0MzpBp45_7201ZndSAI8m2W52rNVeVmEbEgEW",
			rating: 6.7,
			language: "English",
			slot: 100,
			description:
				"A veteran treasure-hunter, Sully (Mark Wahlberg) takes street-smart Nathan Drake (Tom Holland) under his wing, and the two set off on a wild journey across the globe to recover lost treasure.",
		},

		{
			id: 14,
			name: "Dune",
			director: "Denis Villeneuve",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJznVehDbSUPihJbSTNwH8Tgnvh4ZDxs0J4hV06wOvHHidHul",
			rating: 8.1,
			language: "English",
			slot: 100,
			description:
				"Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis.",
		},

		{
			id: 15,
			name: "Top Gun: Maverick",
			director: "Joseph Kosinski",
			imageUrl:
				"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd",
			rating: 8.7,
			language: "English",
			slot: 100,
			description:
				"After thirty years of service, Pete `Maverick` Mitchell continues to be a test pilot, actively avoiding promotions that would keep him on the ground. While training a new group of graduates for a special mission, he comes across Lt. Bradley Bradshaw or `Rooster` who is the son of Maverick`s late best friend Lt. Nick Bradshaw a.k.a `Goose`. Can Maverick deal with an uncertain future while also confronting the ghosts of his past?",
		},

		{
			id: 16,
			name: "Badhaai Do",
			director: "Harshavardhan Kulkarni",
			imageUrl:
				"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRwdILw-UcAN1DHNDZKMmaoiuA7O6LdqzP--Xq1QOiOXeLsiVs",
			rating: 7.5,
			language: "Hindi",
			slot: 100,
			description:
				"Shardul Thakur and Suman Singh enter into a marriage of convenience but chaos ensues when her girlfriend comes to stay with them.",
		},

		{
			id: 17,
			name: "A Thursday",
			director: "Behzad Khambata",
			imageUrl:
				"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694",
			rating: 8.2,
			language: "Hindi",
			slot: 100,
			description:
				"When a preschool teacher takes her 16 students hostage and makes a set of demands, it not only rattles the Mumbai police and the city, but sends shockwaves through the country and its leaders.",
		},

		{
			id: 18,
			name: "Gehraiyaan",
			director: "Shakun Batra",
			imageUrl:
				"https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1642673907532.jpg-org",
			rating: 6.2,
			language: "Hindi",
			slot: 100,
			description:
				"Gehraiyaan takes you on a journey into the deep rooted intricacies of modern human relationships.",
		},

		{
			id: 19,
			name: "Jhund",
			director: "Nagraj Manjule",
			imageUrl:
				"https://filmfare.wwmindia.com/content/2022/mar/inside-2-amitabh-bachchan-jhund1646197642.jpg",
			rating: 8.8,
			language: "Hindi",
			slot: 100,
			description:
				"Based on the life of Vijay Barse, a retired sports teacher who founded an NGO called Slum Soccer. He managed to rehabilitate street kids by keeping them off drugs and crime by turning them into soccer players and building a whole team.",
		},

		{
			id: 20,
			name: "83",
			director: "Kabir Khan",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9e2JSmHhceYtfkrdy2e0uEbQlAEVL1mf5JaKV7OoH8eP1U8s",
			rating: 7.4,
			language: "Hindi",
			slot: 100,
			description:
				"1983 Cricket World Cup taught India to win. 14 men fought against all odds. This is their Story!",
		},
	];

	const [filteredData, setFilteredData] = useState(movieList);
	const [showBookingModal, setShowBookingModal] = useState(false);
	console.log("showBookingModal", showBookingModal);
	const [currentModalData, setCurrentModalData] = useState();
	
	console.log("currentModalData", currentModalData);

	const filterByRating = (value) => {
		const tmpArr = movieList.filter((movie) => movie.rating >= value);
		setFilteredData(tmpArr);
		setStar(value);
	};

	const filterByLanguage = (value) => {
		const tempArr = movieList.filter((movie) => movie.language === value);
		setFilteredData(tempArr);
		setLanguage(value);
	};

	const SearchInputChange = (searchValue) => {
		setSearchText(searchValue);
	};

	const OnClickSearchButtonHandler = (event) => {
		const movie = movieList.filter((movie) =>
			movie.name.includes(searchText)
		);
		console.log("movie", movie);
		setFilteredData(movie);
	};

	return (
		<div>
			<div>
				<Banner
					title={"Unlimited ,TV"}
					description={"shows and more."}
					subTitle1={"Watch anywhere. Cancel anytime."}
					subTitle2={
						"Ready to watch? Enter your email to create or restart your membership"
					}
				/>
			</div>
			<div>
				<div className="movieLang">
					<select
						onChange={(event) =>
							filterByLanguage(event.target.value)
						}
						value={language}
					>
						<option value="Malayalam">Malayalam</option>
						<option value="Hindi">Hindi</option>
						<option value="Tamil">Tamil</option>
						<option value="English">English</option>
					</select>
					<select
						onChange={(event) => filterByRating(event.target.value)}
						value={star}
					>
						<option value={5}>5star</option>
						<option value={6}>6star</option>
						<option value={7}>7star</option>
						<option value={8}>8star</option>
						<option value={9}>9star</option>
					</select>
					<div className="search">
						<label htmlFor="searchInput">Search</label>
						<input
							id="searchInput"
							type="text"
							onChange={(event) =>
								SearchInputChange(event.target.value)
							}
						/>
						<button
							style={{ width: "20px", height: "10px" }}
							onClick={() => OnClickSearchButtonHandler()}
						/>
					</div>
				</div>
				<MovieCard
					movieList={filteredData}
					// onClickBookMyShowButton={() => setShowBookingModal(true)}
					// currentModalData={setCurrentModalData}
					onClickBookMyShowButton={(data) => {
						setShowBookingModal(true);
						setCurrentModalData(data);
					}}
				/>

				{showBookingModal && (
					<BookingModal
						onClose={() => setShowBookingModal(false)}
						showBookingModal={showBookingModal}
						currentModalData={currentModalData}
					/>
				)}
			</div>
		</div>
	);
}
export default App;
