import truncate from "lodash/truncate";
import androidApps from "../../static/apps/android";
import iosApps from "../../static/apps/ios";

export const shortenDescription = (description, length = 100) => truncate(description, {length, omission:''});

const mapToArray = () => {
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
	return appsArray;
};

export const getApps = () => {
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

	return mapToArray(appsMap);
};

