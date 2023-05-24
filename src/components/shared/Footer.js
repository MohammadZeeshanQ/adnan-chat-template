import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0.5rem 0;
`;

const Wrapper = styled.div`
	text-align: center;
`;

const Text = styled.a`
	color: #000000;
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	text-underline-offset: 2px;
`;

export default function Footer() {
	return (
		<Container>
			<Wrapper>
				<Text href='https://www.dreamlabai.com/' target='_blank' rel='noopener noreferrer'>
					Power by Dream Lab AI
				</Text>
			</Wrapper>
		</Container>
	);
}
