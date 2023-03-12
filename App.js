import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import CardBadge from './src/components/Cards/CardBadge';

export default function App() {

  const badges = [
    {
      id: 1,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 2,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 3,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 4,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 5,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 6,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 7,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 8,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 9,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 10,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 11,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 12,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 13,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 14,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 15,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 16,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 17,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 18,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 19,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 20,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
    {
      id: 21,
      img: '../../../assets/badge.png',
      descricao: 'java',
      badgeNivelId: {
        id: 1,
        descricao: 'Nível 1'
      }
    },
  ];


  return (
    <>
      <StatusBar
        backgroundColor="#004587"
        barStyle="light-content"//light-content
        translucent={false}
        animated={true}
        networkActivityIndicatorVisible={true}
      />
      <FlatList
        numColumns={3}
        data={badges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardBadge data={item} />}
      />
    </>
  );
}