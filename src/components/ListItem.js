import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  renderDescription () {
    const { library, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
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

// 将判断渲染具体ListItem的逻辑从组件移入此函数
// mapStateToProps的第二个参数为传入当前组件的props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectionLibraryId === ownProps.library.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
