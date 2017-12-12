/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: 0,
    backgroundColor: '#DDA0DD'
  },
  headerStyle: {
    backgroundColor: '#DDA0DD'
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
  imageStyle: {
    alignSelf: 'center',
    width: 160,
    height: 200
  },
  detailBody: {
    alignSelf: 'center',
    margin: 10
  },
  detailMargin: {
    marginBottom: 10
  },
  detailHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles