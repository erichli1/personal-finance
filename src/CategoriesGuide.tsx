import { Center, Grid, GridItem, Badge } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CATEGORIES } from './categories';
import { Category } from './types';

function createNewCategory(titleString: string, iconNode: ReactNode) {
    return {
        title: titleString,
        icon: iconNode,
    }
}

export default function CategoriesGuide() {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {CATEGORIES.map((category: Category, index) => {
                return <GridItem key={'category-' + index}><Center>{category.icon}&nbsp;&nbsp;<Badge colorScheme={category.color}>{category.title}</Badge></Center></GridItem>
            })}
        </Grid>
    )
}