import { ProfileSide } from '../../components/ProfileSide/index';
import { AboutMe } from '../../components/AboutMe/index';
// import { Repositories } from '../../components/Repositories/index';

import './styles.scss';

export function Home() {
	return (
		<main className="general">
			<div className="profileArea" style={{ gridArea: "profileArea"}}>
				<ProfileSide />
			</div>

			<div className="aboutArea" style={{ gridArea: "aboutArea"}}>
				<AboutMe />
				{/* <Repositories /> */}
			</div>
		</main>
	);
}