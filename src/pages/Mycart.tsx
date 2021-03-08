import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

interface product {
  titie: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}

const products: product[] = [
  {
    titie: "รถ",
    price: 1350000,
    stock: 5,
    image: "./images/badtzaom2.jpg",
    description: "สวย",
  },
  {
    titie: "รถ",
    price: 1350000,
    stock: 5,
    image: "./images/badtzaom1.jpg",
    description: "สวย",
  },
];

const unit=1;

const Mycart: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mycart (ตะกร้าสินค้า)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {products.map((item, index) => (
            <IonItem key={index} >
              <IonLabel>{item.titie}</IonLabel>
              <IonLabel>{unit}</IonLabel>
              <IonLabel>{item.price}</IonLabel>
              <IonLabel>{unit * item.price}</IonLabel>
              <IonButtons  color="danger"> Delete</IonButtons>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Mycart;
