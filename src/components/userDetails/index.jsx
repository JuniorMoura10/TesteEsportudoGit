import {
    Container,
    Name,
    UserName,
    Description
} from './style';


const UserDetails = props => (
    <Container>
        <Name>{props?.name}</Name>
        <UserName>{props?.login}</UserName>
        <Description>{props?.bio}</Description>
    </Container>
);

export default UserDetails;