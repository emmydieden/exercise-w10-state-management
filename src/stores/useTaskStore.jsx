import {create} from "zustand"

//This is our Global state
export const useTaskStore = create((set) => ({
//List (array) with tasks
    tasks: ["Vacuum clean", "Water plants", "Code", "Sleep", "Eat", "Drink lots of wine"],
//Method 
    addTask: (task) => set((state) =>({ tasks: [...state.tasks, task] }))

}))
