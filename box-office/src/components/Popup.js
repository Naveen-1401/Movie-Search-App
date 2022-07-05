import React from 'react'

const Popup = ({ Selected, closePopup })=>{
	console.log(Selected, closePopup)
	return (
		<section className="popup">
			<div className="content">
				<h2>{ Selected.Title } <span>({ Selected.Year })</span></h2>
				<p className="rating">Rating: {Selected.imdbRating}</p>
				<div className="plot">
					<img src={Selected.Poster} />
					<p>{Selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup