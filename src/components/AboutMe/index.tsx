import { Line } from '../Line/index';

import './styles.scss';

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
			<Line />
		</>
	);
}