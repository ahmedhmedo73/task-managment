import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  taskList: any[] = [
    {
      category: 'To do',
      border: '1px solid #cad9f6',
      background:
        'linear-gradient(0deg, #eef2fc, #eef2fc),linear-gradient(0deg, #cad9f6, #cad9f6)',
      color: '#14367b',
      icon: 'assets/images/tasks/toDo.svg',
      tasks: [
        {
          image: 'assets/images/tasks/cards/card1.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card3.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      category: 'In progress',
      border: '1px solid #ffe4c2',
      background:
        'linear-gradient(0deg, #fff6eb, #fff6eb), linear-gradient(0deg, #ffe4c2, #ffe4c2)',
      color: '#8f4f00',
      icon: 'assets/images/tasks/inProgress.svg',
      tasks: [
        {
          image: 'assets/images/tasks/cards/card1.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card3.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      category: 'Done',
      border: '1px solid #ffe4c2',
      background:
        'linear-gradient(0deg, #fff6eb, #fff6eb), linear-gradient(0deg, #ffe4c2, #ffe4c2)',
      color: '#8f4f00',
      icon: 'assets/images/tasks/done.svg',
      tasks: [
        {
          image: 'assets/images/tasks/cards/card1.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card3.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'assets/images/tasks/cards/card2.svg',
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        },
      ],
    },
  ];
}
