import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'

class LibraryList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.libraries)
    }
  }

  renderRow (rowData) {

  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
