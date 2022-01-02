import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

interface Book {
  id: string;
  name: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background}; ;
`;

export const AddBookButton = styled(BorderlessButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(5)}px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${RFPercentage(10)}px ${RFPercentage(5)}px ${RFPercentage(5)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(16)}px;
`;

export const BooksList = styled(FlatList as new () => FlatList<Book>)`
  margin-top: ${RFValue(16)}px;
`;

export const SeparatorItemComponent = styled.View`
  margin-top: ${RFValue(16)}px;
`;
