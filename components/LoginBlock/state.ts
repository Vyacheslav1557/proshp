"use client";

import {makeAutoObservable} from 'mobx';
import {Api} from "@/api/auth";

class LoginState {
    api: Api

    constructor(api: Api) {
        makeAutoObservable(this);
        this.api = api
    }

    login = async (login: string, pwd: string) => {
        await this.api.Login(login, pwd)
    };
}

export {LoginState};