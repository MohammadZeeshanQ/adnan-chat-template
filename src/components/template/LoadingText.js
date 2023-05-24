import React from "react";
import styled, { keyframes } from "styled-components";

// animation
const JumpAnimation = keyframes`
    from{
        transform: translateY(0px) ;
    }
    to{
        transform: translateY(-7px);
    }
`;

// styles
const Container = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: flex-start;

	@media (max-width: 600px) {
		padding: 1.5rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem 0;
	}
`;

const Wrapper = styled.div`
	width: 20%;
	background-color: var(--blueColor);
	padding: 1rem;
	border-radius: 0 2rem 2rem 2rem;

	@media (max-width: 600px) {
		padding: 1rem 1.5rem;
		width: 80%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem 1.5rem;
	}
`;

const TextContent = styled.div`
	display: flex;
	color: #fff;
	font-weight: 900;
	letter-spacing: 3px;
	line-height: 1.5;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const DotFirst = styled.p`
	animation: ${JumpAnimation} 1s infinite alternate;
`;

const DotSecond = styled.p`
	animation: ${JumpAnimation} 1s infinite alternate;
	animation-delay: 0.3s;
`;

const DotThird = styled.p`
	animation: ${JumpAnimation} 1s infinite alternate;
	animation-delay: 0.6s;
`;

const DotForth = styled.p`
	animation: ${JumpAnimation} 1s infinite alternate;
	animation-delay: 0.9s;
`;

export default function LoadingText() {
	return (
		<Container>
			<Wrapper>
				<TextContent>
					<DotFirst>.</DotFirst>
					<DotSecond>.</DotSecond>
					<DotThird>.</DotThird>
					<DotForth>.</DotForth>
				</TextContent>
			</Wrapper>
		</Container>
	);
}
