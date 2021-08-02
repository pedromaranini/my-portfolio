import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss';

export function Repositories() {
	const [repos, setRepos] = useState([{
		id: '',
		name: '',
		language: '',
		description: ''
	}]);
	
	useEffect(() => {
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
		<main className="container">
			<h1>REPOSITORIES</h1>
			<div />
			{repos.map((itemAtual) => {
				return (
					<section 
						className="content"
						key={itemAtual.id}
					>
						<a href={`https://github.com/pedromaranini/${itemAtual.name}`}>{itemAtual.name}</a>
						<p>{itemAtual.description}</p>						
					</section>
				);
			})}
		</main>
	);
}