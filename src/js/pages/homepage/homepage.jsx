import React from 'react';

import './homepage.scss';
import MountainIcon from 'Components/mountain-icon/mountain-icon';

const HomePage = () => pug`
    .homepage
      MountainIcon(name="лявочорр", imageUrl='05lyavochorr', labelSize="w-200").lyavochorr.mountain
      MountainIcon(name="часначорр", imageUrl='01chasnachor', labelSize="w-190").chasnachor.mountain
      MountainIcon(name="ферсмана", imageUrl='02fersmana', labelSize="w-200").fersmana.mountain
      MountainIcon(name="юдычвумчорр", imageUrl='03udichvymchorr', labelSize="w-245").udichvymchorr.mountain
      MountainIcon(name="кукисвумчорр", imageUrl='06kykisvymchorr', labelSize="w-260").kykisvymchorr.mountain
      MountainIcon(name="тахтарвумчорр", imageUrl='07tahtarvymchorr', labelSize="w-260").tahtarvymchorr.mountain
      MountainIcon(name="вудъяврчорр", imageUrl='04vudiavrchorr', labelSize="w-230").vudiavrchorr.mountain
      MountainIcon(name="айкуайвенчорр", imageUrl='08aikyivenchorr', labelSize="w-230").aikyivenchorr.mountain
`;

export default HomePage;
