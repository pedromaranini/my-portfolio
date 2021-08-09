/* eslint-disable jsx-a11y/alt-text */
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
			<section className="about-area">
				<span>SEJA <strong>BEM-VINDO</strong> AO MEU <strong>PORTFÓLIO</strong></span>
				<p>Meu nome é Pedro, tenho 20 anos, seja <strong>bem-vindo</strong> esse é meu portfólio!</p>
				<p>A tecnologia é brilhante, e o que me fascina nisso tudo é saber em como as coisas são feitas e como funcionam.</p>
				<p>
					Atualmente sou um <strong>Desenvolvedor Front-End</strong> em construção, evolução e aprimoramento.
					Em construção pois, <strong>meu objetivo é sempre evoluir</strong> e <strong>aumentar o leque de aprendizagem</strong> para, trabalhar e
					desenvolver com novas tecnologias e sistemas.
				</p>
			</section>
			<div className="line" />

			<section className="stack">
				<a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">
					<img src={reactIcon} alt="ReactJS" />
					<p>ReactJS</p>
				</a>

				<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">
					<img src={javascriptIcon} alt="Javascript" />
					<p>Javascript</p>
				</a>

				<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">
					<img src={cssIcon} alt="Css" />
					<p>CSS</p>
				</a>

				<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">
					<img src={htmlIcon} alt="Html5" />
					<p>HTML</p>
				</a>

				<a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
					<img src={sassIcon} alt="Sass" />
					<p>SASS</p>
				</a>

				<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
					<img src={typescriptIcon} alt="Typescript" />
					<p>Typescript</p>
				</a>

				<a href="https://insomnia.rest/" target="_blank" rel="noreferrer">
					<img src={insomniaIcon} alt="Insomnia" />
					<p>Insomnia</p>
				</a>

				<a href="https://www.postman.com/" target="_blank" rel="noreferrer">
					<img src={postmanIcon} alt="Postman" />
					<p>Postman</p>
				</a>

			</section>
			<div className="line" />
		</>
	);
}