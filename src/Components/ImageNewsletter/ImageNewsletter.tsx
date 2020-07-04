
import * as React from "react";
import styles from "./ImageNewsletter.module.scss";
export interface ImageNewsletterProps {

}

const ImageNewsletter: React.SFC<ImageNewsletterProps> = () => {
	return (

		<div className={styles.Background} style={{ backgroundImage: "url(https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5c5d569fcd394b1490d216df_Group%20Copy.png),linear-gradient(90deg, #0080ff, #2693ff)" }}>
			<div className={styles.Background_Container}>
				<h3 className={styles.Background_Container_Title}>Try Produck for free</h3>
				<p className={styles.Background_Container_Description}>Make your team more successful with Produck.</p>
				<div className={styles.Background_Container_Content}>
					<button className={styles.Background_Container_Content_Button}>Get Started Free</button>
					<a className={styles.Background_Container_Content_Text}>
						<img className={styles.Background_Container_Content_Text_Img} src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc8abc1ea28d804149a41c5_videotriangle.svg" alt="icon arrow" /> Watch demo</a>
				</div>

			</div>
		</div>

	);
}

export default ImageNewsletter;