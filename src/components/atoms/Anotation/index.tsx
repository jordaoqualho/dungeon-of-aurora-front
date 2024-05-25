import { AnotationType } from "@/types";
import { useEffect, useState } from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { DeleteSwipe } from "..";
import {
  AnotationContainer,
  AnotationHeader,
  AnotationInfo,
  Container,
} from "./styles";

type AnotationProps = {
  anotation: AnotationType;
  removeAnotation: (anotationId?: string) => void;
  setSelectedAnotation: (anotation: AnotationType) => void;
  openModal: () => void;
};

export function Anotation({
  anotation,
  removeAnotation,
  setSelectedAnotation,
  openModal,
}: AnotationProps) {
  const [wasDeleted, setWasDeleted] = useState(false);

  useEffect(() => {
    if (!wasDeleted) return;

    setTimeout(() => {
      removeAnotation(anotation._id);
    }, 500);
  }, [wasDeleted]);

  return (
    <Container $wasDeleted={wasDeleted}>
      <SwipeToDelete
        onDelete={() => setWasDeleted(true)}
        id={anotation._id}
        deleteComponent={<DeleteSwipe />}
        className="swiper"
      >
        <AnotationContainer
          className="flex_csb"
          onClick={() => {
            setSelectedAnotation(anotation);
            openModal();
          }}
        >
          <div className="flex_ssc" style={{ gap: 8, width: "100%" }}>
            <AnotationHeader className="flex_csb">
              <div className="flex_ccr" style={{ gap: 8 }}>
                <h1 className="title">{anotation.title}</h1>
              </div>
              {/* <button className="level">N.{spell.level}</button> */}
            </AnotationHeader>
            <AnotationInfo className="flex_csb">
              <p className="info">{anotation.information}</p>
            </AnotationInfo>
          </div>
        </AnotationContainer>
      </SwipeToDelete>
    </Container>
  );
}
