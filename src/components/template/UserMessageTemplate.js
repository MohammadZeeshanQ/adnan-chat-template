import React from "react";
import styled from "styled-components";

// styles
const Container = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: flex-end;

	@media (max-width: 600px) {
		padding: 1.5rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem 0;
	}
`;

const Wrapper = styled.div`
	width: 70%;
	background-color: var(--orangeColor);
	padding: 1rem;
	border-radius: 2rem 2rem 0 2rem;

	@media (max-width: 600px) {
		padding: 1rem 1.5rem;
		width: 80%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem 1.5rem;
	}
`;

const TextContent = styled.p`
	color: #fff;
	letter-spacing: 0.5px;
	line-height: 1.5;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

export default function UserMessageTemplate({ Text }) {
	return (
		<Container>
			<Wrapper>
				<TextContent>{Text}</TextContent>
			</Wrapper>
		</Container>
	);
}
