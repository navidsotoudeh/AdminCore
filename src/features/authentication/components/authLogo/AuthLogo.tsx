import ChoganLogo from '../../../../assets/images/chogan.png'
import { Text } from '../../../../components/UIKit'
import classes from '../../styles/Login.module.css'
function AuthLogo() {
  return (
    <div className={classes.logo}>
      <div className="flex flex-col items-end">
        <Text htmlTag="p" variant="body4">
          Powered by
        </Text>
        <Text htmlTag="p" variant="body4">
          Andishe Pardazan Chogan
        </Text>
        <Text htmlTag="p" variant="body4">
          Version: {import.meta.env.VITE_BUILD_VERSION}
        </Text>
      </div>
      <img src={ChoganLogo} alt="" style={{ alignSelf: 'start' }} />
    </div>
  )
}
export default AuthLogo
