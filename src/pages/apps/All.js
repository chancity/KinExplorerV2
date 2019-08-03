import * as React from 'react'
import {
	AppCategoryContainer,
	AppCategorySliderContainer,
	AppImage,
	AppImageContainer,
	AppsContainer, AppTitle, Description, Readmore, Scrollable, StyledPanel, Url, UrlContainer
} from "./Styled/AppsPage";
import allApps from '../../static/apps/all';
import {Title} from "../../layout/Title";
import {googleUrl, s3Url} from "./constants";
import {Panel, PanelHeader} from "../../layout/Panel";
import {ReactComponent as Google} from '../../static/images/app_stores/google-play.svg';
import {ReactComponent as Apple} from '../../static/images/app_stores/apple-logo.svg';
import WithSpinner from "../../components/shared/WithSpinner";
import {shortenDescription} from "./util";
import {ModalBody, ModalHeader} from "../../components/modal/StyledComponents";
import {useToggle} from "../../components/modal/useToggle";
import Modal from "../../components/modal/Modal";

const MAX_DESCRIPTION_LENGTH = 90;

const AppDescription = React.memo(props => {
	const {description, onClick} = props;
	const [shortDescription] = React.useState(shortenDescription(description, MAX_DESCRIPTION_LENGTH));
	const [expanded] = React.useState(false);
	const [isExpandable] = React.useState(description.length > MAX_DESCRIPTION_LENGTH);

	return (
		<div onClick={onClick} style={{marginTop: "1em"}}>
			<Description>
				{shortDescription}
				{isExpandable &&
				<Readmore>...read {expanded ? 'less' : 'more'}</Readmore>
				}
			</Description>
		</div>
	)
});

const getImageUrl = (res)=> {
	if(res.includes(".webp")){
		const replaceWith = "s180";
		res = res.replace("s360-rw.webp", replaceWith).replace("s180-rw.webp", replaceWith).replace("s180-rw-1.webp", replaceWith);

		return `${googleUrl}${res}`
	}
	return `${s3Url}${res}`
};

const AppModal = React.memo(props => (
	<Modal useToggle={props.toggler}>
		<ModalHeader>
			{props.value.name}
		</ModalHeader>
		<ModalBody>
			<AppImageContainer>
				<AppImage src={getImageUrl(props.value.logo)}/>
			</AppImageContainer>
			<p>{props.value.description}</p>
			<UrlContainer>
				{props.value.isAndroid &&
				<Url href={props.value.googleUrl}>
					<Google/>
					Google Play
				</Url>}
				{props.value.isIos &&
				<Url href={props.value.iosUrl}>
					<Apple/>
					App Store
				</Url>}
			</UrlContainer>
		</ModalBody>
	</Modal>
));


const AppPanel = React.memo(props => {
	const toggler = useToggle(false);
	const {value} = props;
	return (
		<>
			<AppModal value={value} toggler={toggler}/>
			<Panel style={{padding: 0, paddingTop:1+"em", minWidth: "296.89px", width:"100%"}} title={value.title}>
				<AppTitle>{value.name}</AppTitle>
				<AppImageContainer>
					<AppImage src={getImageUrl(value.logo)}/>
				</AppImageContainer>
				<AppDescription description={value.description} onClick={toggler.toggle}/>
				<UrlContainer>
					{value.isAndroid &&
					<Url href={value.googleUrl}>
						<Google/>
						Google Play
					</Url>}
					{value.isIos &&
					<Url href={value.iosUrl}>
						<Apple/>
						App Store
					</Url>}
				</UrlContainer>
			</Panel>
		</>
	)
});


const AppCategory = React.memo(props => {
	const {apps, title} = props;
	return (
		<StyledPanel>
			<Scrollable>
				<PanelHeader style={{alignSelf: "left", paddingLeft: 0}}>
					{title}
				</PanelHeader>
				<AppCategoryContainer title={title}>
					<AppCategorySliderContainer>
						{apps.map((value, index) => (
							<AppPanel value={value} key={index}/>
						))}
					</AppCategorySliderContainer>
				</AppCategoryContainer>
			</Scrollable>
		</StyledPanel>)
});

export const AppPageAll = () => {
	const [apps, setApps] = React.useState([]);
	React.useEffect(() => {
		//setApps(getApps());
		setApps(allApps);
	}, []);

	return (
		<>
			<Title>
				All the Kin Apps
			</Title>
			<WithSpinner loaded={apps.length > 0}>
				<AppsContainer style={{position: "relative"}}>
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
