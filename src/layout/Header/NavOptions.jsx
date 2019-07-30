const kinApps = [
	{
		path:"",
		text: "All",
	},
	{
		path:"ios",
		text: "iOS",
	},
	{
		path:"android",
		text: "Android",
	}
];

const stats = [
	{
		path:"",
		text: "Overview",
	},
	{
		path:"mas",
		text: "Monthly Active Spenders",
	},
	{
		path:"mae",
		text: "Monthly Active Earners",
	},
	{
		path:"mat",
		text: "Monthly Active Tourists",
	}
];

const explorerNav = [
	{
		path:"",
		text: "Overview",
	},
	{
		path:"operations",
		text: "Operations",
	},
	{
		path:"ledgers",
		text: "Ledgers",
	},
	{
		path:"transactions",
		text: "Transactions",
	},
	{
		path:"effects",
		text: "Effects",
	},
	{
		path:"payments",
		text: "Payments",
	}
];

const myKinWallet = [
	{
		path:"",
		text: "Overview",
	},
	{
		path:"payments",
		text: "Payments",
	},
	{
		path:"signers",
		text: "Signers",
	}
];


const navOptions = {
	"explorer": explorerNav,
	"apps": kinApps,
	"stats": stats,
	"my-kin-wallet": myKinWallet
};

export default navOptions;
