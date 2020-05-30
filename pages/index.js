import Head from "next/head";
import axios from "axios";

import { BaseLayout } from "../layouts/base-layout";

export const getStaticProps = async (ctx) => {
	const info = await axios.get(process.env.REPOSITORY_URL);
	const infoContributors = await axios.get(process.env.REPOSITORY_URL + "/contributors");
	return {
		props: {
			repoInfo: info.data,
			contributorsInfo: infoContributors.data,
		},
	};
};

export default function Home({ repoInfo, contributorsInfo }) {
	return (
		<BaseLayout contributorsInfo={contributorsInfo}>
			<h1 className="title">
				Welcome to <a href={repoInfo.html_url}>hook-easy-form</a>
			</h1>

			<p className="description">The best way to manage your form state with hooks.</p>

			<div className="grid">
				<a href="https://nextjs.org/docs" className="card">
					<h3>Get started &rarr;</h3>
					<p>Start here :)</p>
				</a>

				<a href="https://nextjs.org/learn" className="card">
					<h3>Documentation &rarr;</h3>
					<p>Description for API</p>
				</a>

				<a href="https://github.com/zeit/next.js/tree/master/examples" className="card">
					<h3>Examples &rarr;</h3>
					<p>See how to use it</p>
				</a>

				<a
					href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className="card">
					<h3>Form constructor &rarr;</h3>
					<p>Create your form with us</p>
				</a>
			</div>

			<style jsx>{`
				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.logo {
					height: 1em;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>
		</BaseLayout>
	);
}
