import { IonButtons,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonToolbar,
   IonCard,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonCardContent,
   IonItem,IonIcon,
   IonLabel,
   IonButton,
   IonImg } from '@ionic/react';

import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface product {
  titie: string,
  price: number,
  stock: number,
  image: string,
  description: string
}

const products : product[] = [
  {
    titie: 'รถ',
    price: 1350000,
    stock: 5,
    image: './images/badtzaom2.jpg',
    description: 'สวย'
  },
  {
    titie: 'รถ',
    price: 1350000,
    stock: 5,
    image: './images/badtzaom1.jpg',
    description: 'สวย'
  }
]

const Product: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Product</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
    { products.map((product, index) => (    
       <IonCard key={index}>
         <IonImg src={product.image}/>
          <IonCardHeader>
            <IonCardTitle>{product.titie}</IonCardTitle>
            <IonCardSubtitle>ราคา {product.price}</IonCardSubtitle>
            <IonCardSubtitle>จำนวนในสต๊อก {product.stock}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
           {product.description}
      </IonCardContent>
        </IonCard>
    ))}
        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>
          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Product;
