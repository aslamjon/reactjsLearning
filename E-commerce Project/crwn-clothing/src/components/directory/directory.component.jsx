import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selector'

import { DirectoryMenuContainerStyle } from './directory.style';

const Directory = ({ sections }) => (
    <DirectoryMenuContainerStyle>
        {sections.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </DirectoryMenuContainerStyle>
);

const mapsStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapsStateToProps)(Directory);