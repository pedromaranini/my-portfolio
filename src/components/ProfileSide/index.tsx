import { useEffect } from 'react';
import { useState } from 'react';

import './styles.scss'

export function ProfileSide() {
	const githubUser = "pedromaranini";
	const [followers, setFollowers] = useState([]);
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		// FOLLOWERS
		fetch('https://api.github.com/users/pedromaranini/followers')
		.then((response) => {
			return response.json();
		})
		.then((responseConvert) => {
			console.log(responseConvert);
			setFollowers(responseConvert);
		})

		// // REPOSITORIES
		fetch('https://api.github.com/users/pedromaranini/repos')
		.then((response) => {
			return response.json();
		})
		.then((responseConvert) => {
			console.log(responseConvert);
			setRepos(responseConvert);
		})
	}, [])

	return (
		<section className="profile-area">
			<img
				src={`https://github.com/${githubUser}.png`}
				alt="Foto Perfil"
			/>

			<p>Pedro Maranini</p>

			<a
				href={`https://github.com/${githubUser}`}
			>
				@{githubUser}
			</a>

			<div className="follow">
				<a href={`https://github.com/${githubUser}?tab=followers`} >({followers.length}) followers</a>
				<a href={`https://github.com/${githubUser}?tab=repositories`}>({repos.length}) repositories</a>
			</div>
		</section>
	);
}