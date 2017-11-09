/**
 * Created by nh019849 on 11/3/17.
 */

'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    //height: 22,
    height: 0,
    backgroundColor: '#FF9933'
  },
  whiteBackColor: {
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: 10
  },
  itemLeftViewStyle: {
    width: 160,
    height: 200,
    marginBottom: 14,
    backgroundColor: '#33FFDD',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#33FFDD',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    marginRight: 10
  },
  itemRightViewStyle: {
    width: 160,
    height: 200,
    marginBottom: 14,
    backgroundColor: '#33FFDD',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#33FFDD',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    marginLeft: 10
  },
  imageStyle : {
    alignSelf: 'center',
    width: 160,
    height: 200
  }
});

export default styles