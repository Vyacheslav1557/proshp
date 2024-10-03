"use client";

import {makeAutoObservable} from 'mobx';
import {User} from '@/api/types';
import {Api} from "@/api/auth";


type ProfileStateType = {
    status: "loading"
} | {
    user: User
    status: "success"
} | {
    error: any // FIXME
    status: "failure"
} | {
    status: "idle"
}


class ProfileState {
    profile: ProfileStateType = {status: "idle"};
    api: Api

    constructor(api: Api) {
        makeAutoObservable(this);
        this.api = api
    }

    fetchUser = async () => {
        this.profile.status = 'loading';

        try {
            this.profile = {
                user: await this.api.fetchMe(),
                status: "success"
            }
        } catch (error) {
            this.profile = {
                error: error,
                status: "failure"
            }
        }
    };

    resetState = () => {
        this.profile = {
            status: "idle"
        }
    };
}

export const profileState = new ProfileState(new Api());