import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const pageAnimation =
  trigger('pageAnimation', [
    transition('* => *', [
      query(':enter',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'scale(0.95)', opacity: 0.9}),
          animate('0.5s ease-in-out',
            style({transform: 'scale(1)', opacity: 1}))
        ], {optional: true})
      ])
    ])
  ]);
