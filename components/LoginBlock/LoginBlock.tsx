"use client";


import {useForm} from "@mantine/form";
import {Anchor, Button, Group, PasswordInput, Stack, TextInput} from "@mantine/core";
import {IconAt, IconLockPassword} from "@tabler/icons-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {LoginState} from "@/components/LoginBlock/state";
import {Api} from "@/api/auth";


type Props = {
    to: string
}

type FormValues = {
    email: string
    password: string
}

const initialValues: FormValues = {
    email: "",
    password: ""
}

const LoginBlock = (props: Props) => {
    console.log(props.to)

    const url = props.to || "/";

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: initialValues,
        validate: {
            email: (value) => (value.length < 2 ? 'Неверный логин' : null),
            password: (value) => (value.length < 2 ? 'Неверный пароль' : null),
        },
    });

    const router = useRouter()
    const {login} = new LoginState(new Api());

    const handleSubmit = (values: FormValues) => {
        login(values.email, values.password);
        router.push(url)
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack style={{
                backgroundColor: "var(--mantine-color-gray-0)",
                borderRadius: "var(--mantine-radius-default)",
                padding: "10px",
            }}>
                <TextInput
                    placeholder="Логин"
                    leftSection={<IconAt size="18"/>}
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    placeholder="Пароль"
                    leftSection={<IconLockPassword size="18"/>}
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
                <Group justify="space-between">
                    <Stack gap={3}>
                        <Anchor component={Link} href="/auth/register" style={{
                            color: "var(--mantine-color-gray-5)",
                            fontSize: "var(--mantine-font-size-xs)"
                        }}>
                            создать
                        </Anchor>
                        <Anchor component={Link} href="/auth/recover" style={{
                            color: "var(--mantine-color-gray-5)",
                            fontSize: "var(--mantine-font-size-xs)"
                        }}>
                            восстановить
                        </Anchor>
                    </Stack>
                    <Button type="submit">
                        Войти
                    </Button>
                </Group>
            </Stack>
        </form>
    )
}

export {LoginBlock};