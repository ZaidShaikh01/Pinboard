import type { Column } from "~/types";


export const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To do',
    cards: [
      { id: '1', title: 'Design the data model',description:'lorem10 sdfghjd fghjsdf ghdfgh jkfgh jkdfghj', createdAt: Date.now() },
      { id: '2', title: 'Build the login page', createdAt: Date.now() },
    ],
  },
  {
    id: 'doing',
    title: 'Doing',
    cards: [{ id: '3', title: 'Add drag and drop', createdAt: Date.now() }],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [{ id: '4', title: 'Set up the repo', createdAt: Date.now() }],
  },
]