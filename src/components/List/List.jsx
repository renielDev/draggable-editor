import styled from 'styled-components'
import ListItem from './ListItem'

const List = styled.ul`
  background: red;
  width: 400px;
  list-style: none;
  margin: 0;
  padding: 0;
`

List.Item = ListItem

export default List
