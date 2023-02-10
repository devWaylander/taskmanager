import { Todo } from "../wrappers/TodoContext";

export const getSortedTodos = (list: Todo[], params?: any): Todo[] => {
  const sortedList: Todo[] = [...list].sort((a, b) => {

    let aDate = a.date ?? null;
    let bDate = b.date ?? null;

    if (aDate && !bDate) {
      return 1
    } else if (!aDate && bDate) {
      return -1
    } else {
      return 0
    }

  })
  
  return sortedList;
}