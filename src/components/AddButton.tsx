import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

type AddButtonProps = { navigation: string };

export default function AddButton({
  children,
  navigation,
}: React.PropsWithChildren<AddButtonProps>) {
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      onClick={() => navigate(navigation)}
    >
      <BiPlus color="#1da2dc" size={20} />
      <ScP>{children}</ScP>
    </div>
  );
}

const ScP = styled.p`
  color: #1da2dc;
`;
