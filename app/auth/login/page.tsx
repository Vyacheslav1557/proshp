"use server";

import {Anchor, AppShell, AppShellHeader, AppShellMain, Group, Image} from "@mantine/core";
import {Header} from "@/components/Header/Header";
import {Nav} from "@/components/Nav/Nav";
import Link from "next/link";
import background from "../../../public/Frame 52.png"
import NextImage from "next/image";
import {LoginBlock} from "@/components/LoginBlock/LoginBlock";
import {ColorScheme} from "@/components/ColorScheme/ColorScheme";

type Props = {
    searchParams : {
        to: string
    }
}

export async function generateMetadata(props: Props) {
    return {
        title: 'Вход в аккаунт',
    }
}



async function LoginPage(props: Props) {
    return (
        <>
            <ColorScheme scheme="light"/>
            <Image component={NextImage} className="fixed_background" src={background} alt=""/>
            <AppShell style={{height: "100%"}}>
                <AppShellHeader style={{position: "static", backgroundColor: "transparent"}} withBorder={false}>
                    <Header nav={
                        <Nav>
                            <Anchor component={Link} style={{color: "white"}} href="/">
                                К олимпиадам
                            </Anchor>
                        </Nav>
                    } style={{justifyContent: "space-evenly"}}/>
                </AppShellHeader>
                <AppShellMain style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    minHeight: "calc(100dvh - 60px)",
                }}>
                    <Group>
                        <LoginBlock to={props.searchParams.to}/>
                    </Group>
                </AppShellMain>
            </AppShell>
        </>
    )
}

// LoginPage.getInitialProps = async ({query}) => {
//     const {to} = query;
//     return {to};
// };

export default LoginPage;