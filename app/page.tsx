import {Card} from "@/components/Card/Card";
import {AppShell, AppShellHeader, AppShellMain, Group, Image, Stack, Title} from "@mantine/core";
import {Header} from "@/components/Header/Header";
import {Profile} from "@/components/Profile/Profile";
import {Metadata} from "next";
import background from "../public/Frame 51.png"
import NextImage from "next/image";
import {ColorScheme} from "@/components/ColorScheme/ColorScheme";

const title = "ПРОШП 2024";
const description = `Регистрация до 23:59 20.10.2024. Отбор до 23:59 20.10.2024. Очный тур - 26.10.2024.`

export const metadata: Metadata = {
    title: 'Олимпиады',
}

export default function HomePage() {
    return (
        <>
            <ColorScheme scheme="dark"/>
            <Image component={NextImage} className="fixed_background" src={background} alt=""/>
            <AppShell>
                <AppShellHeader style={{position: "static", backgroundColor: "transparent"}} withBorder={false}>
                    <Header profile={<Profile/>} style={{justifyContent: "flex-end"}}/>
                </AppShellHeader>
                <AppShellMain style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "20px",
                    minHeight: "calc(100dvh - 60px)",
                }}>
                    <Stack>
                        <Stack align="center">
                            <Title style={{color: "white", textAlign: "center"}}>Текущие олимпиады</Title>
                            <Group justify="center">
                                <Card title={title} description={description} id="proshp2024" open={true}/>
                                <Card title={title} description={description} id="proshp2024" open={true}/>
                                <Card title={title} description={description} id="proshp2024" open={true}/>
                            </Group>
                        </Stack>
                        <Stack align="center">
                            <Title style={{color: "white", textAlign: "center"}}>Прошедшие олимпиады</Title>
                            <Group justify="center">
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                                <Card title={title} description={description} id="proshp2024"/>
                            </Group>
                        </Stack>
                    </Stack>
                </AppShellMain>
            </AppShell>
        </>
    )
}
