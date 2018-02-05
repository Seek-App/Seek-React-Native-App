'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, ListView } from 'react-native-elements'
import { View, Text } from 'react-native'


class FormAWord extends Component {

  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.props.satchel.map((satchelLetter) => (
              <ListItem
                roundAvatar
                avatar={{ uri: 'http://dreamicus.com/data/apple/apple-04.jpg' }}
                key={satchelLetter.id}
                title={`Drop the letter ${satchelLetter.letterCategory.name}`}
                onPress={() => {
                  this.props.updateLetter(satchelLetter.id, { latitude: this.props.userLocation.latitude, longitude: this.props.userLocation.longitude })
                  this.props.navigation.goBack()
                }
                }
              />
            ))
          }
        </List>
      </View>
    )
  }
}


const mapStateToProps = ({ user, satchel, userLocation }) => ({ user, satchel, userLocation })
const mapDispatchToProps = ({ })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAWord)
