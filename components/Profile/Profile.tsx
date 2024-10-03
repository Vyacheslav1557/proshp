"use client";

import {ActionIcon, Anchor, Button, Group, Skeleton} from "@mantine/core";
import styles from "./profile.module.css"
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {IconLogout} from "@tabler/icons-react";
import {observer} from 'mobx-react-lite';
import {profileState} from "@/components/Profile/Profile.state";
import {useEffect} from "react";


const Profile = observer(() => {
    const pathname = usePathname();

    const {profile, fetchUser, resetState} = profileState;

    useEffect(() => {
        fetchUser();

        return () => {
            resetState();
        };
    }, []);

    if (profile.status == "loading") {
        return (
            <div className={styles.profile__wrapper}>
                <Group w={300} justify="end">
                    <Skeleton height={50} circle/>
                </Group>
            </div>
        )
    }

    if (profile.status == "failure" || profile.status == "idle") {
        return (
            <div className={styles.profile__wrapper}>
                <Group w={300} justify="end">
                    <Button
                        renderRoot={(props) => <Link
                            href={{pathname: "/auth/login", query: {to: pathname}}} {...props}/>}
                        variant="outline">Войти
                    </Button>
                </Group>
            </div>
        )
    }

    return (
        <div className={styles.profile__wrapper}>
            <Group w={300} justify="end">
                <Anchor component={Link} href={`/users/${profile.user.id}`}
                        style={{
                            color: "white",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            width: "200px"
                        }}>
                    {profile.user.firstName} {profile.user.lastName}
                </Anchor>
                <ActionIcon variant="transparent" color="red.9" onClick={resetState}>
                    <IconLogout/>
                </ActionIcon>
            </Group>
        </div>
    )
})

export {Profile}