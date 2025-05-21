export type Sound = {
    id: number;
    sound: HTMLAudioElement;
    category?: 'click' | 'hover' | 'new-page';
  };

export const sounds: Sound[] = [
    {
        id: 1,
        sound: new Audio('/assets/sounds/click-sound.mp3'),
        category: 'click',
    },
];

export const playClickSound = () => {
    const clickSound = sounds.find(s => s.category === 'click');
    if (clickSound) {
        setTimeout(() => {
            try {
                clickSound.sound.currentTime = 0;
                clickSound.sound.play()
                    .then(() => console.log('Sound played successfully'))
                    .catch(err => console.error('Error playing sound:', err));
            } catch (error) {
                console.error('Error in playClickSound:', error);
            }
        }, 10);
    }
};