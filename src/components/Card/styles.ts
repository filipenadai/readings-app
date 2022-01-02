import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  height: ${RFPercentage(20)}px;
`;

export const Header = styled.View`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFPercentage(5)}px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
  margin-left: ${RFValue(8)}px;
`;
