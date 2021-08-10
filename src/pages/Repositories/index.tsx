import { useEffect } from 'react';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

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
		<>
			<a href="/">
				<BsArrowLeft className="back-icon" />
			</a>
			<main className="container">
				<div className="title-subtitle">
					<h1>Lista de repositórios</h1>
					<p>
						Os repositórioes contém apenas Nome, Descrição e Linguagem, informações mais detalhadas estão disponivel no <a
							href="https://github.com/pedromaranini?tab=repositories"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</p>
				</div>
				{repos.map((itemAtual) => {
					return (
						<section
							className="content"
							key={itemAtual.id}
						>
							<a href={`https://github.com/pedromaranini/${itemAtual.name}`}>{itemAtual.name}</a>
							<p>{itemAtual.language}</p>
							<p>{itemAtual.description}</p>
						</section>
					);
				})}
			</main>
		</>
	)
}