import {User} from "@/api/types";

class Api {
    public async Login(login: string, pwd: string): Promise<void> {

    }

    public async Logout(): Promise<void> {

    }

    public async fetchProfile(id: number): Promise<User> {
        return new Promise((resolve: (user: User) => void, reject) => {
            setTimeout(() => resolve(
                {
                    id: id,
                    firstName: "Василий",
                    middleName: "Филиппович",
                    lastName: "Пупкин"
                }))
        })
    }

    public async fetchMe(): Promise<User> {
        return new Promise((resolve: (user: User) => void, reject) => {
            setTimeout(() => resolve(
                {
                    id: 228,
                    firstName: "Василий",
                    middleName: "Филиппович",
                    lastName: "Пупкин"
                }), 1000)
        })
    }
}

export {Api};