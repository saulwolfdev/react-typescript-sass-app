
import * as React from "react";
import styles from "./ImageNewsletter.module.scss";
export interface ImageNewsletterProps {

}

const ImageNewsletter: React.SFC<ImageNewsletterProps> = () => {
	return (

		<div className={styles.Background} style={{ backgroundImage: "url(https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5c5d569fcd394b1490d216df_Group%20Copy.png),linear-gradient(90deg, #0080ff, #2693ff)" }}>
			<h3>Try Produck for free</h3>
			<p>Make your team more successful with Produck.</p>
			<button>Get Started Free</button>
			<img src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc8abc1ea28d804149a41c5_videotriangle.svg" alt="icon arrow"/>
			<span>Watch demo</span>
		</div>

	);
}

export default ImageNewsletter;