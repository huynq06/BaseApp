import React from 'react'
import ProTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  *  as dimensions  from '../../styles/dimensions';


const NavIcon = props => {
    return(
        <MaterialCommunityIcons
        size={dimensions.iconSize}
        style={{color:props.tintColor}}
        {...props}
    />
    )
   
}

NavIcon.prototype = {
    tintColor: ProTypes.string
}

export default NavIcon