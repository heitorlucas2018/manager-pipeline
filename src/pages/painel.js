import { Header, Container, Card as CardGroup } from "semantic-ui-react";
import Card from "../components/card"

const Painel = () => (
    <Container>
        <Header as="h3"> Painel</Header>
        <CardGroup.Group itemsPerRow={4}>
            <Card title="Jouney Pisp" subtitle="Openfinance" description="Repositori to pisp" />
            <Card title="Jouney Pisp" subtitle="Openfinance" description="Repositori to pisp" />
            <Card title="Jouney Pisp" subtitle="Openfinance" description="Repositori to pisp" />
            <Card title="Jouney Pisp" subtitle="Openfinance" description="Repositori to pisp" />
            <Card title="Jouney Pisp" subtitle="Openfinance" description="Repositori to pisp" />
        </CardGroup.Group>
    </Container>
)

export default Painel;