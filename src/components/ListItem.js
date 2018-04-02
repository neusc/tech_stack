import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  renderDescription () {
    const { library, selectLibraryId } = this.props
    if (library.id === selectLibraryId) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render () {
    const { title, id } = this.props.library
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectLibraryId: state.selectionLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem)
