import React from "react";
import styled from "styled-components";
import { BiTime } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

export const StatusCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Status = styled.span`
	text-align: center;
	font-weight: 800;
	color: var(--thirdtext);
	font-size: 20px;
`;

const OrderStatus = ({ status }) => {
	return (
		<StatusCont>
			{status === "check" && (
				<Status>
					<AiOutlineCheck />
				</Status>
			)}
			{status === "pending" && (
				<Status style={{ color: "yellow" }}>
					<BiTime />
				</Status>
			)}
			{status === "cancel" && (
				<Status style={{ color: "darkred" }}>
					<MdOutlineCancel />
				</Status>
			)}
		</StatusCont>
	);
};

export default OrderStatus;
