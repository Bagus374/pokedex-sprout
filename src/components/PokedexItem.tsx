import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { PokemonCustom } from '../types/pokemonList'
import { getImageColors } from '../utils/getColors'
import { Card } from './Card';
import { usePokemon } from '../hooks/usePokemon';

type Props = {
    item: PokemonCustom,
}
const DEFAULT_COLOR = '#f5f5f5'

const PokemonCard = ({ item }: Props) => {
    const [background, setBackground] = useState(DEFAULT_COLOR)
    const { picture, name, id, } = item
    const { pokemon } = usePokemon(item.id)
    const { navigate } = useNavigation()

    const getPictureColors = useCallback(
        async () => {
            const [primary = DEFAULT_COLOR] = await getImageColors(picture)
            setBackground(primary)
        },
        [picture],
    )

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getPictureColors()
        }

        return () => {
            isMounted = false
        }
    }, [])

    if (background === DEFAULT_COLOR) {
        return <Card id={id} name={name} types={pokemon?.types} pokeballColor='gray' />
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('Pokemon', {
                pokemonItem: item,
                color: background
            })}
        >
            <Card id={id} name={name} types={pokemon?.types} color='#fff' backgroundColor={background}>
                <Image source={{ uri: picture }} style={styles.img} />
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -10,
        right: 0,
        zIndex: 1
    }
})

export const PokedexItem = React.memo(PokemonCard)