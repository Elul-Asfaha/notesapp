import {
    deleteActionType,
    getActionType,
    postActionType,
    putActionType,
} from "@/types/action";
import axios from "axios";
import axiosInstance from "./axiosInterceptor";
export const handleGetAction = async ({ endpoint }: getActionType) => {
    const response = await axios.get(endpoint);
    return response.data;
};

export const handlePostAction = async ({ endpoint, body }: postActionType) => {
    const response = await axios.post(endpoint, body);
    return response.data;
};

export const handleDeleteAction = async ({
    endpoint,
    body,
}: deleteActionType) => {
    const response = await axios.delete(endpoint, body);
    return response.data;
};

export const handlePutAction = async ({ endpoint, body }: putActionType) => {
    const response = await axios.put(endpoint, body);
    return response.data;
};

export const handleGetActionWithToken = async ({ endpoint }: getActionType) => {
    const response = await axiosInstance.get(endpoint);
    return response.data;
};

export const handlePostActionWithToken = async ({
    endpoint,
    body,
}: postActionType) => {
    const response = await axiosInstance.post(endpoint, body);
    return response.data;
};

export const handleDeleteActionWithToken = async ({
    endpoint,
    body,
}: deleteActionType) => {
    const response = await axiosInstance.delete(endpoint, body);
    return response.data;
};

export const handlePutActionWithToken = async ({
    endpoint,
    body,
}: putActionType) => {
    const response = await axiosInstance.put(endpoint, body);
    return response.data;
};
