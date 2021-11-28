import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: any;
  setShowModal: any;
}) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};