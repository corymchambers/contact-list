import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

import { fetchRandomContact } from '../utils/api'

import colors from '../utils/colors'

export default class Profile extends Component {

  render() {
    console.log('props', this.props.route.params)
    // const { navigation: { state: { params } } } = this.props
    // const { contact } = params
    const { avatar, name, email, phone, cell } = this.props.route.params.contact

    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail
            avatar={avatar}
            name={name}
            phone={phone}
          />
         </View>
        <View style={styles.detailsSection}>
          <DetailListItem
            icon='mail'
            title='Email'
            subtitle={email}
          />
          <DetailListItem
            icon='phone'
            title='work'
            subtitle={phone}
          />
          <DetailListItem
            icon='smartphone'
            title='Personal'
            subtitle={cell}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignSelf: 'stretch'
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white'
  }
})