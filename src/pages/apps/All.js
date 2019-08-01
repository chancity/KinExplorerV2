import * as React from 'react'
import {
	AppCategoryContainer,
	AppCategorySliderContainer,
	AppContainer,
	AppImage,
	AppImageContainer,
	AppsContainer, AppTitle, Url, UrlContainer
} from "./Styled/AppsPage";
import androidApps from '../../static/apps/android';
import iosApps from '../../static/apps/ios';
import {Title} from "../../layout/Title";
import {imageUrlBase} from "./constants";
import {Panel, PanelHeader} from "../../layout/Panel";
import { ReactComponent as Google } from '../../static/images/app_stores/google-play.svg';
import { ReactComponent as Apple } from '../../static/images/app_stores/apple-logo.svg';
import WithSpinner from "../../components/shared/WithSpinner";


const getApps = () => {
	const appsMap = {};

	androidApps.forEach((value) => {
		const ind = appsMap[value.id] || {apps: {}};
		ind.title = value.title;
		const apps = ind.apps || {};

		value.apps.forEach((value) => {
			const ind = apps[value.name] || {};

			ind.isAndroid = true;
			ind.googleUrl = value.url;
			ind.logo = value.logo.filename;
			ind.description = value.description;
			ind.title = value.title;
			ind.name = value.name;

			apps[value.name] = ind;
		});

		appsMap[value.id] = ind;
	});

	iosApps.forEach((value) => {
		const ind = appsMap[value.id] || {};
		ind.title = value.title;

		const apps = ind.apps || {};

		value.apps.forEach((value) => {
			const ind = apps[value.name] || {};

			ind.isIos = true;
			ind.iosUrl = value.url;
			ind.logo = value.logo.filename;
			ind.description = value.description;
			ind.title = value.title;
			ind.name = value.name;

			apps[value.name] = ind;
		});

		appsMap[value.id].apps = apps;
	});

	return appsMap;
};


export const AppCategory = ({title, apps}) => (
	<Panel style={{overflow: "hidden", backgroundColor: "transparent", boxShadow: "unset", padding:"0"}}>
		<PanelHeader style={{alignSelf: "left", paddingLeft:0}}>
			{title}
		</PanelHeader>
		<AppCategoryContainer title={title}>
			<AppCategorySliderContainer>
				{apps.map((value, index) => (
					<Panel key={index}>
						<AppContainer>
							<AppTitle>{value.name}</AppTitle>
							<AppImageContainer>
								<AppImage style={{backgroundImage: `url("${imageUrlBase}${value.logo}")`}}/>
							</AppImageContainer>
							<UrlContainer>
								{value.isAndroid &&
								<Url href={value.googleUrl}>
									<Google/>
									Google Play
								</Url>}
								{value.isIos &&
								<Url href={value.iosUrl}>
									<Apple style={{marginBottom:"4px"}}/>
									App Store
								</Url>}
							</UrlContainer>
						</AppContainer>
					</Panel>
				))}
			</AppCategorySliderContainer>
		</AppCategoryContainer>
	</Panel>
);

export const AppPageAll = () => {
	const [apps, setApps] = React.useState([]);
	React.useEffect(() => {
		const apps = getApps();
		const appsArray = [];

		Object.keys(apps).forEach((value => {
			const appSubArray = [];
			const category = apps[value];
			Object.keys(category.apps).forEach((value => {
				appSubArray.push(category.apps[value])
			}));

			appsArray.push({
				title: apps[value].title,
				apps: appSubArray
			})
		}));

		setApps(appsArray);
	}, []);

	return (
		<>
			<Title>
				All the Kin Apps
			</Title>
			<WithSpinner loaded={apps.length > 0}>
				<AppsContainer>
					<>
						{apps.map((value, index) => (
							<AppCategory key={index} apps={value.apps} title={value.title}/>
						))}

					</>
				</AppsContainer>
			</WithSpinner>
		</>
	)
};


export default AppPageAll;
