import React from "react";
import styled from "styled-components";

// Assets
import BackIconPath from "../../assets/icons/arrow-left.png";

// styles
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background-color: var(--mainColor);
	padding: 0.5rem 0;
`;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const BackBox = styled.div``;

const BackIcon = styled.img`
	display: block;
	width: 2.5rem;
	object-fit: contain;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.05;
	}
	@media (max-width: 600px) {
		width: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1.8rem;
	}
`;

const AvatarBox = styled.div``;

const AvatarIcon = styled.img`
	display: block;
	width: 3rem;
	object-fit: contain;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.05;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2.2rem;
	}
`;

export default function Navbar({ setShowMainMessage, setOpenAvatarSelection, avatarIconState }) {
	return (
		<Container>
			<Wrapper>
				<BackBox onClick={() => setShowMainMessage(true)}>
					<BackIcon src={BackIconPath} loading='lazy' height='auto' width='auto' alt='Go Back Button' />
				</BackBox>
				<AvatarBox>
					<AvatarIcon
						src={avatarIconState}
						loading='lazy'
						height='auto'
						width='auto'
						alt='User Avatar'
						onClick={() => setOpenAvatarSelection(true)}
					/>
				</AvatarBox>
			</Wrapper>
		</Container>
	);
}
