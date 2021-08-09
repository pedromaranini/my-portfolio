import { Line } from '../Line';

import './styles.scss';

export function ListRepositories() {
	return (
		<>
			<section className="list-repo">
				<div className="title">
					<h1>Acesso aos repositórios</h1>
					<p>
						Caso prefira acessar os repositórios por aqui sem entrar no Github,
						basta clicar no botão ao lado e, você será redirecionado!
					</p>
				</div>

				<div className="button-list">
					<a href="/repo">
						<button>
							Acesse a lista de repositórios
						</button>
					</a>
				</div>
			</section>
			<Line />
		</>
	);
}