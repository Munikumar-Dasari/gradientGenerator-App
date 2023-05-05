// Write your code here
import {ButtonItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemDetails, clickDirectionItem, isActive} = props
  const {displayText, value} = directionItemDetails

  const onClickDirection = () => {
    clickDirectionItem(value)
  }

  return (
    <ButtonItem>
      <Button type="button" onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </Button>
    </ButtonItem>
  )
}

export default GradientDirectionItem
