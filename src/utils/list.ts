import { Todo } from "../wrappers/TodoContext";

export const getSortedTodos = (list: Todo[], params?: any): Todo[] => {
  const sortedList: Todo[] = list.slice().sort((a, b) => {
    if (a.compleationDate && !b.compleationDate) {
      return 1;
    } else if (!a.compleationDate && b.compleationDate) {
      return -1;
    } else if (!a.compleationDate && !b.compleationDate) {
      return 0;
    } else {
      // @ts-ignore we know that a.compleationDate and b.compleationDate are defined here
      return a.compleationDate > b.compleationDate ? 1 : -1;
    }
  });

  return sortedList;
};
