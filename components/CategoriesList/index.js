import React from 'react';
import T from 'prop-types';
import { View, FlatList, TouchableOpacity,Text } from 'react-native';
import Modal from 'react-native-modal';
import  Separator  from '../Separator/index';
import  CategoryItem  from './components/CategoryItem';
import s from './styles';


const CategoriesList =props => {
  const _keyExtractor = item => item.id;
  const onSelectHandle = (item) => {
    props.onSelect(item.id);            
}

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelect={onSelectHandle.bind(this,item)}
    />
  );
  return props.isModal ?

    <View>
      <View style={s.calendarIcon}>
        <TouchableOpacity onPress={props.onToggleModal} />
      </View>

      <Modal
        style={s.modal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={props.isVisible}
        onBackdropPress={props.onToggleModal}
      >
        <View style={s.container}>
          <View>
            <Text style={s.headerText}>Choose category</Text>
            <Separator />
          </View>
          <FlatList
            data={props.categories}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={props.categories.length ? <Separator /> : null}
          />
        </View>
      </Modal>
    </View>

    :

    <View style={s.listContainer}>
      <Separator />
      <FlatList
        data={props.categories}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={props.categories.length ? <View style={s.footer}><Separator /></View> : null}
      />
    </View>;
};

CategoriesList.propTypes = {
  isModal: T.bool,
  isVisible: T.bool,
  onToggleModal: T.func,
  onSelect: T.func,
  categories: T.array,

};

export default CategoriesList;
