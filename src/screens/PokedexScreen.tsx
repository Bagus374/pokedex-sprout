import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {usePokemons} from '../hooks/usePokemons';
import {PokedexItem} from '../components/PokedexItem';
import {Spinner} from '../components/base/Spinner';
import {colors} from '../theme/colors';
import {CustomText} from '../components/base/CustomText';

export const PokedexScreen = () => {
  const {pokemons, getPokemons, status} = usePokemons();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (status === 'loading' && pokemons.length === 0) {
    return <Spinner />;
  }

  if (status === 'error' || (status === 'success' && pokemons.length === 0)) {
    return (
      <View style={styles.withoutResults}>
        <CustomText type='bold' style={styles.withoutResultText} content='At this time there are no pokemons available.' />
        <Image
          style={styles.withoutResultImg}
          source={require('../assets/pokeball-white.png')}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => <PokedexItem item={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={getPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<Spinner />}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          removeClippedSubviews
          numColumns={2}
          ListHeaderComponent={
            <View style={styles.titleContainer}>
              <CustomText type='bold' style={styles.title} content='Pokedex' />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginLeft: 20,
    color: 'black',
  },
  withoutResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  withoutResultText: {
    fontSize: 25,
    width: '80%',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  withoutResultImg: {
    width: 150,
    height: 150,
    opacity: 0.9,
  },
});
