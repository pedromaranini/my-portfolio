import { ProfileSide } from '../../components/ProfileSide/index';
import { AboutMe } from '../../components/AboutMe/index';

import './styles.scss';

export function Home() {
	return (
		<main>
			<div className="profileArea" style={{ gridArea: "profileArea"}}>
				<ProfileSide />
			</div>

			<div className="aboutArea" style={{ gridArea: "aboutArea"}}>
				<AboutMe />
			</div>
		</main>
	);
}