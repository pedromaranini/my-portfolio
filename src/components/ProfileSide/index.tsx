/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useState } from 'react';

import { Button } from '../Button/index';

import cvPdf from '../../content/cv.pdf';

import './styles.scss';

export function ProfileSide() {
	const githubUser = "pedromaranini";
	const [followers, setFollowers] = useState([]);
	const [repos, setRepos] = useState([]);
	const [dataUser, setDataUser] = useState({
		name: '',
		bio: '',
		location: '',
	});

	useEffect(() => {
		// DATA USER
		fetch('https://api.github.com/users/pedromaranini')
			.then((response) => {
				return response.json();
			})
			.then((responseConvert) => {
				console.log(responseConvert);
				setDataUser(responseConvert);
			})

		// FOLLOWERS
		fetch('https://api.github.com/users/pedromaranini/followers')
			.then((response) => {
				return response.json();
			})
			.then((responseConvert) => {
				// console.log(responseConvert);
				setFollowers(responseConvert);
			})

		// REPOSITORIES
		fetch('https://api.github.com/users/pedromaranini/repos')
			.then((response) => {
				return response.json();
			})
			.then((responseConvert) => {
				// console.log(responseConvert);
				setRepos(responseConvert);
			})
	}, [])

	return (
		<section className="profile-area">
			<img
				src={`https://github.com/${githubUser}.png`}
				alt="Foto Perfil"
			/>

			<p>{dataUser.name}</p>

			<a
				href={`https://github.com/${githubUser}`}
			>
				@{githubUser}
			</a>

			<p className="bio">{dataUser.bio}</p>
			<p className="location">{dataUser.location}</p>

			<div className="follow">
				<a href={`https://github.com/${githubUser}?tab=followers`} >({followers.length}) followers</a>
				<a href={`https://github.com/${githubUser}?tab=repositories`}>({repos.length}) repositories</a>
			</div>

			<div className="buttons">
				<a href="https://github.com/pedromaranini" target="_blank" rel="noreferrer">
					<Button title="Acesse meu Github" />
				</a>

				<Button title="Entre em contato" />

				<a href={cvPdf} download="cv-pedromaranini">
					<Button title="Download CV" />
				</a>
			</div>
		</section>
	);
}