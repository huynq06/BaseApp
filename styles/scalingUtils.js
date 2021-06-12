import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => Math.round(width / guidelineBaseWidth * size);
const verticalScale = size => Math.round(height / guidelineBaseHeight * size);
const moderateScale = (size,factory = 0.5) => Math.round(size + (scale(size) - size) *factory);

export {scale,verticalScale,moderateScale};