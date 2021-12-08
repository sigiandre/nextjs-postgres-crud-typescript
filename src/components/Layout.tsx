import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";

export default function Layout({ children }: {children: JSX.Element | JSX.Element[]}) {
    return (
        <div>
            <NavBar />
            <main style={{ background: '#212121'}}>
                <Container style={{ paddingTop: '2rem', height: '90vh' }}>
                    {children}
                </Container>
            </main>
        </div>
    )
}