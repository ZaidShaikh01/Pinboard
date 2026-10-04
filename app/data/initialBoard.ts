import type { Card, Column } from '~/types';

export const initialColumns: Column[] = [
  { id: 'todo', title: 'To do' },
  { id: 'doing', title: 'Doing' },
  { id: 'done', title: 'Done' },
];

export const initialCards: Card[] = [
  { id: '1', title: 'Design the data model', columnId: 'todo', description: 'Decide the card and column types', createdAt: Date.now() },
  { id: '2', title: 'Build the login page', columnId: 'todo', description: 'Needed for Stage 2', createdAt: Date.now() },
  { id: '3', title: 'Write the README', columnId: 'todo', createdAt: Date.now() },
  { id: '4', title: 'Add the card dialog', columnId: 'doing', description: 'Open it from the Add button', createdAt: Date.now() },
  { id: '5', title: 'Add drag and drop', columnId: 'doing', createdAt: Date.now() },
  { id: '6', title: 'Set up the repo', columnId: 'done', description: 'Vite, React, TypeScript, Tailwind', createdAt: Date.now() },
  { id: '7', title: 'Create the types', columnId: 'done', createdAt: Date.now() },
];