import styles from "./footer.module.scss";

export const Footer = ({ contributorsInfo }) => {
	return (
		<footer className={styles.footer}>
			<a href={contributorsInfo[0].html_url} target="_blank" className={styles.footer__link}>
				Powered by {contributorsInfo[0].login}
			</a>
		</footer>
	);
};
