import React from "react";
import { Banner } from "../componentSection/banner/banner";

export const LuxuryGyms = () => {
	const image = {
		src:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/c9c20c59-22da-444c-9a92-fb2c88850af3.jpg",
	};
	return (
		<div>
			<Banner image={image} />
		</div>
	);
};
