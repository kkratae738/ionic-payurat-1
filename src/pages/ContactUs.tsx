import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ContactUs: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>ContactUs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
       ติดต่อเรา
      </IonContent>
    </IonPage>
  );
};

export default ContactUs;
