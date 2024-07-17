import {useState} from "react";
import { useNavigate } from "react-router-dom";

const useTopbar = () => {
    const navigate = useNavigate();

    const GoToMain = () => {
        navigate("/");
    }

    return {
        GoToMain,
    }
}

export default useTopbar;