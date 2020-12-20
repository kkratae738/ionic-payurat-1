import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  cartOutline, 
  cartSharp,
  carSportOutline, 
  carSportSharp, 
  homeOutline,
  homeSharp, 
  personAddOutline, 
  personAddSharp, 
  cardOutline, 
  cardSharp, 
  chatbubblesOutline, 
  chatbubblesSharp, 
  chevronForwardOutline,
  logInOutline,
  logInSharp
  } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Inbox',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Register',
    url: '/page/Outbox',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  },
  {
    title: 'Product',
    url: '/page/Favorites',
    iosIcon: carSportOutline,
    mdIcon: carSportSharp
  },
  {
    title: 'Mycart',
    url: '/page/Archived',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/page/Trash',
    iosIcon: cardOutline,
    mdIcon: cardSharp
  },
  {
    title: 'Contact Us',
    url: '/page/Spam',
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubblesSharp
  },
  {
    title: 'Login',
    url: '/page/login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  }
];

const labels = ['BMW i8', 'Toyota Supra', 'Audi R8', 'Ferrari F8', 'Nissan GT-R', 'Porsche 911','Ford Mustang'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={ chevronForwardOutline } />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
