"use client";
import React, { useState } from "react";
import { SignInFlow } from "../types";
import { SignUpCard } from "./sign-up-card";
import { SignInCard } from "./sign-in-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");
    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard /> : <SignUpCard />}
            </div>
        </div>
    )
}