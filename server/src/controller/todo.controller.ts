import { Request, Response } from "express";
import Todo from '../model/todo.model.ts';

export const addTodo = async (request:Request, response:Response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).send({message:error});
    }
}

export const getAllTodos = async (request:Request, response:Response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).send({message:error});
    }
}

export const toggleTodoDone = async (request:Request, response:Response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef?.done }
        )

        await todo?.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).send({message:error});
    }
}

export const updateTodo = async (request:Request, response:Response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).send({message:error});
    }
}

export const deleteTodo = async (request:Request, response:Response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(todo);
    } catch (error) { 
        return response.status(500).send({message:error});
    }
}