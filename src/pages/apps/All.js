import * as React from 'react'
import {
	AppCategoryContainer,
	AppCategorySliderContainer,
	AppImage,
	AppImageContainer,
	AppsContainer, AppTitle, Description, Readmore, StyledExpand, Url, UrlContainer
} from "./Styled/AppsPage";
import allApps from '../../static/apps/all';
import {Title} from "../../layout/Title";
import {imageUrlBase} from "./constants";
import {Panel, PanelHeader} from "../../layout/Panel";
import { ReactComponent as Google } from '../../static/images/app_stores/google-play.svg';
import { ReactComponent as Apple } from '../../static/images/app_stores/apple-logo.svg';
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

	return(
		<div onClick={onClick} style={{marginTop:"1em"}}>
			<Description>
				{shortDescription}
				{isExpandable &&
					<Readmore>...read {expanded ? 'less' : 'more'}</Readmore>
				}
			</Description>
		</div>
	)
});

const AppModal = React.memo(props => (
	<Modal useToggle={props.toggler}>
		<ModalHeader>
			{props.value.name}
		</ModalHeader>
		<ModalBody>
		<AppImageContainer>
			<AppImage src={`${imageUrlBase}${props.value.logo}`}/>
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



const AppPanel =  React.memo(props => {
	const toggler = useToggle(false);
	const {value} = props;
	return(
		<>
			<AppModal value={value} toggler={toggler}/>
			<Panel style={{padding:0, width:"235px"}} title={value.title}>
				<StyledExpand title={"expand"} onClick={toggler.toggle}/>
				<AppTitle>{value.name}</AppTitle>
				<AppImageContainer>
					<AppImage src={`${imageUrlBase}${value.logo}`}/>
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
	return (<Panel
		style={{overflow: "hidden", backgroundColor: "transparent", boxShadow: "unset", padding: "0", width: "100%"}}>
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
	</Panel>)
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
