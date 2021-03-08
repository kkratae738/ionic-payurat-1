import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

type Item = {
    src: string;
    text: string;
};

const items : Item[] = [
    {
        src: './images/badtzaom3.jpg',
        text: 'รูปที่1'
    },
    {
        src: './images/badtzaom2.jpg',
        text:  'รูปที่2'
    },
    {
        src: './images/badtzaom1.jpg',
        text: 'รูปที่3'
    },
]

export const Slides: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
    { items.map((image, i) => (
      <IonSlide>
          <IonImg src={image.src}/>
        <h1>{image.text}</h1>
      </IonSlide>
    ))}
    </IonSlides>
  </IonContent>
);