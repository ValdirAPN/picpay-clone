import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 280px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 40px;
    color: #fff;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 16px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const Actions = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 48px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center
    width: 140px;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 24px;
    margin: 0 10px
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 12px;
`;

export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const PaymentMethods = styled.View`
    margin-top: 24px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
    font-size: 14px;
`;

export const Card = styled.View`
    background: #1e232a;
    padding: 20px;
    border-radius: 8px;
    margin-top: 12px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardInfo = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin-top: 16px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const AddLabel = styled.Text`
    color: #0db060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
`;

export const UseTicketContainer = styled.View`
    align-items: center;
    margin-top: 20px;
`;

export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
`;

export const UseTicketLabel = styled.Text`
    color: #0db060;
    font-size: 14px;
    font-weight: bold;
    margin-left: 12px;
    text-decoration: underline;
`;
