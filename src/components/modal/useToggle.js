import { useState } from "react";




export const useToggle = (initialState = false) =>{
	const [isToggled, SetToggled] = useState(initialState);

	function toggle(){
		SetToggled(!isToggled);
	};

	return{
		isToggled,
		toggle
	}
};
