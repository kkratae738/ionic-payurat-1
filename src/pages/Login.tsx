import { Toast } from '@capacitor/core';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton } from '@ionic/react';

import React, { useState } from 'react';
import {loginUser} from '../firebaseConfig';
import { toast } from '../toast'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(){
    const res = await loginUser(email, password);
    if(res){
      console.log('You have login in!')
      toast('You have login in!')
    }
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
      <IonItem>
            <IonLabel position="floating">Username or Email</IonLabel>
            <IonInput onIonChange={(e:any) => setEmail(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput onIonChange={(e:any) => setPassword(e.target.value)} type="password" />
          </IonItem>
      </IonList>
      <IonButton expand="block" color="primary" onClick={login} >เข้าสู่ระบบ</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
