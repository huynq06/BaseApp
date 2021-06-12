import React,{useState} from 'react'
import {View,Text} from 'react-native'
import {categoriesTypes as types} from '../../constants/categories'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import Subtitle from '../../components/Subtitle/index'
import SegmentedControl from '../../components/SegmentedControl/index'
import TabContainer from '../../components/TabContainer/index'
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selector'; 
import { connect,useDispatch,useSelector } from 'react-redux';
import CategoriesList from '../../components/CategoriesList/index'

const CategoriesScreen = props => {
    const expenseCategories = useSelector(state=>getExpenseCategory((state.categories.allCategories)));
  const incomeCategories = useSelector(state=>getIncomeCategory((state.categories.allCategories)));
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const tabs = [types.income,types.expense]
    const handleTabpress = (index) =>{
        setSelectedTabIndex(index)
    }
    const onSelectCategory = (id) =>{
        console.log(id);
        props.navigation.navigate('CategoryEditor', { catId: id });
      }
    return(
        <ScreenWrapper>
            <Subtitle leftText ="Categories" />
            <SegmentedControl  values={tabs}   selectedIndex={selectedTabIndex}   
            onTabPress={handleTabpress}/>
            <TabContainer   
                selectedTabIndex={selectedTabIndex}
                tabIndex={0}
                topOffset={90} >
            <CategoriesList  
                categories={incomeCategories}
                onSelect = {onSelectCategory}
               />
            </TabContainer>
            <TabContainer   selectedTabIndex={selectedTabIndex}
                tabIndex={1}
                topOffset={90} >
                    <View><Text>Tab Index 2</Text></View>
            </TabContainer>
        </ScreenWrapper>
    )
}

export default CategoriesScreen ;