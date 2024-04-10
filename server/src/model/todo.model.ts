import mongoose from "mongoose"; 

export interface TodoDocument extends mongoose.Document {
  data: string;
  done: boolean; 
  createdAt: Date;
  updatedAt: Date; 
}

const TodoSchema = new mongoose.Schema(
  {
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  },
  { timestamps: true }
);

const Todo = mongoose.model<TodoDocument>("todo", TodoSchema);

export default Todo;