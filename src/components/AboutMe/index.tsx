import './styles.scss';

import cssIcon from '../../assets/css3.svg';
import htmlIcon from '../../assets/html5.svg';
import insomniaIcon from '../../assets/insomnia.png';
import javascriptIcon from '../../assets/javascript.svg';
import postmanIcon from '../../assets/postman.png';
import reactIcon from '../../assets/reactjs.svg';
import sassIcon from '../../assets/sass.png';
import typescriptIcon from '../../assets/typescript.svg';

export function AboutMe() {
	return (
		<>
		<h1>SOBRE MIM</h1>
		<section className="about-area">
			<span>FRONT-END DEVELOPER</span>
			<strong>Falaaaa, meu nome é Pedro, seja bem-vindo!</strong>
			<p>
				No começo do ano iniciei minha carreira no mercado de tecnologia e, hoje atuo como Desenvolvedor Front-End,
				trabalhando, focando, estudando e aprimorando meu conhecimento na stack que desenvolvo, os projetos
				que desenvolvo estão todas no meu Github, abaixo vou deixar a tecnologias que eu utilizo.
				Caso queira entrar em contato comigo as opções estão abaixo, abraçossssss :)
			</p>

			<div className="stack">
				{/* SASS */}
				<a href="https://sass-lang.com/">
					<img src={sassIcon} alt="Sass" />
				</a>
				{/* CSS */}
				<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
					<img src={cssIcon} alt="Css" />
				</a>
				{/* HTML */}
				<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
					<img src={htmlIcon} alt="Html5" />
				</a>
				{/* JAVASCRIPT */}
				<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
					<img src={javascriptIcon} alt="Javascript" />
				</a>
				{/* TYPESCRIPT */}
				<a href="https://www.typescriptlang.org/">
					<img src={typescriptIcon} alt="Typescript" />
				</a>
				{/* REACTJS */}
				<a href="https://pt-br.reactjs.org/">
					<img src={reactIcon} alt="ReactJS" />
				</a>
				{/* INSOMNIA */}
				<a href="https://insomnia.rest/">
					<img src={insomniaIcon} alt="Insomnia" />
				</a>
				{/* POSTMAN */}
				<a href="https://www.postman.com/">
					<img src={postmanIcon} alt="Postman" />
				</a>				
			</div>
		</section>
		</>
	);
}