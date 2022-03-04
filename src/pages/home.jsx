import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url = "https://avatars.githubusercontent.com/u/22506647?v=4" alternativeText = "image"/>
                <UserDetails name="Júnior Moura" login="#juniormoura10" bio="ipsen bios" />
                <UserNumbers />
            </UserContainer>
        </Container>
    );
}