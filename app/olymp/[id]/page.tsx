import {Anchor, AppShell, AppShellFooter, AppShellHeader, AppShellMain, Image, Title} from "@mantine/core";
import NextImage from "next/image";
import background from "@/public/Frame 53.png";
import {ColorScheme} from "@/components/ColorScheme/ColorScheme";
import {Header} from "@/components/Header/Header";
import {Profile} from "@/components/Profile/Profile";
import {Nav} from "@/components/Nav/Nav";
import Link from "next/link";

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    {params}: Props,
): Promise<{ title: string }> {
    const id = params.id

    return {
        title: `${id}`,
    }
}

export default function OlympPage(props: Props) {
    return (
        <>
            <ColorScheme scheme="dark"/>
            <Image component={NextImage} className="fixed_background" src={background} alt=""/>
            <AppShell>
                <AppShellHeader style={{position: "static", backgroundColor: "transparent"}} withBorder={false}>
                    <Header
                        profile={<Profile/>}
                        nav={
                            <Nav className="mantine-visible-from-sm">
                                <Anchor component={Link} style={{color: "white"}} href="/">
                                    К олимпиадам
                                </Anchor>
                            </Nav>
                        }
                        logo={<Title style={{color: "white", margin: "auto 0"}}
                                     className="mantine-visible-from-md">
                            {props.params.id}
                        </Title>}
                        style={{justifyContent: "space-evenly"}}
                    />
                </AppShellHeader>
                <AppShellMain style={{
                    minHeight: "calc(100dvh - 60px)",
                }}>

                </AppShellMain>
                <AppShellFooter>

                </AppShellFooter>
            </AppShell>
        </>
    )
}